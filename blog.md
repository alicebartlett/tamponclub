---
title: Tampon Club Blog
layout: page
permalink: /blog/

---

#Tampon Club Blog!

We have one post, behold:
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
