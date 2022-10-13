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
2. [Common Features of Build Tools](#features)
3. [Stages](#stages)
4. [Continuous Integration](#continuous-integration)
5. [Popular Build Tools](#popular-build-tools)
6. [Conclusions](#conclusions)

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

name: popular-build-tools

# Popular Build Tools

--

## Make

Make, included in UNIX starting in 1976, and the many automation tools derived from the original make, is considered a classic build automation tool.

--

- Created by Stuart Feldman to solve the all-too-common problem of developers wasting time debugging builds where the problem was human error in performing the build, not software bugs in the code.

--

![Stuart Feldman](../images/build-systems-stuart-feldman.png)

---

template: popular-build-tools
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

template: popular-build-tools

## Make (continued again)

See [an example](https://knowledge.kitchen/Popular_system_build_tools#Example) of a simple Makefile.

---

template: popular-build-tools

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

template: popular-build-tools

## Ant

Apache Ant, begun in 2000, is a popular automated build tool that was designed explicitly to address some of the shortcomings of Make for Java builds.

---

template: popular-build-tools

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

template: popular-build-tools

## Ant (continued again)

See [an example](https://knowledge.kitchen/Popular_system_build_tools#Example_2) of an Ant `build.xml` file.

---

template: popular-build-tools

## Ant (again once more)

Ant has suffered criticism on a few fronts:

--

- _XML, today, is considered to be overly verbose and redundant_ as a structured data markup language. JSON and YAML are considered more concise and elegant.

--

- _Each build script tends to be custom_: there is little convention applied to scripts. This results in "reinventing the wheel" each time.

--

- _Ant suffers from legacy Java compatibility issues_: some tasks that Ant supports, such as javac and java, use default argument options that are no longer current with the latest Java. Changing the implementation of these would break older code, so the developers have not updated Ant to more modern usage conventions.

---

template: popular-build-tools

## Maven

Apache Maven is a successor to Apache Ant, initially released in 2004, that aims to address some of Ant's shortcomings, plus adding some additional features.

---

template: popular-build-tools

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

- maintains a repository of plug-ins for easy discovery and installation

---

template: popular-build-tools

## Maven (continued again)

See [an example](https://knowledge.kitchen/Popular_system_build_tools#Examples) of a Maven pom.xml build file.

---

template: popular-build-tools

## Maven (continued again once more)

Like build systems before it, Maven has its critics.

--

- As with Ant, Maven's _reliance on XML for configuration scripts seems outdated_.

--

- Maven _requires a rigid adherence to convention_: developers requiring a custom configuration may find it difficult to work with.

--

- A project's _build steps are not well-documented_ when using Maven, since it relies so much on hidden defaults and doesn't explicitly include each step in the build scripts..

---

template: popular-build-tools

## Gradle

Gradle is [yet another] open source build automation tool primarily focused on Java projects.

---

template: popular-build-tools

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

template: popular-build-tools

## Gradle (continued again)

See [an example](https://knowledge.kitchen/Popular_system_build_tools#Example_3) of a Maven build.gradle file.

---

template: popular-build-tools

## Grunt & Gulp

[Grunt](https://gruntjs.com/) and [Gulp](https://gulpjs.com/) a Javascript-specific **task runners** - tools for general-purpose automation of repetitive build-related tasks, including:

- minification of code
- compilation
- unit testing
- code linting
- etc.

---

template: popular-build-tools

## Grunt

Key features:

--

- open source

--

- build scripts written in Javascript in a file named `Gruntfile`, in homage to [Makefiles](#makefiles).

--

- attempts to bring the joy of Ant/Maven/Gradle-style automated builds specifically into the world of Javascript projects.

---

template: popular-build-tools

## Grunt (continued again)

See [an example](https://knowledge.kitchen/Popular_system_build_tools#Example_4) of a Gruntfile.

---

template: popular-build-tools

## NPM

In many ways, Node Package Manager (NPM) itself can be considered a build tool.

---

template: popular-build-tools

## NPM (continued)

NPM includes:

--

- tracking dependencies (in the package.json file)

--

- automated builds (by running `npm install`)

--

- integration with unit testing (by adding a `test` script to package.json)

--

- allows any arbitrary script to be run (by adding scripts to package.json)

---

template: popular-build-tools

## NPM (continued again)

NPM package.json files are so pervasive in app development today that they need no example here.

---

name: conclusions

# Conclusions

---

# Conclusions

You have seen some of the most significant software build tools and how they have evolutionarily progressed throughout build system history.

--

- Thank you. Bye.
