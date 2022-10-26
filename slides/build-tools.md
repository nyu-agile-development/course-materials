---
layout: presentation
title: System Build Tools
permalink: /slides/build-tools/
---

class: center, middle

# Build Tools

System building in preparation for execution.

---

# Agenda

1. [Overview](#overview)
1. [Common Features of Build Tools](#features)
1. [Stages](#stages)
1. [Continuous Integration](#continuous-integration)
1. [The Original Build Tool](#original-build-tools)
1. [Java Build Tools](#java-build-tools)
1. ... [Intermission](#package-managers) ...
1. [JavaScript Build Tools](#javascript-build-tools)
1. [Python Build Tools](#python-build-tools)
1. [Conclusions](#conclusions)

---

name: overview

# Overview

--

## Concept

System building is the process of creating complete, executable system by compiling and linking the system components, external libraries, configuration files, and other information.

---

template: overview

## Challenge

System building must take into account many complex environmental and programmatic factors, and steps must often be performed in a particular sequence in order for the build to succeed.

---

template: overview

## Solution

Automated build tools are generally necessary to handle the complexity.

---

name: features

# Common Features of Build Tools

--

## Build Script Generation

The build system should analyze the program that is being built, identify dependent components, and automatically generate a build script (configuration file).

The system should also support the manual creation and editing of these build scripts.

---

template: features

## Version Control Integration

The build system should be able to check out the required versions of components from a version control system.

---

template: features

## Minimal Recompilation

The build system should work out what source code needs to be recompiled and set up compilations as necessary.

---

template: features

## Executable System Creation

The build system should link the compiled object code files with each other and with other required files, such as libraries and configuration files, to create an executable system

---

template: features

## Test Automation

Build systems should be able to integrate with test automation tools such as xUnit other similar unit testing tools which check that the build has not been "broken" by the changes.

---

template: features

## Reporting

The build system should provide reports about the success or failure of the build and the tests that have been run.

---

template: features

## Documentation

The build system configuration script serves as a form of documentation

--

- At the very least, a build configuration script documents the dependencies of the system

--

- It also documents the order in which all steps of the build must occur

--

- A build system may also be able to generate release notes about the build and system help pages automatically.

---

name: stages

# Stages

--

## Developer's Machine

Developers may wish to test and build locally before performing the 'official' build.

They will typically check out the latest version from the version control system and try to build it locally.

The developer's machine often differs significantly from the target machine that code will be deployed to.

---

template: stages

## Build Server

Used to build the definitive version of the system.

Should integrate with the version control system to build the latest.

---

template: stages

## Target Machine

The platform on which the system is ultimately intended to execute. This may be significantly different from the development machines and build servers.

Keeping the developer's machines and the build server environment in close emulation of the Target Environment is a whole 'nother area of automation.

In cases where the target machines differ significantly from the others, testing cannot be complete until done on a target machine.

---

name: continuous-integration

# Continuous Integration

--

## Automated Build and Test

Agile methodology promotes the practice of very frequent automated builds and automated testing once the build is done.

--

- Such automated or semi-automated processes in the software engineering lifecycle are collectively known as **continuous integration** (CI).

--

- **Jenkins** and **Travis CI** are two popular tools for performing Continuous Integration - there are many others as well.

---

name: original-build-tools

# The Original Build Tool

--

## Make

Make, included in UNIX starting in 1976, and the many automation tools derived from the original make, is considered a classic build automation tool.

--

- Created by Stuart Feldman to solve the all-too-common problem of developers wasting time debugging builds where the problem was human error in performing the build, not software bugs in the code.

--

![Stuart Feldman](../images/build-systems-stuart-feldman.png)

---

template: original-build-tools
name: makefiles

## Make (continued)

Key features:

--

- used primarily for C and C++ development, but can be used as generaal purpose automation tool

--

- build script written in an idiosyncratic script file named `Makefile`

--

- allows multiple build targets

--

- tracks dependencies

--

- performs minimal recompilation

---

template: original-build-tools

## Make (continued again)

See...

- [an example](../files/build-tools/makefile-example1.txt) of a simple `Makefile`.
- [a slightly more advanced example](../files/build-tools/makefile-example2.txt) that achieves the same build but removes some redundancy.

---

template: original-build-tools

## Make (continued once more)

> "If you move stuff around and do more than just invoking the compiler (and even then), the platform-specific stuff gets very awkward to handle in make. And having a makefile which only works on one system isn't very nice for a cross-platform language"
>
> -Joey, from Stack Overflow

--

Make has a few limitations that have led to the development of later build systems:

--

- Make is most often _used by C and C++ developers_, even though it does, in theory, work for other languages.

--

- Makefile instructions are _written as shell commands_, which are inherently platform-specific.

--

- Make does not deal well with files spread across a _complex directory structure_, such as often the case in Java and many other languages and platforms.

---

name: java-build-tools

# Java Build Tools

--

## Ant

Apache Ant, begun in 2000, is a popular automated build tool that was designed explicitly to address some of the shortcomings of Make for Java builds.

---

template: java-build-tools

## Ant (continued)

Key features:

- open source

--

- build scripts written in XML in a file named `build.xml`

--

- supports same basic functionality as Make, but...

--

- is platform-agnostic, unlike Make

--

- contains a built-in recognition of common steps in building Java projects, unlike Make

--

- integrates with unit testing frameworks, such as JUnit

---

template: java-build-tools

## Ant (continued again)

See [an example](../files/build-tools/ant-example1.txt) of an Ant `build.xml` file.

---

template: java-build-tools

## Ant (again once more)

Ant has suffered criticism on a few fronts:

--

- _XML, today, is considered to be overly verbose and redundant_ as a structured data markup language. JSON and YAML are considered more concise and elegant.

--

- _Each build script tends to be custom_: there is little convention applied to scripts. This results in "reinventing the wheel" each time.

--

- _Ant suffers from legacy Java compatibility issues_: some tasks that Ant supports, such as javac and java, use default argument options that are no longer current with the latest Java. Changing the implementation of these would break older code, so the developers have not updated Ant to more modern usage conventions.

---

template: java-build-tools

## Maven

Apache Maven is a successor to Apache Ant, initially released in 2004, that aims to address some of Ant's shortcomings, plus adding some additional features.

---

template: java-build-tools

## Maven (continued)

Key features:

--

- open source

--

- build scripts written in XML in a file named `pom.xml`

--

- supports same basic functionality as Ant, but...

--

- unlike Ant, Maven takes a "**convention over configuration**" approach

--

- _supports multiple languages_, not just Java (although in reality it is mostly used for Java)

--

- _plug-in architecture_ allows 3rd-party tools to be integrated into Maven builds

--

- maintains a repository of plug-ins for easy discovery and a _package manager_ to handle installing them

---

template: java-build-tools

## Maven (continued again)

See [an example](../files/build-tools/maven-example1.txt) of a Maven `pom.xml` build file.

---

template: java-build-tools

## Maven (continued again once more)

Like build systems before it, Maven has its critics.

--

- As with Ant, Maven's _reliance on XML for configuration scripts seems outdated_.

--

- Maven _requires a rigid adherence to convention_: developers requiring a custom configuration may find it difficult to work with.

--

- A project's _build steps are not well-documented_ when using Maven, since it relies so much on hidden defaults and doesn't explicitly include each step in the build scripts..

---

template: java-build-tools

## Gradle

Gradle is [yet another] open source build automation tool primarily focused on Java projects.

---

template: java-build-tools

## Gradle

Key features:

--

- open source

--

- build scripts written in Groovy in a file named `build.gradle`

--

- supports same basic functionality as Maven, but...

--

- _easier to customize_ a build than in Maven

---

template: java-build-tools

## Gradle (continued again)

See [an example](../files/build-tools/gradle-example1.txt) of a Gradle `build.gradle` file.

---

name: package-management

# Intermission

--

## Package managers

A "_package_" is software that has been designed to be easily distributed via a "[package manager](https://en.wikipedia.org/wiki/Package_manager)" (sometimes called a _dependency manager_) so that others can easily download, install, configure, and use the package in their own applications.

- Java has two popular package managers: [Maven](https://maven.apache.org/) and [Gradle](https://gradle.org/).
- Javascript's default package manager is [npm](https://www.npmjs.com/).
- Python's default package manager is [pip](https://pypi.org/project/pip/)
- Swift's default package manager is the [Swift Package Manager](https://swift.org/package-manager/)
- ... etc.

Package managers thus maintain repositories of packages and provide the tools to install and configure those packages.

---

template: package-management

## Now on with the show

As we'll see, the Javascript and Python build tools ecosystems center heavily on package managers.

---

name: javascript-build-tools

# JavaScript Build Tools

--

## Overview

JavaScript has one of the most sophisticated and rapidly evolving tooling environment of any language. Some popular build-related tools include:

- `npm` and `yarn` - package managers
- `webpack` and `parcel` - bundlers

---

template: javascript-build-tools

## Package managers

[npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/en/) are package managers for Javascript that have build-related capabilities.

- `npm` is the default package manager for Node.js
- `yarn` is a newer package manager that aims to be faster and more secure than `npm`
- document, install, and manage dependencies and configuration settings in a `package.json` file
- installing a project's dependencies is as simple as running `npm install`
- can also include arbitrary scripts that can be run with `npm run <script-name>` or `yarn run <script-name>`
- startup script is usually called with a simple `npm start` or `yarn start`
- test scripts are usually run with a simple `npm test` or `yarn test`
- see [example of a package.json](../files/build-tools/npm-example1.txt) file

---

template: javascript-build-tools

## Webpack and parcel

[webpack](https://webpack.js.org/) and [parcel](https://parceljs.org/) are bundlers for Javascript.

- traditionally take a bunch of separate Javascript files and bundle them into a single file.
- can also be used as a task runner to trigger other actions like minification, transpilation, etc.
- include "hot reloading" which means that whenever you save a file, a new build will be triggered automatically
- `webpack` is the more common bundler in use today, but configuring it is complex
- `parcel` markets itself as "zero-configuration" competitor

---

name: python-build-tools

# Python Build Tools

--

## Overview

The Python build tool ecosystem has historically been less developed, but has recently taken inspiration from Java and JavaScript. Some popular tools:

- `pip` - package manager
- `venv` - virtual environments
- `conda` - package manager and virtual environments!
- `pipenv` - modular reproducible sharable virtual environments
- `distutils` and `setuptools` - build tools for creating packages

---

template: python-build-tools

## Package managers and virtual environments

[pip](https://pip.pypa.io/en/stable/) is the default package managers for Python. `pip` is used to document, install, and manage dependencies in most Python projects

- packages in `pip` are stored in the [Python Package Index](https://pypi.org/) (PyPI) - a repository of Python packages
- [venv](https://docs.python.org/3/library/venv.html) - allows dependencies to be installed modularly in a project-specific "virtual environment"
- [pipenv](https://packaging.python.org/en/latest/tutorials/managing-dependencies/) - makes it easier to manage virtual environments in a portable, easily-shareable way

--

[conda](https://conda.io/docs/) is a competitor package manager like `pip` that also manages virtual environments like `venv` and `pipenv`. It is part of the popular [Anaconda](https://www.anaconda.com/) data science toolkit.

---

template: python-build-tools

## Distutils and setuptools

When it comes to creating packages so that software is easily distributed from the `PyPI` via `pip` or `conda`, Python has two main tools:

- [distutils](https://docs.python.org/3/library/distutils.html) - the default module for creating packages for distribution via a package manager
- [setuptools](https://setuptools.readthedocs.io/en/latest/) - a higher-level tool that builds on top of `distutils` and provides additional functionality
- [build](https://pypa-build.readthedocs.io/en/stable/differences.html#setup-py-sdist-bdist-wheel) - an even higher-level build tool that works with projects designed for use with `setuptools` as well as other build systems.

--

In practice, one need only use `build` directly, as this provides a high-level interface to the functionality of `setuptools` and `distools` - see [discussion](https://stackoverflow.com/questions/68545064/python-commands-to-build-distribution-setup-py-build-vs-python-m-build) on this point.

--

[twine](https://pypi.org/project/twine/) is a tool for publishing packages to the PyPI repository so others can access, install, and use them.

---

template: python-build-tools

## Python's build ecosystem (continued)

Python builds result in packages consisting of two artifacts:

- **sdist** - a compressed archive of the source code that can be used to build the software on an end-users machine
- **wheel** - the [pre-built distribution package](https://packaging.python.org/en/latest/glossary/#term-Built-Distribution) that can be installed directly without requiring the end-user to build the software

---

name: conclusions

# Conclusions

---

# Conclusions

You have seen some of the most significant software build tools and how they have evolutionarily progressed throughout build system history.

--

- Thank you. Bye.
