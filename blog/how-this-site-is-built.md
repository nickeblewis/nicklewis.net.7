---
title: How this site is built
published: true
slug: how-this-site-is-built
date: 2019-10-10T07:08:17.625Z
tags:
  - Gridsome
  - VueJS
  - JavaScript
  - Netlify
  - CMS
  - JamStack
  - Markdown
  - Sanity
summary: >-
  I want to document the work that I do, so that I can create better blog and
  marketing content to describe it to a broader audience
---
## Introduction

Earlier this year I started building a new site using VueJS and Gridsome, that at it's core is based heavily on markdown files for it's content. 

More recently I added Sanity.io to the mix. I now use both Netlify CMS and Sanity.io to manage certain key areas of this site because I wanted to experiment with both. However I have hit some problems that I need to resolve, which may lead to me dropping one of the above systems. One key reason being cost, I want to keep the running of this site as cheap as I can. My website has therefore become something of a guinea pig and I hope to learn valuable lessons from this to pass on to you and ensure I choose the right tools for future clients/projects.

## The Developer and the User

This particular website only has one user and developer which is me but let's imagine for a minute there were more people involved? I needed to take this into account because this website also acts as a prototype for future projects where there will be other people involved, who would need to be able to edit, add content, upload media and so on, so forth. So it is for that reason I've developed it as if I were building it for a client. This helps me architect my processes, workflow and to get to know my tools inside and out, especially when there are more options becoming available day by day. You need to pick what works well for you and just use everything there is just for the sake of it.

## MarkDown, Visual Studio Code & Netlify CMS
If you haven't seen markdown before here is a snippet of what a .md file looks like to give you an idea.

```markdown
---
title: The article heading
slug: the-article-heading
date: 2019-10-08
---
The body of the article
```

As you can see it is fairly simple to use and pick-up. The .md files are all converted to HTML before the site is published to the server that it will be hosted from.

## Github & Netlify

## JamStack

## VueJS

## Gridsome

Now (at the time of writing) running version 0.7.7 which has introduced some great new features including an equivalent of React/Gatsby's MDX that I have started to look into and hope to put to use in the near future.

## Sanity.io

Currently used for the Photos section and potentially more of the site in the future.

## The Costs

