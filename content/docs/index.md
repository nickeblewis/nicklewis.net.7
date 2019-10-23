---
title: A cool title
date: 2019-10-23
path: /docs
excerpt: Lorem Ipsum is simply dummy text.
---
// Import any Vue Component. Even other .md files!
//import YouTube from '~/components/YouTube.vue'
//import AboutUs from '~/sections/AboutUs.md'

// Import any JSON if you need data.
//import data from '~/data/youtube.json'

// Use front-matter fields anywhere.
# {{ $frontmatter.title }}
> {{ $frontmatter.excerpt }}

// Use your imported Vue Components.
//<YouTube :id="data.id" />
//<AboutUs />