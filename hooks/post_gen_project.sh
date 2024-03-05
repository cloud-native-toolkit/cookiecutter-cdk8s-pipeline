#!/usr/bin/env bash

set -euo pipefail

yarn install
npx projen

git init
git add . 
git commit -m "Initial import for {{cookiecutter.pipeline_name}}"
