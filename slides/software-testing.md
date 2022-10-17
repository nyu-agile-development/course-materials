---
layout: presentation
title: Software Testing
permalink: /slides/software-testing/
---

class: center, middle

# Software Testing

Validating the functionality of a codebase.

---

# Agenda

1. [Overview](#overview)
1. [Automation](#automation)
1. [Code Linting](#code-linting)
1. [Unit Testing](#unit-testing)
1. [Code Coverage](#code-coverage)
1. [Integration Testing](#integration-testing)
1. [User Acceptance Testing](#user-acceptance-testing)
1. [Regression Testing](#regression-testing)
1. [System Testing](#system-testing)
1. [Test-Driven Development](#test-driven-development)
1. [Behavior-Driven Development](#behavior-driven-development)
1. [Conclusions](#conclusions)

---

name: overview

# Overview

--

## Substance

Testing helps verify that the software performs as expected.

--

- Functionality

--

- Speed

--

- Load

--

- Security

--

- etc.

---

template: overview

## Style

Testing can also help verify that the software has been written well.

--

- Syntax

--

- Style

--

- Maintainability

---

template: overview

## Sanity

Testing can also help prove that the **software is usable** and that you haven't built it all for nil.

---

name: automation

# Automation

--

## Rise of the Robots

While much of running software tests can now be automated, a few tasks still require humans.

--

- Writing the tests... although this too [may become fully automated eventually](https://duckduckgo.com/?q=autogenerate+unit+tests)

--

- Testing whether humans are able and happy to use the software... although [some seem to think they can automate users away](https://duckduckgo.com/?q=automate+user+acceptance+testing).

---

name: code-linting

# Code Linting

--

## Concept

A code linter automatically checks both **syntax** and **style** of code.

--

- These are _especially useful in interpreted languages_ that do not report compilation errors.

--

- A code linter performs a **static analysis** of the codebase, meaning the code does not need to be executed for it to be linted.

---

template: code-linting

## Features

A code linter is a software tool that can...

--

- be set to follow a set of code rules and standards

--

- flag suspicious usage in code that does not meet the defined rules and standards

--

- auto-fix some syntax and style problems

--

- integrate with most popular code editors

---

template: code-linting

## Advantages

Code linters offer some advantages over human code reviews, such as:

--

- fast

--

- accurate

--

- consistent

--

- impersonal

---

template: code-linting

## Recommendations

Use [ESLint](https://github.com/eslint/eslint) for Javascript.

--

- An [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) exists to integrate it into the popular Visual Studio Code IDE.

--

- Can be configured to test against any Javascript **coding conventions** - there are two popular competing Javascript style guides: [Google's](https://google.github.io/styleguide/jsguide.html) and [AirBnb's](https://github.com/airbnb/javascript).

--

- There are also plenty of people who decide on their own code styles.

--

- Follow [these instructions](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-eslint-and-prettier?u=2131553) - or [these](https://www.youtube.com/watch?v=SydnKbGc7W8) if you don't have a LinkedIn Learning account - to set it up ESLint with the AirBnB style guide and the Prettier reformatter.

---

name: unit-testing

# Unit Testing

--

## Concept

A unit is the smallest testable unit of code - typically a function.

--

- Unit testing verifies that each unit behaves as expected, given certain inputs.

---

template: unit-testing

## Example

A unit test example in Javascript using the `mocha` unit testing framework and Node.js's built-in assertion library, `assert`:

```javascript
// use node.js's built-in assert assertion library
const assert = require("assert")

// a set of tests of array functions
describe("Array", function () {
  // one particular unit test
  describe("#indexOf()", function () {
    // assert what should be returned
    it("should return -1 when the value is not present", function () {
      // test that assertion
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})
```

---

template: unit-testing

## Features

Unit tests are performed on each unit in isolation, in the sense that they...

--

- run in isolation and do not depend upon one-another.

--

- are not concerned with user interactions or user interfaces.

--

- do not require any changes to the production code.

--

- only test code belonging to the system, not platform code, 3rd party code or external systems such as databases or APIs.

---

template: unit-testing

## Advantages

Unit testing has discrete advantages that become increasingly important as a project grows in complexity and age.

--

- Failed unit tests indicate bugs that **must** be fixed

--

- Unit tests are fast to write and faster run

--

- Running unit tests can be automated, with a human notified of any failure

---

template: unit-testing

## Recommendation

Use [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/) for Javascript unit testing.

--

- `mocha` is a Javascript unit test framework

--

- by default it uses Node.js's built-in `assert` assertion library.

--

- but `chai` is a more elaborate assertion library that is ironically often paired with mocha

---

name: integration-testing

# Integration Testing

--

## Concept

Whereas unit testing tests units in-situ in isolation, integration testing tests units in vivo.

--

- Unit tests are meant to validate each unit in isolation from any external influences.

--

- Integration tests are purposefully designed to test units as they interact with those outside influences.

--

- For example, whereas a a unit test of the front-end of a web app might make an HTTP request to a **mock server or API** and receive a **mock response** , a unit test would make an HTTP request to a **real server or API**, receivee the **real response**, to ensuree it is handled correctly.

---

template: integration-testing

## Features

Integration tests...

--

- test that all components of the system interact as expected, sending and receiving messages from one-another correctly in all expected circumstances

--

- test that the system interacts with any external dependencies, such as libraries, databases, and APIs correctly

--

- can be of partial or full environments, including external bits like databases and services, or not

--

- can include user interfaces and results of particular system interactions, such as changes to content in databases and logs that result from certain actions

--

- can be run on one system, or across several systems

---

name: code-coverage

# Code Coverage

--

## Concept

The term `code coverage` refers to the percent of all code which is executed when unit and integration tests are run.

--

- Code coverage tools automatically calculate this as tests are run.

--

- While 100% code coverage is the ideal, anywhere above 80% is pretty well-covered.

---

template: code-coverage

## Limitations

Code coverage does not indicate that the code has been tested in all possible scenarios

--

- High code coverage **does not** indicate that the code is good.

--

- 100% code coverage **does not** indicate that the code is well-tested or that it will run well.

---

template: code-coverage

## Recommendation

Use [istanbul](https://istanbul.js.org/) for Javascript code coverage analysis.

--

- integrates well with the mocha unit testing framework

--

- An example of using istanbul in a Node.js project's `package.json` script:

```javascript
{
    "scripts": {
      "test": "nyc mocha --timeout=3000"
    }
}
```

--

- Code coverage analysis could then be triggered from the command line.

```bash
npm test
```

---

name: user-acceptance-testing

# User Acceptance Testing

--

## Concept

User Acceptance Testing (UAT) ...

--

- tests whether users will accept the software.

--

- i.e., verifies that the software works as expected from an end-user's point of view

--

- is a form of Integration Testing, since all the parts must inter-operate in order for the system to be used.

---

template: user-acceptance-testing

## Scripts

User Acceptance Tests test users in specific use cases or user stories.

--

- Users are asked to run through scripts of common scenarios and interactions they might encounter using the software

--

- Each script includes a set of steps for the human tester to go through to perform the test, e.g.

```
step 1 - user goes to home page
step 2 - clicks reservations
step 3 - clicks on arrival date
step 4 - the date widget should pop up with default date pre-selected
```

--

- The tester then records whether the user successfully completed the task, how long it took them, and notes any problems the user encountered.

---

name: regression-testing

# Regression Testing

--

## Concept

The term `regression testing` refers to the re-running of old tests when new tests are run.

--

- This ensures that the entire codebase works well, even when new features are developed, bugs are fixed, etc.

---

name: system-testing

# System Testing

--

## Concept

Testing of the non-functional requirements, such as ...

--

- **load handling** - handling the load under expected conditions

--

- **stress testing** - handling the load at higher-than expected conditions

--

- **security testing** - making sure the system and its users are safe

---

name: test-driven-development

# Test-Driven Development

--

## Concept

Test-Driven Development (TDD) is the practice of writing tests, particularly unit tests, before production code is written.

---

template: test-driven-development

## Advantages

Test-Driven Development has several touted benefits:

--

- **code coverage** - every bit of code has a test developed for it before the code to be tested has even been written

--

- **debugging** - since tests are run with every code change, it is easy to identify the new code that created a bug

--

- **documentation** - the tests themselves become a specification of the system

--

- **planning** - it forces developers to think about what they want their code to do before writig it

---

template: test-driven-development

## Criticisms

Test-Driven Development has been attacked on many fronts:

--

- It is often seen as a bit too extreme -in fact, TDD originated from what is called the **eXtreme Programming** (XP) methodology.

--

- In most cases (for better or worse), the requirements of systems are not fully known until development starts

--

- It is not unusually for new requirements to surface late in the development cycle.

--

- Many developers consider it helpful to have an ongoing feedback loop between specifying, developing and testing.

---

name: behavior-driven-development

# Behavior-Driven Development

--

## Concept

An alternative preferred by some to Test-Driven Development is Behavior-Driven Development (BDD).

--

- BDD performs all the same duties as TDD, at the same times, for the same reasons.

--

- The difference arises from the language used in writing the code - BDD attempts to offer testing in a more human-centric language.

--

- Javascript's `chai` assertion library, for example, supports either TDD or BDD style assertions, e.g.

--

- A TDD-style assertion stating the expected value in a variable: `assert.equal(foo, 'bar')`

--

- The same assertion in BDD-style: `expect(foo).to.equal('bar')` - notice the more human-friendly phrasing of the code.

---

name: conclusions

# Conclusions

---

# Conclusions

You now have experienced a nice-and-easy overview of the different categories of software testing in common practice. The next step would be to try them out!

--

- Thank you. Bye.
