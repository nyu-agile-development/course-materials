---
layout: presentation
title: Continuous Integration
permalink: /slides/continuous-integration/
---

class: center, middle

# Continuous Integration

Automatically run unit tests.

---

# Agenda

1. [Overview](#overview)
2. [Typical Workflow](#ci-workflow)
3. [Best Practices](#best-practices)
4. [Software as a Service](#software-as-service)
5. [Circle CI](#circle-ci)
6. [Conclusions](#conclusions)

---

name: overview

# Overview

--

## Concept

As developers work on a project, they make changes.

--

- Every time a change is made, there is a risk of bugs being introduced.

--

- In order to discover bugs, the software must be periodically built and tested.

--

- **Continous Integration (CI)** is the automated process of building and testing software everytime a component of the system changes.

---

template: overview

## Benefits

Automated Continuous Integration has several benefits:

--

- uncover bugs more quickly through frequent builds, tests, and notifications

--

- improve quality

--

- reduce time to validate builds

--

- reduce human labor costs

---

name: ci-workflow

# Typical Workflow

--

## Overview

![Continuous Integration process diagram](../images/continuous_integration_process.png)

---

template: ci-workflow

## Version Control

When a developer makes changes to a system, they typically check those changes into a version control system.

--

- A continuous integration server will be notified whenever a new change has been made.

--

- This notification can arrive either by continually polling the version control logs looking for changes, or by receiving an API call (i.e. a hook) from the version control system when a change is made.

---

template: ci-workflow

## Build System

Once a change to the version control repository has been detected, the Continous Integration server will automatically trigger a new build to begin in order to be able to test the system once the build is done.

--

- Build Systems typically remove any artefacts from previous builds, and assemble the system from scratch.

--

- Builds can occur on a developer's local machine, on a build server, or even on the target production server.

--

- In a Continuous Integration pipeline, once the build is done, the testing framework begins running automated tests.

---

template: ci-workflow

## Testing Framework

Once a fresh build is complete, the testing framework will run automated tests on the system.

--

- Unit Tests, Integration Tests, System Tests, and any other tests that support automation can all be executed.

--

- Once testing is complete, developers are notified of the success or failure of all tests.

---

template: ci-workflow

## Notifications

Developers are notified, immediately upon completion of the build and test phases, whether each of the steps succeeded or failed.

--

With most Continuous Integration tools, notifications can be sent via

--

- email

--

- SMS

--

- Slack or Discord messages

--

- notification apps

--

- calls to any arbitrary API endpoint for custom notifications or follow-up automated steps

---

template: ci-workflow

## Badges

In popular project management tools such as GitHub, badges automatically posted to a repository's README.md can indicate the last known success or failure of the build and tests for all to see.

--

![Continuous Integration badges](../images/continuous_integration_badges.png)

---

name: best-practices

# Best Practices

--

## Commit small changes

Committing small changes to version control limits the scope of what has changed so failures in building or testing are more quickly identified and remedied.

---

template: best-practices

## You break it, you fix it!

If a given developer has broken the build, it is their responsibility to fix it.

--

- Developers are often expected to be _always on call_ to fix broken builds...

--

- ... or whatever else a manager thinks is important.

---

template: best-practices

## Test the right stuff

It's common to miss obvious bugs because automated unit and integration tests have poor code coverage or test the wrong things.

--

- This is a problem with all unit testing and is not unique to Continuous Integration automation of those tests.

---

template: best-practices

## What to produce

Plan on producing a status, a log, and an artefact.

--

- the **status** is the result, whether the build succeeded or failed

--

- the **log** contains a list of the steps that were completed in the build, and the results of all tests

--

- the **artefact** can be anything that is intended to be produced by the CI server, such as the built software in a bundled and ready-to-deply form, or a generated report on the code coverage of the unit tests, or an auto-generated web page documenting the system, etc.

---

name: software-as-service

# Software as a Service

--

## Continuous Deployment

An extension of Continuous Integration is Continuous Deployment (CD)...

--

- Assuming Continuous Integration build/test passes, the CI/CD automation server takes the additional step of...

--

- Deploying (cloning, installing and running) the built system on a production server - the server where customers can immediately access the latest version.

---

template: software-as-service

## CI/CD Automation pipelines

Continuous Integration (CI), followed by Continuous Deployment (CD) goes hand-in-hand with **Software as a Service** (SaaS).

--

- SaaS systems are deployed not to the customers' local machines, but to the software distributor's own servers.

--

- Doing so allows the software distributor to maintain control and ownership of software at all times while granting access to the software to customers / end-users, rather than actually deploying software on customers' own machines.

--

- Since changes to the source code immediately trigger new builds and deployment of the latest code, customers will always have immediate access to the latest stable version of the software.

---

name: circle-ci

# Circle CI

--

## Hosted continuous integration service

[Circle CI](https://circleci.com) is a proprietary hosted Continuous Integration web service with a free tier of service that is suitable for small projects.

---

template: circle-ci

## Virtual build servers

When a change is detected in version control, Circle CI boots up a new virtual server.

--

- Circle CI clones the version control repository into the virtual machine, and performs the build and test.

---

template: circle-ci

## Key features

Circle CI comes with the common features of any continuous integration server.

--

- hosted continuous integration solution

--

- free tier

--

- at its simplest, requires the addition of a configuration file to a repository

--

- supports building and testing of many programming languages

--

- integrates with other popular DevOps tools and practices

---

template: circle-ci

## Basic configuration

Circle CI's build and test configuration is written in YAML (YAML Ain't Markup Language) and saved into a file named `config.yml` in a `.circleci` directory of your project.

--

- See an [example config for a React.js/Express.js-based app](https://github.com/nyu-software-engineering/generic-project-repository/blob/master/.circleci/config.yml)

---

template: circle-ci

## Highly configurable

Circle CI supports detailed instructions and can run arbitrary code at various lifecycle points in the build.

---

template: circle-ci

## GitHub integration

To link Circle CI to a GitHub repository, such that it detects changes to the repository and triggers continuous integration builds and testing, go to [circleci.com](https://circleci.com).

--

- Follow the instructions there to link to a GitHub repository. You will be asked to authorize the app on GitHub, and then can modify settings within the travis web app. The setup is relatively straightforward.

--

- As a best practice, have Circle CI _perform automated builds on pull requests_. This allows the pull request reviewer to be sure the code builds and passes automated tests prior to merging the code.

---

template: circle-ci

## Messenger integration

Circle CI can send notifications to Slack or other messenger apps indicating the results of the latest build.

--

- To do so, the Circle CI app must be authorized for the given messenger app workspace.

--

- So your instructor may, unfortunately, be reluctant to allow this.

---

template: circle-ci

## Badges

You can embed build status badges that Circle CI will use to automatically _show the latest status of your build_ into your project's `README.md`.

--

- The Markdown code to use for status badge images are shown on your Circle CI project settings page, and are something like:

```
[![CircleCI](https://circleci.com/gh/software-assignments-spring2022/your-repo-name-here/tree/master.svg?style=shield)](https://circleci.com/gh/software-assignments-spring2022/your-repo-name-here/tree/master)
```

---

template: circle-ci

## Warnings Cause Build Failure

By default, both _errors_ and _warnings_ produced by a project will cause the continuous integration server to fail the build.

--

- React.js projects are particularly prone to issuing many warnings that cause the build to fail.

--

- if an environment variable `CI` is set to `false`, most continuous integration servers will ignore warnings.

--

- For a React.js project, set this environment variable by modifying the `build` script in the `package.json` file to: ` "build": "CI=false && react-scripts build"`

---

name: conclusions

# Conclusions

---

# Conclusions

Thank you. Bye.
