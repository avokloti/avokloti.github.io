---
layout: archive
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
------
**Harvard University** (Seattle, WA)  2017-  
Ph.D in Applied Mathematics  

**University of Washington** (Seattle, WA)  2012-2017  
B.S. in Applied Math: Engineering and Physical Sciences  
B.S. in Computer Science with Honors  

Research Projects
------
<ul>{% for post in site.portfolio %}
{% include archive-single-talk-cv.html %}
{% endfor %}</ul>

Publications
------
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Presentations
------
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
------
  <ul>{% for post in site.teaching %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

Skills
------
* Programming languages: Python, C++, C, MATLAB, Java, R.
* Some libraries / toolsets: PyTorch, Tensorflow, ROS, Drake, SNOPT, IPOPT.
* Other: CMake, Bazel, Ubuntu, Git.
