---
layout: page
title: Posts
paginate:
  collection: posts
  per_page: 2
  # sort_field: dates
  # sort_reverse: true
---

<ul>
  <%# collections.posts.resources.each do |post| %>
  <% paginator.resources.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
    </li>
  <% end %>
</ul>

If you have a lot of posts, you may want to consider adding [pagination](https://www.bridgetownrb.com/docs/content/pagination)!
