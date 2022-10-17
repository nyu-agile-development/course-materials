---
layout: presentation
title: Design Patterns
permalink: /slides/design-patterns/
---

class: center, middle

# Design Patterns

Common problems and their solutions.

---

# Agenda

1. [Overview](#overview)
2. [History](#history)
3. [Criticisms](#criticisms)
4. [Creational](#creational)
5. [Structural](#structural)
6. [Behavioral](#behavioral)
7. [Conclusions](#conclusions)

---

name: overview

# Overview

--

## Concept

Design Patterns are good quality re-usable solutions to common problems.

In other words, Design Patterns represent a set of best practices for particular contexts.

---

template: overview

## What they offer

Design Patterns describe a particular design problem.

They do not prescribe a solution. Rather, they indicate a set of values to guide the designer toward a solution to the problem that is best for their particular situation.

---

template: overview

## Nature in Flux

There is no complete set of design patterns.

- Some are well-established for particular contexts
- Others are made up all the time and disappear as quietly as they came
- Some patterns can be made redundant in languages that have built-in support for solving the problem.

---

name: history

# History

--

## Philosophy

Seneca The Younger spoke of the value of abstract patterns versus their concrete implementations circa 65 AD in his letter to his friend, Lucilius, now referred to as "[On Sharing Knowledge](https://en.m.wikisource.org/wiki/Moral_letters_to_Lucilius/Letter_6)":

> The way is long if one follows precepts, but short and helpful, if one follows patterns.

---

template: history

## Architecture

[A Pattern Language](https://en.wikipedia.org/wiki/A_Pattern_Language), by Christopher Alexander, Sara Ishikawa, Murray Silverstein

- A seminal book published in 1977
- Layed out the concept of a pattern language, as applied to the architecture of progressively larger structures - nooks, rooms, homes, neighborhoods, and cities.
- Inspired software engineers, including Kent Beck (inventor of Unit Testing) and Ward Cunningham (creator of first-ever wiki) to apply its concepts to the realm of code.

---

template: history

## Architecture (continued)

![Agricultural Valley design pattern, from A Pattern Language](../images/agricultural_valley_design_pattern.png)

---

template: history

## Architecture (continued)

![Small Work Groups design pattern, from A Pattern Language](../images/small_work_groups.png)

---

template: history

## Software

[Design Patterns: Elements of Reusable Object-Oriented Software](http://www.uml.org.cn/c%2B%2B/pdf/DesignPatterns.pdf), by Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides

- An equally-seminal book published in 1994
- Colloquially known as the "Gang of Four" book after its four authors
- First popular application of the concept of pattern languages to object-oriented software in Java
- Still the standard reference today, and commonly discussed in job interviews!
- outlined 23 object-oriented design patterns
  -- Creational - patterns related to the creation of objects
  -- Structural - how classes are designed using inheritance, composition, and aggregation
  -- Behavioral - communication between objects as a program is running

---

name: criticisms

# Criticisms

--

## Language Flaws

A common criticism of Design Patterns is that their necessity indicates flaws in the programming language they are designed for.

- [Read more about this view](http://wiki.c2.com/?AreDesignPatternsMissingLanguageFeatures)

---

template: criticisms

## Overly-complicated

Another criticism holds that Design Patterns can lead to overly complex and verbose code, when a simpler unpatterned solution might be simpler and easier to maintain.

- [Read more about this view](https://web.archive.org/web/20120224000044/http://parand.com/say/index.php/2005/07/18/i-hate-patterns/)

---

name: creational

# Creational

--

## Prototype

A fully initialized instance to be copied or cloned.

Useful when the setup of an object is time/resource consuming, and you do not want to repeat it more than once, if possible.

- [View more notes](https://knowledge.kitchen/Design_patterns#Prototype)

---

template: creational

## Builder

Separates object construction from its representation.

The builder pattern provides a simple interface to create an object that actually has a complex structure.

Useful when there's a complex object structure that is complicated to build.

- [View more notes](https://knowledge.kitchen/Design_patterns#Builder)

---

template: creational

## Singleton

A class of which only a single instance is allowed to exist.

Useful when you need only one object of that class to exist.

- [View more notes](https://knowledge.kitchen/Design_patterns#Singleton)

---

name: structural

# Structural

--

## Proxy

An object representing another object. It's an imposter! Hides the complexity of the object it represents.

Example: credit card is a proxy for a bank account.

- [View more notes](https://knowledge.kitchen/Design_patterns#Proxy)

---

template: structural

## Facade

A single class that represents the entire subsystem.

Useful for web applications. Reducing network calls. Reduces coupling (bewteen web layer and back-end). Helps rollback all steps if one fails.

- [View more notes](https://knowledge.kitchen/Design_patterns#Facade)

---

template: structural

## Decorator

Adds responsibility to objects dynamically. Makes it easy to add behavior at runtime.

- [View more notes](https://knowledge.kitchen/Design_patterns#Decorator)

---

name: behavioral

# Behavioral

--

## Chain of responsibility

A way of passing a request between a chain of objects.

A message passes through a series of objects until one of them is able to handle it, at which point is doesn't get passed any further.

- [View more notes](https://knowledge.kitchen/Design_patterns#Chain_of_responsibility)

---

template: behavioral

## Iterator

Sequentially access the elements in a collection.

Useful when the internal representation of a collection of objects isn't important, and you simply want to be able iterate through the objects in the collection.

- [View more notes](https://knowledge.kitchen/Design_patterns#Iterator)

---

template: behavioral

## Observer

A way of notifying a change to an object to a number of other objects. Objects can be registered to receive notifications.

Situation: When one of the objects changes, it needs to let several of the other objects know.

- [View more notes](https://knowledge.kitchen/Design_patterns#Observer)

---

name: conclusions

# Conclusions

--

This has been a brief, but inspirational introduction to design patterns.

--

- Thank you. Bye.
