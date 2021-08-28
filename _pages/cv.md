---
layout: archive
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Click here for the PDF version of my CV.](/files/cv.pdf)


Education
------
**Harvard University** (Cambridge, MA)  2017-  
Ph.D Candidate in Applied Mathematics  
M.S. in Applied Mathematics  (May 2020)

**University of Washington** (Seattle, WA)  2012-2017  
B.S. in Applied Math: Engineering and Physical Sciences  
B.S. in Computer Science with Honors  

Work Experience
------
Intern at MathWorks, Summer 2021

Intern at the Honda Research Institute, Summer 2020

Research Projects
------
<ul>{% for post in site.portfolio reversed %}
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
  
Awards
------
*  *Quantitative Biology Fellowship* (Harvard), 2021-2022
*  *Quantitative Biology Fellowship* (Harvard), 2020-2021
*  *Certificate of Distinction in Teaching* (Harvard), Fall 2020
*  *Certificate of Distinction in Teaching* (Harvard), Fall 2019
*  *Outstanding Graduating Senior* (Applied Math Department, University of Washington), 2017
*  *Paradise Scholarship Recipient* (Robinson Center for Young Scholars), 2015
*  *Annual Dean's List* (University of Washington), 2012-2017

Skills
------
* *Programming languages*: Python, C++, C, MATLAB, Java, R.
* *Some libraries / toolsets*: PyTorch, Tensorflow, ROS, Drake, optimization solvers (CVXOPT, SNOPT, IPOPT).
* *Other*: CMake, Bazel, Ubuntu, Git.

Volunteering and Outreach
------
* Graduate mentor for unndergraduates at Harvard's Global Alliance for Medical Innovation (GAMI), 2019-
* Tutor for Cambridge School Volunteers (weekly tutoring at a local middle school), 2018-2019.
