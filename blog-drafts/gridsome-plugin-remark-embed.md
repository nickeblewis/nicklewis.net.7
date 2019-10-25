I'm in the process of embedding Vimeo, Twitter and Spotify for some future posts. How do I do it?

This is my progress so far...


```json
{
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/:section/:year/:month/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: 'tag/:id',
            create: true
          }
        },
        remark: {
          plugins: [
            ['gridsome-plugin-remark-youtube'],
            ['gridsome-plugin-remark-embed'],
            ['gridsome-plugin-remark-twitter'],
            [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
          ]
        }
      } // TODO - Add folder called gallery at some point in time
    }
```

[ ] - experiment with these https://gridsome.org/plugins/@noxify/gridsome-plugin-remark-embed
