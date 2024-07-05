---
layout: archive
title: "Research Projects"
permalink: /portfolio/
author_profile: true
header:
  image: /banners/chief_mountain.png
  caption: Chief Mountain, Blackfeet Reservation (2023)
---

My primary research is in improving **bioacoustic monitoring** systems, with a focus on **machine learning** and **microphone array processing**. I've worked on projects in both terrestrial and marine environments, including **localization** and **density estimation** of beaked whales, **abudance estimation** of critically endangered north Atlantic right whales, **unsupervised clustering** of intraspecific bird calls, and leveraging techniques from **spatial audio** to separate overlapping birdsong in a dawn chorus. I also have experience with fieldwork, and, in partnership with local researchers, have **deployed acoustic recorders** to monitor the ecosystem impact of the reintroduction of a bison herd. In earlier years, I worked in **robotics**, with a focus **trajectory optimization**, as well as interdisciplinary graduate projects in **shape/image processing**, **gait analysis**, and **handwriting analysis**. My undergraduate research focused on **quantitative ecology**. 

<nbsp>

{% include base_path %}
{% assign ordered_posts = site.portfolio %}
{% for post in ordered_posts reversed %}
        {% include archive-single.html type="grid" %}
{% endfor %}
