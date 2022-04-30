---
# try also 'default' to start simple
# theme: seriph
# theme: geist
theme: light-icons
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## PWA & Static Website Generator
  A straightforward PWA framework

  based on Ruby and Roda

  Learn more at [Bridgetown](https://www.bridgetownrb.com/)

  start with `npx slidev`
# persist drawings in exports and build
drawings:
  persist: false
---

# Bridgetown

## A PWA & Static Website Generator

A straightforward PWA framework based on Ruby and Roda

Learn more at [Bridgetown - https://www.bridgetownrb.com/](https://www.bridgetownrb.com/)

Bill Tihen

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# Create

```bash
gem install bridgetown
bridgetown new ruby_kafi_bridgetown_code -t erb -c tailwindcss,netlify
# answer yes to the questions

cd ruby_kafi_bridgetown_code
bin/bridgetown start
# opens on http://localhost:4000
```

<small>
<br>
<b>bridgetown new project_name [-t options] [-c option1,option2]</b>
<br><br>
<ul>
  <li><b>-t</b>
    <ul>
      <li>template choices: liquid (default - easy but limited), **erb** & serbea, also _haml_ & _slim_ (swith manual install)</li>
    </ul>
  </li>
  <br>
  <li><b>-c</b>
    <ul>
      <li>css/JS choices: **tailwindcss** (includes purgecss), stimulus, purgecss, turbo</li>
      <li>deploy choices: render, netlify, vercel, github-pages</li>
    </ul>
  </li>
</ul>
</small>

---

# Plugins

After install there are quite a few useful plug-ins

These are installed using: `bundle add plugin_name -g bridgetown_plugins`

to install the site-map plugin do:
```bash
bundle add bridgetown-sitemap -g bridgetown_plugins

# and in bridgetown.config.yml add/update:
url: "https://example.com"
content_engine: "resource"
```

Now go to: http://localhost:4000/sitemap.xml and you should find a sitemaps.org compliant sitemap based on the `.md` _resource pages (more on that later)_


See: https://www.bridgetownrb.com/plugins for the list including: haml & slim


---

# Add search

site search (using lunar.js)

```bash
bundle add bridgetown-quick-search -g bridgetown_plugins

# in frontend/javascript/index.js file add:
import "bridgetown-quick-search"

# add to template (probably navbar) src/_components/navbar.erb
<%= liquid_render "bridgetown_quick_search/search" %>
```

[full instructions](https://github.com/bridgetownrb/bridgetown-quick-search)

Unfortunatly, currently it has a javascript error loading:
```bash
[Frontend] esbuild: frontend bundling started...
[Frontend]  > node_modules/bridgetown-quick-search/frontend/javascript/index.js:22:0: error: Unexpected "@"
[Frontend]     22 │ @customElement("bridgetown-search-form")
[Frontend]        ╵ ^
```

see: https://github.com/bridgetownrb/bridgetown-quick-search/issues/12

---

# Layout

The folder `src/_layouts` houses our layouts

These layouts are referenced at the top of a `recourse` in the `front-matter` area with the `layout` tag

Within the layout field the `resource` will be rendered within the `yield` tag (like in rails)

---

# Pages

I like to reorganize pages (resources into: src/_pages)

```bash
# reorganize into a folder
mkdir src/_pages
mv src/*.md src/_pages/.
touch src/_pages/contact.md

# create a new page
cat <<EOF>>src/_pages/contact.md
---
layout: page
title: Contact
---

Let's get in touch
EOF
```

Now we have a new page at: http://localhost:4000/contact

---

# New Ruby Blog

New blog in a new **category** (ruby)

```bash
touch src/_posts/bridgetown_magic.md
cat <<EOF>>src/_posts/bridgetown_magic.md
---
layout: post
title:  "Bridgetown Magic"
date:   2022-04-30 19:42:23 +0200
categories: ruby
---

Bridgetown makes websites easy
EOF
```

Now Posts should have a new link to: http://localhost:4000/blogs/ruby/bridgetown_magic/

---

# Pagination Config

Make a bunch of new Blogs:

Now update the end of `bridgetown.config.yml` with:

```
pagination:
  enabled: true
```

Now **RESTART Bridgetown**

---

# Pagination Usage

now we will tell the `src/_pages/blog.md` page to use pagination with:

```md
---
layout: page
title: Posts
# define how the paginator should work
paginate:
  collection: posts
  per_page: 2 # default is 10 per page
---
<ul>
  <%# remove collection iterator %>
  <%# collections.posts.resources.each do |post| %>
  <%# and replace with paginator iterator %>
  <% paginator.resources.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
    </li>
  <% end %>
</ul>
```

Now if we reload we should only see two links listed

---

# Blog Links

Permalinks (in Bridgeland)

on the blogs page you will see the link: http://localhost:4000/updates/2022/04/30/welcome-to-bridgetown/

Let's change this to be: http://localhost:4000/blogs/updates/2022_04_30_welcome-to-bridgetown/

or `http://localhost:4000/blogs/:category/:filename/`

Append to the end of `bridgetown.config.yml`

```yaml
collections:
  posts:
    permalink: /blogs/:categories/:name/
```

if we restart Bridgetown we should have our new links when we visit the **blogs** page

---

# Javascript, CSS, Tailwind & Fonts

Customizing Look and Feel:

* `frontend/javascript/index.js`
* `frontend/styles/index.css`
* `tailwind.config.js`

For the full-gory details of configuring Bridgetown see:

https://btihen.me/post_ruby_rails/bridgetown_1_x_ruby_static_stite_orientation/

---

# Talk and Code

Github (btihen)

Code:

Slides:

<br>

# Question & Comments
