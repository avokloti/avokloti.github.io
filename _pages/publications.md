---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}


{% for post in site.publications reversed %}
  <p class="archive__item-body" itemprop="headline">
  <b>{{ post.title }}</b>
  <br>
  {{ post.citation }}
  <br>
  {% if post.link %}
    <a href="{{ post.link }}"><i class="fas fa-fw fa-link zoom" aria-hidden="true"></i></a>
  {% endif %}
  {% if post.paperlink %}
    <a href="{{ post.paperlink }}"><i class="fas fa-fw fa-file-pdf zoom" aria-hidden="true"></i></a>
  {% endif %}
  </p>
{% endfor %}

\* indicates equal contribution