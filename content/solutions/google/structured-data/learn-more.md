---
title: How to help Google best index your site
path: solutions/google/structured-data/give-google-a-hand
summary: Exploring how you can influence your search results by teaching Google what to index and when
tags:
 - SEO
 - Google Search
 - Content
 - Analytics
---

_Currently researching the content at https://developers.google.com/search/docs/guides/search-features to gain a better understanding of Google Search. The text below is a map of their content and my interpretations of it and how I can apply certain measures on my own sites and client projects to ensure they get the best exposure possible._


## Create a list of URLs
__Types of URLs you provide__
* Canonical URLs which are the primary URLs for your content, in other words
* Alternate URLs which are links to alternative content to your own

### Create an XML Sitemap

If you want to provide information updates about your URLs and establish relationships between them and alternate URLs, it might make sense to use an XML sitemap, which can list both canonical and alternate URLs in one file and provide modification dates.

The following example shows a simple XML sitemap with a single page entry that uses both canonical and AMP URLs, and establishes a modification date.

```xml
<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://example.com/dogs/poodles/poodle1.html</loc>
    <xhtml:link rel="amphtml" href="http://example.com/dogs/poodles/poodle1.amp.html"/>
    <lastmod>2016-01-13T18:30:02Z</lastmod>
  </url>
</urlset>
```

The timestamp for your date should be in W3C Datetime format. This format allows you to omit the time portion, if desired, and use YYYY-MM-DD.

### Sitemap guidelines

We recommend that you use either plain text or XML as formats for your sitemap. In addition, a sitemap file can't contain more than 50,000 URLs and must be no larger than 50 MB uncompressed, so you should split large numbers of URLs into multiple files.
