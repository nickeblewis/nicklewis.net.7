// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Nick Lewis',
  siteDescription: 'Photographer, Coder and Content Creator',
  siteUrl: 'https://nicklewis.net',
  plugins: [ 
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'blog/**/*.md',
    //     typeName: 'Post',
    //     refs: {
    //       tags: {
    //         typeName: 'Tag',
    //         create: true
    //       }
    //     }
    //   }
    // },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post",
        baseDir: "./markdown/projects",
        template: "./src/templates/Post.vue",
        pathPrefix: "/projects",
        route: "/projects/:slug",
        plugins: [
          [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
        ]
      }
    },
    // {
    //   use: "@gridsome/vue-remark",
    //   options: {
    //     typeName: "Tag",
    //     baseDir: "./markdown/tags",
    //     template: "./src/templates/Tag.vue",
    //     pathPrefix: "/blog/tags"
    //   },
    // },  
    // {
    //   use: "@gridsome/vue-remark",
    //   options: {
    //     typeName: "Post",
    //     baseDir: "./markdown/posts",
    //     template: "./src/templates/Post.vue",
    //     pathPrefix: "/posts",
    //     route: "/blog/:slug",
    //     refs: {
    //       tags: "Tag"
    //     },
    //     plugins: ["@gridsome/remark-prismjs"]
    //   }
    // },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Nick Lewis',
          feed_url: 'https://nicklewis.net/rss.xml',
          site_url: 'https://nicklewis.net/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://nicklewis.net' + node.path,
          author: 'Nick Lewis',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  // templates: {
  //   Post: [
  //     { path: "/:section/:sub/:slug" },
  //     { name: "SubSection", path: "/:section/:slug" },
  //     { name: "Sanity", path: "/blog/:year/:month/:slug" }
  //   ],
  //   Tag: '/tag/:id'
  // },
  // transformers: {
  //   remark: {
  //     plugins: [
  //       [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
  //     ],
  //     externalLinksTarget: '_blank',
  //     externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
  //     anchorClassName: 'icon icon-link',
  //   }
  // },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
