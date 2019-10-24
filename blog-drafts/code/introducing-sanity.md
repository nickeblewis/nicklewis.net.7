---
title: Introducing Sanity.io
summary: I have been playing with Sanity which is a headless CMS system for a little while and now it is here
slug: introducing-sanity
date: 2019-09-18
published: true
section: code
tags:
 - CMS
 - Sanity
 - Headless
---

This is one of those moments I have been looking forward to, Gridsome now supports Sanity.io, fabulous stuff! So let me explain what these things are and why they are exciting plus what it means for this website and my actual business.

You may be familiar with content management systems such as Wordpress for example? Well I've bucked that trend by opting to take an entirely different path and I am not the only one. Sanity.io is amongst a new breed of so-called "headless CMS" systems, what this means is that it provides tools for managing your content within it's database but leaves a lot of the rest, mainly templates, that sort of thing up to you. In other words it doesn't even have a templating engine of it's own, which means you can use your existing web development skills to build sites and apps as you want. Wordpress on the other hand forces you down a particular path when it comes to how you build your sites, although that said, even they now allow you to use their CMS as a headless service. 

Gridsome allows you to take things a bit further, I shall explain. You could develop your website to query Sanity (or other data sources) each and every time you want to retrieve data and render your pages. That is fine, perfectly acceptable of course. However let's imagine you generated your website in it's entirety in one 'build' process which in turn generates good old fashioned HTML? You could then upload this to a place where it can be rapidly retrieved without the need to generate pages every time a user requests them. Gridsome allows you to do just that by generating "static sites".

Advantages of the Sanity/Gridsome combination include excellent security, impossible for hackers to takeover your site, speed, really speedy speed!

Anyway to wrap up this little post - I am going to document the process of setting sanity up with this site that does already use Gridsome, just not Sanity yet and that is mainly because they have only released this feature today!
