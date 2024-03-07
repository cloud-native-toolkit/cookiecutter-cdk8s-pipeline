#!/usr/bin/env bash

yarn install
npx projen

GIT_USERNAME=$(git config user.name)

if [ -z "${GIT_USERNAME}" ]; then
    git config --global user.name "{{cookiecutter.author}}"
    git config --global user.email "{{cookiecutter.author_email}}"
fi

git init
git add . 
git commit -m "Initial import for {{cookiecutter.pipeline_name}}"

