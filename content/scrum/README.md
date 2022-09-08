---
title: Scrum Framework
permalink: /scrum/
---

# Scrum Framework

Some notes about the roles, events, and artifacts of the Scrum framework for agile software development and using GitHub for Scrum project management.

{% assign target_cat="scrum" %}
{% for page in site.pages %}
{% for pc in page.categories %}
{% if pc == target_cat %}

- [{{ page.title }}]({{ page.url | prepend:site.baseurl  }})

{% endif %} <!-- cat-match-p -->
{% endfor %} <!-- page categories -->
{% endfor %} <!-- page -->

## References

- [The Scrum Guide](http://scrumguides.org/docs/scrumguide/v2016/2016-Scrum-Guide-US.pdf), by Ken Schwaber and Jeff Sutherland
- Lynda.com, [Scrum: The Basics](https://www.lynda.com/Business-Skills-tutorials/Scrum-Basics/550619-2.html)
- Lynda.com, [Agile at Work: Planning with Agile User Stories](https://www.lynda.com/Business-Skills-tutorials/Welcome/175074/387206-4.html)
