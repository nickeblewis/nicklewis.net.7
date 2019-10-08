---
title: Netlify CMS and Sanity.io together
published: true
slug: netlify-cms-sanity-io-together
date: 2019-10-08T09:16:53.805Z
tags:
  - netlify
  - cms
  - sanity
summary: Summary
---
One of the advantages of a Jamstack site is that you can pull data in from a variety of sources and not just one, as is the case with some systems. Sure enough Wordpress and Drupal setups don't prevent you from doing this but there is a great deal more work to do. In the case of this Gridsome based website, it is relatively simple to mix things up a little bit. Question is why do this? I can explain the reasons why I do it and perhaps help you get a better idea of how you could, should you choose to do so, follow suit.

This site at the time of writing has two main sections blog and photos, one of which is powered by pure markdown and editable via Netlify CMS and also I can use a desktop based editor to directly work on the markdown files, just like any other code for this website. Then for my photos section that is powered by Sanity.io and offers a slightly different approach to content management but one that is also very customisable. Both approaches have their strengths and pitfalls.

Why do this though? I like to experiment with the different tools available and they all have their merits. To really explain this though, let me run you through my configuration with some screenshots, examples and maybe a brief video or two.



