---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
header:
  image: /banners/cape_cod_seashore.png
  caption: Cape Cod National Seashore, MA (2022)
---

I try to keep this page updated, though my most up-to-date publication list can be found at my <a href="https://scholar.google.com/citations?user=TwNrvMwAAAAJ&hl=en">Google Scholar</a> profile. If you would like to talk about any of these papers, please feel free to reach out.

<i>\* indicates shared first-authorship</i>

{% include base_path %}


{% for post in site.publications reversed %}
  <p class="archive__item-body" itemprop="headline" style="font-size:smaller">
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