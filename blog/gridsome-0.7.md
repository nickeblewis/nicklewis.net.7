---
title: Gridsome 0.7
slug: gridsome-0-7
date: 2019-10-07
published: true
summary: Exloring the new features
tags:
 - gridsome
---

Exploring some new features and copying a few ideas from the official documentation

```javascript
module.exports = {
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './content/docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue' // Optional
      }
    }
  ]
}
```

In this example /content/docs/index.md will be website.com/docs/, and /content/docs/install-guide.md will be website.com/docs/install-guide/.

By default it takes any .md files in baseDir folder and uses them for file-based routing like Pages works. You can override this by using a route config.

2) Setup a template and include the <VueRemarkContent /> component:

```javascript
<template>
  <Layout>
    <h1>{{ $page.documentation.title }}</h1>
    <p class="intro">{{ $page.documentation.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Documentation ($id: ID!) {
  documentation(id: $id) {
    title
    excerpt
  }
}
</page-query>
```

3) Import and use Vue components in Markdown:

```markdown
---
title: A cool title
excerpt: Lorem Ipsum is simply dummy text.
---
// Import any Vue Component. Even other .md files!
import YouTube from '~/components/YouTube.vue'
import AboutUs from '~/sections/AboutUs.md'

// Import any JSON if you need data.
import data from '~/data/youtube.json'

// Use front-matter fields anywhere.
# {{ $frontmatter.title }}
> {{ $frontmatter.excerpt }}

// Use your imported Vue Components.
<YouTube :id="data.id" />
<AboutUs />

Isn't it great? 🥳
```

You can use <page-query> & <style> blocks inside the Markdown files too!