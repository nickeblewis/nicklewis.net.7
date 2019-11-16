// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "Nick Lewis",
  siteDescription: "Photographer, Coder, Writer",
  siteUrl: "https://nicklewis.net",
  templates: {
    Tag: "/tag/:id",
    Post: [
      { path: "/:section/:sub/:slug" },
      { name: "SubSection", path: "/:section/:slug" }
    ]
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            route: "tag/:id",
            create: true
          }
        },
        remark: {
          plugins: [
            ["gridsome-plugin-remark-youtube"],
            [
              "@noxify/gridsome-plugin-remark-embed",
              {
                enabledProviders: ["Youtube", "Twitter", "Vimeo"]
              }
            ],
            ["gridsome-plugin-remark-twitter"],
            [
              "gridsome-plugin-remark-shiki",
              { theme: "Material-Theme-Palenight", skipInline: true }
            ]
          ]
        }
      }
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Nick Lewis Blog",
          feed_url: "https://nicklewis.net/rss.xml",
          site_url: "https://nicklewis.net/"
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: "https://nicklewis.net" + node.path,
          author: "Nick Lewis",
          date: node.date
        }),
        output: {
          dir: "./static",
          name: "rss.xml"
        }
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000 // default
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        [
          "gridsome-plugin-remark-shiki",
          { theme: "Material-Theme-Palenight", skipInline: true }
        ]
      ],
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
