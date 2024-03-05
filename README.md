# Template project for creating cdk8s pipeline constructs

This is a [cookiecutter](https://cookiecutter.readthedocs.io/en/stable/) template project that you
can use to create [cdk8s](https://cdk8s.io/)
[constructs](https://constructs.dev/search?cdk=cdk8s&sort=downloadsDesc&offset=0) for [Red Hat
OpenShift Pipelines](https://www.redhat.com/en/technologies/cloud-computing/openshift/pipelines) and
[Tekton](https://tekton.dev/docs/getting-started/) pipelines.

To use this template, use the following commands, assuming you have
[cookiecutter installed](https://cookiecutter.readthedocs.io/en/stable/README.html#installation).

```bash
cookiecutter git@github.com:cloud-native-toolkit/cookiecutter-cdk8s-pipeline.git
```

## Prerequisites

Before you can run this template, make sure that you have the following installed:

* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 2.43.x or higher
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 18.x or higher
* [yarn](https://yarnpkg.com/migration/overview#why-should-you-migrate) 1.22.x or higher

The command will prompt you for a few values and then create the project for you. After
creating the project, `cookiecutter` will use `yarn` to install the dependencies and then
use `npx projen` to regenerate the project artifacts.

The project was originally created with `npx projen`, and then "template-ized", so
you can run `npx projen` in the project to generate any files.
