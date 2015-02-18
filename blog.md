---
title: Tampon Club Blog
layout: page
permalink: /blog/

---
<div class='blog'>

  <h1>Tampon Club Blog!</h1>

  We have {{ site.posts.size }} posts, behold:
  <ul>
    {% for post in site.posts %}
      <li>
        <div class='date'>{{ post.date | date: '%d/%m/%Y' }}</div>
        <div><a href="{{ post.url }}">{{ post.title }}</a></div>
      </li>
    {% endfor %}
  </ul>

</div>
