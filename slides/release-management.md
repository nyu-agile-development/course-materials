---
layout: presentation
title: Release Management
permalink: /slides/release-management
---

class: center, middle

# Release Management

An organized approach to versioning software releases.

---

# Agenda

1. [Overview](#overview)
1. [Semantic Versioning](#semantic-versioning)
1. [Git Tags](#git-tags)
1. [GitHub Releases](#github)
1. [Conclusions](#conclusions)

---

name: overview

# Overview

--

## Concept

Release management is the streamlined approach to issuing software releases.

---

template: overview

## Contents

What is in a release? The following are some common contents:

- the working software
- configuration files
- data files
- an installation program
- documentation
- marketing materials

---

template: overview

## Release Timing

The date on which a release is published is often dependent upon a number of factors:

- level of effort to complete the release
- the release schedules of technical dependencies
- the release schedules of the competition
- marketing parternships and promotions
- business reasons why one particular date might be better than another

---

name: semantic-versioning

# Semantic Versioning

--

## Concept

Software versions using the [Semantic Versioning](https://semver.org/) system take the form of:

X.Y.Z

Where...

- X is the **major version** number
- Y is the **minor version** number
- Z is the **patch** number

---

name: rules
template: semantic-versioning

## Rules

Semantic Versioning requires 12 rules. The first 8 are the most important and are included here.

---

template: rules

### Rule 1: Public API

Software using Semantic Versioning MUST declare a public API. This API could be declared in the code itself or exist strictly in documentation. However it is done, it should be precise and comprehensive.

---

template: rules

## Rule 2: Version Number Format

A normal version number MUST take the form X.Y.Z where X, Y, and Z are non-negative integers, and MUST NOT contain leading zeroes. X is the major version, Y is the minor version, and Z is the patch version. Each element MUST increase numerically. For instance: 1.9.0 -> 1.10.0 -> 1.11.0.

---

template: rules

## Rule 3: Immutability of Versions

Once a versioned package has been released, the contents of that version MUST NOT be modified. Any modifications MUST be released as a new version.

---

template: rules

## Rule 4: In-Develepment API Version

Major version zero (0.y.z) is for initial development. Anything may change at any time. The public API should not be considered stable.

---

template: rules

## Rule 5: Initial Public API Version

Version 1.0.0 defines the public API. The way in which the version number is incremented after this release is dependent on this public API and how it changes.

---

template: rules

## Rule 6: Patch Versions

Patch version Z (x.y.Z | x > 0) MUST be incremented if only backwards compatible bug fixes are introduced. A bug fix is defined as an internal change that fixes incorrect behavior.

---

template: rules

## Rule 7: Minor Versions

Minor version Y (x.Y.z | x > 0) MUST be incremented if new, backwards compatible functionality is introduced to the public API. It MUST be incremented if any public API functionality is marked as deprecated. It MAY be incremented if substantial new functionality or improvements are introduced within the private code. It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented.

---

template: rules

## Rule 8: Major Versions

Major version X (X.y.z | X > 0) MUST be incremented if any backwards incompatible changes are introduced to the public API. It MAY include minor and patch level changes. Patch and minor version MUST be reset to 0 when major version is incremented.

---

template: semantic-versioning

## Criticisms

While Semantic Versioning is arguably the most popular formalized approach to the problem versioning, it does have its critics.

- For example: Rich Hickey's [Semantic Versioning is a Lie](https://www.youtube.com/watch?v=oyLBGkS5ICk&t=1793s) and Hynek Schlawack's [Semantic Versioning Will Not Save You](https://hynek.me/articles/semver-will-not-save-you/)

--

- Criticism tends to focus on the fact that, in practice, patches and minor version updates often result in broken applications, despite the best of intentions.

--

- In that context, semantic versioning's clear rules seem like wishful thinking that belies a more complex reality.

---

name: calendar-versioning

# Calendar Versioning

--

## Overview

[Calendar versioning](https://calver.org/) is a simple approach to versioning software releases. It uses the date of the release as the version number.

- The date is the only version number.
- There is no concept of a major, minor, or patch version.
- No concept of a "public API".
- The spec provides flexibility in how the date is formatted.

--

Essentially a fancy version of the time-tested technique of naming your files with the date in the filename.

-

Your old `my-homework-2022-01-01.txt` now becomes a `My Homework` repository tagged with version `22.01.01`

---

name: git-tags

# Git Tags

--

## Concept

Git's tagging features can be used to mark the repository at a moment in time as a particular release.

---

template: git-tags

## Create Tag

Create a tag on the currently checked-out branch, labeling it as release version 1.0.0:

```
git tag v1.0.0
```

---

template: git-tags

## Create Tag with a Message

Leave an optional message to go along with a tag.

```
git tag -a v1.0.0 -m "initial version of the coffee grind future fineness predictive algorithm"
```

---

template: git-tags

## Push Tag

Push the release to an upstream remote repository, such as GitHub:

```
git push origin v1.0.0
```

---

template: git-tags

## Switch to Tag

Checkout code from the master branch as it was at release version 1.0.0:

```
git checkout -b master v1.0.0
```

---

name: github

# GitHub Releases

--

## Concept

GitHub repositories have a 'Releases' page, linked from sub-navigation links in the 'Code' tab.

GitHub's Releases functionality makes creating a Git tag for aa release more intuitive for some.

---

name: conclusions

# Conclusions

Thank you. Bye.
