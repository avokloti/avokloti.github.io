---
layout: archive
title: "Research Projects"
permalink: /portfolio/
author_profile: true
---
For the first two years of my PhD, I worked in **robotics**, with a focus on developing **trajectory optimization** algorithms. Since then, my work has shifted towards leveraging techniques from **spatial audio** and **signal processing** to improve **bioacoustic monitoring** systems, with the hope of contributing to wildlife conservation efforts. Previously, a majority of my undergraduate research focused on **quantitative ecology**. Finally, I've also worked on projects in **shape/image processing**, **gait analysis**, and other interdisciplinary topics.

<nbsp>

{% include base_path %}
{% assign ordered_posts = site.portfolio %}
{% for post in ordered_posts reversed %}
        {% include archive-single.html type="grid" %}
{% endfor %}
