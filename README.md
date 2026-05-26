# FlightLang Website

This is the Jekyll version of the FlightLang website, converted from the original static HTML/CSS/JS site.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

The site will be available at `http://127.0.0.1:4000`.

## Structure

- `_layouts/` contains the shared page and post layouts.
- `_includes/` contains the shared navigation and footer.
- `_posts/` contains blog posts.
- `blog/index.html` is the blog index.
- `docs/index.html` contains the documentation page.
- `assets/` contains the original logo, CSS, and JavaScript.

## Adding a blog post

Create a Markdown file in `_posts/` using the format:

```text
YYYY-MM-DD-post-title.md
```

Use front matter like this:

```yaml
---
layout: post
title: "Post Title"
description: "Short summary for SEO and previews."
---
```
