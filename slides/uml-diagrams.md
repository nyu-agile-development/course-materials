---
layout: presentation
title: UML Diagrams
permalink: /slides/uml-diagrams/
---

class: center, middle

# UML Diagrams

Standardized ways of diagramming software systems.

---

# Agenda

1. [Overview](#overview)
2. [Best practices](#best-practices)
3. [Classes](#classes)
4. [Use Cases](#use-cases)
5. [Activities](#activities)
6. [Sequences](#sequences)
7. [State Charts](#state-charts)
8. [Conclusions](#conclusions)

---

name: overview

# Overview

--

## Concept

Primitive, standardized, easy-to-draw diagrams to quickly communicate software _structure_ and _behavior_.

---

template: overview

## Types of diagrams

UML (Unified Modeling Language) provides for many types of diagrams, divided into two categories:

| Structural          | Behavioral             |
| :------------------ | :--------------------- |
| Class diagrams      | Activity diagrams      |
| Package diagrams    | Sequence diagrams      |
| Object diagrams     | Use case diagrams      |
| Component diagrams  | State diagrams         |
| Deployment diagrams | Communication diagrams |
|                     | Interaction diagrams   |
|                     | Timing diagrams        |

---

template: overview

## Types of diagrams

We will explore just a few diagram types for example.

The book, "[The Elements of UML Style](http://bit.ly/se-elements-of-uml-style)", by Scott W. Ambler is a good reference for more - we have pulled many insights from it here.

---

name: best-practices

# Best Practices

--

## Overview

Regardless of which diagram type, following best practices keeps diagrams understandable and avoids common pitfalls.

- Avoid crossed lines
- Avoid diagonal and curved lines
- Use consistent sizes
- Flow from top-to-bottom, left-to-right

---

template: best-practices

## Avoid crossed lines

Don't do this:

![crossed lines](../images/uml_lines_cross_no_jump.png)

---

template: best-practices

## Avoid crossed lines

Do this:

![crossed lines](../images/uml_lines_cross_jump.png)

---

template: best-practices

## Avoid diagonal and curved lines.

Don't do this:

![crossed lines](../images/uml_lines_cross_jump_diagonal.png)

---

template: best-practices

## Avoid diagonal and curved lines.

Do this:

![crossed lines](../images/uml_lines_cross_jump_orthogonal.png)

---

template: best-practices

## Use consistent sizes

Don't do this:

![crossed lines](../images/uml_sizes_inconsistent.png)

---

template: best-practices

## Use consistent sizes

Do this:

![crossed lines](../images/uml_sizes_consistent.png)

---

template: best-practices

## Flow top-to-bottom, left-to-right

Don't do this:

![crossed lines](../images/uml_flow_right_to_left.png)

---

template: best-practices

## Flow top-to-bottom, left-to-right

Do this:

![crossed lines](../images/uml_flow_left_to_right.png)

---

name: classes

# Classes

--

## Concept

Used to display the attributes, methods, and interactions of object-oriented classes in code.

---

template: classes

## One Class

A single class:

![UML class diagram](../images/uml_class_diagram.png)

---

template: classes

## Multiple Classes

Relationships among classes, plus annotations, in a casual style:

![UML class diagram](../images/uml_class_diagram_relationship.png)

---

name: use-cases

# Use Cases

--

## Concept

Used to indicate interactions between actors and the system.

---

template: use-cases

## Single actor

A single actor, a single system:

![UML use case diagram](../images/uml_use_case_diagram.png)

---

template: use-cases

## Multiple actors

Multiple actors, multiple systems:

![UML use case diagram](../images/uml_use_case_diagram_complex.png)

---

name: activities

# Activities

--

## Concept

Flow charts often used to document a complex operation, the logic of one or more use cases, or any other process.

---

template: activities

## Example

![UML activity diagram](../images/uml_activity_diagram.png)

---

name: sequences

# Sequences

--

## Concept

Used to validate and work out the logic and completeness of a certain scenario, often a use case or a part of a use case.

These show the entire sequence of messages sent among the objects and systems involved in the scenario.

---

template: sequences

## Example

![UML sequence diagram](../images/uml_sequence_diagram.png)

---

name: state-charts

# State Charts

--

## Concept

Indicate the dynamic behavior of an entity based on its response to events, showing how the entity reacts to various events based on its current state.

- Only useful when behavior changes significantly based on internal state of the object.

---

template: state-charts

## Example

A seminar, partial lifecycle:

![UML sequence diagram](../images/uml_state_chart_diagram.png)

---

template: state-charts

## Example

A seminar, complete lifecycle:

![UML sequence diagram](../images/uml_state_chart_diagram_complete.png)

---

name: conclusions

# Conclusions

--

Thank you. Bye.
