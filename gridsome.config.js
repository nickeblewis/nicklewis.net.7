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
  siteDescription: 'Photographer, Coder, Writer',
  siteUrl: 'https://nicklewis.net',
  templates: {
    SanityPost: [
      { path: '/blog/:year/:month/:slug__current'},
      { name: 'Features', path: '/:slug__current'},
    ]
  },
  plugins: [
    // {
    //   use: '@gridsome/vue-remark',
    //   options: {
    //     typeName: 'Documentation', // Required
    //     baseDir: './content/docs', // Where .md files are located
    //     pathPrefix: '/docs', // Add route prefix. Optional
    //     template: './src/templates/Remark.vue' // Optional
    //   }
    // },
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: '85cmsqr4',
        dataset: 'production',
        // Token is only required if dataset is private
        // or `overlayDrafts` is set to true
        // token: '<tokenWithReadRights>'
        overlayDrafts: false,
        watchMode: false,
        refs: {
          tags: {
            typeName: 'Tag',
            route: 'tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-159000-18'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        modulePath: `src/cms/index.js`,
        configPath: `src/cms/config.yml`,
        htmlPath: `src/cms/index.html`,
        publicPath: `/cms`,
        htmlTitle: `My CMS`,
        enableIdentityWidget: false
      }
    },
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
            [ '@noxify/gridsome-plugin-remark-embed', {
              'enabledProviders' : ['Youtube', 'Twitter', 'Vimeo'],
          }],
            ['gridsome-plugin-remark-twitter'],
            [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
          ]
        }
      } // TODO - Add folder called gallery at some point in time
    },     
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'content/**/*.md',
    //     typeName: 'Post',
    //     route: '/:path',
    //     refs: {
    //       tags: {
    //         typeName: 'Tag',
    //         route: 'tag/:id',
    //         create: true
    //       }
    //     },
    //     remark: {
    //       plugins: [
    //         [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
    //       ]
    //     }
    //   }       
    // },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'content/**/*.md',
    //     typeName: 'Post',
    //     route: '/:slug',
    //     refs: {
    //       tags: {
    //         typeName: 'Tag',
    //         route: 'tag/:id',
    //         create: true
    //       }
    //     },
    //     remark: {
    //       plugins: [
    //         ['gridsome-plugin-remark-youtube'],
    //         ['gridsome-plugin-remark-twitter'],
    //         [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
    //       ]
    //     }
    //   } // TODO - Add folder called gallery at some point in time
    // },               
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Nick Lewis Blog',
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
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
