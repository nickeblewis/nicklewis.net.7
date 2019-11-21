<template>
  <Layout>
    <article>
    <!-- COVER IMAGE -->
    <div id="image" class="px-4">
      <div class="hidden w-full
        border-2 border-black
        image-cover
        guide-cover
        mb-8
        max-h-full
        sm:flex sm:items-center sm:justify-center"
      :style="`background-image: url('${$page.guide.coverImage.src}')`">
        <span class="stripe-shadow-white max-w-xl mx-auto p-4 font-bold text-3xl uppercase leading-none tracking-wide">
            {{$page.guide.city}}
        </span>
      </div>
    </div>
    <header id="header" class="mb-8">
      <div class="px-4 max-w-xl mx-auto">
        <h1 class="text-3xl font-bold leading-none mb-2">{{ $page.guide.title }}</h1>
        <!-- <hr class="border-black border-b-2 mb-4"/> -->
        <p class="text-xl ">{{ $page.guide.excerpt }}</p>
      </div>
    </header>
    <section id="navigation-top" v-if="$page.guide.series && $page.guide.chapter > 0" class="content px-4 max-w-xl mx-auto">
      <series-navigation
        :total-chapters="$page.guide.series.belongsTo.totalCount"
        :current-chapter="$page.guide.chapter"
        :chapters="$page.guide.series.belongsTo.edges.map(edge => edge.node)"/>
    </section>
    <section  id="content" class="content px-4 max-w-xl mx-auto">
      <vue-remark-content class="flow"/>
    </section>
    <section  id="navigation-bottom"  v-if="$page.guide.series && $page.guide.chapter > 0" class="content px-4 max-w-xl mx-auto">
      <series-navigation
        :total-chapters="$page.guide.series.belongsTo.totalCount"
        :current-chapter="$page.guide.chapter"
        :chapters="$page.guide.series.belongsTo.edges.map(edge => edge.node)"/>
    </section>
  </article>
  </Layout>
</template>

<page-query>
query Guide ($id: ID!) {
  guide(id: $id) {
    title
    excerpt
    city
    chapter
    series {
      id
      belongsTo {
        totalCount
        edges {
          node {
            ...on Guide {
              id
              title
              path
              chapter
            }
          }
        }
      }
    }
    coverImage (width: 1920, height: 800, quality: 90)
  }
}
</page-query

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.guide.title,
      meta: [
        { key: "description", name: "description", content: this.$page.guide.excerpt },
        { key: "twitter:description", name: "twitter:description", content: this.$page.guide.excerpt },
        { key: "twitter:title",name: "twitter:title", content: this.$page.guide.title },
        { key: "twitter:image",name: "twitter:image", content: this.$page.guide.coverImage.src },
        { key: "og:type",name: "og:type", content: "article" },
        { key: "og:title",name: "og:title", content: this.$page.guide.title },
        { key: "og:description", name: "og:description", content: this.$page.guide.excerpt },
        {
          key: "article:published_time",
          name: "article:published_time",
          content: this.$page.guide.date
        },
        { key: "og:image", name: "og:image",content: this.$page.guide.coverImage.src },
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  }
}
</script>

<style>
/* .grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}
#image {
  grid-area: image;
}
#header {
  grid-area: header;
}
#content {
  grid-area: content;
}
#navigation-top {
  grid-area: navigation-top;
}
#navigation-bottom {
  grid-area: navigation-bottom;
}
@screen lg {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "image image header header"
      "image image content content"
      " . navigation-top content content"
  }
} */



.content h2, h3 {
  @apply font-bold;
}
.content h2 {
  @apply text-2xl leading-none p-2 inline-block;
}
.content h3 {
  @apply text-lg;
}
.content  ul {
  list-style-type: square;
}
/* .content  ul > li {
  @apply mb-2;
} */
.guide-cover {
  height: 320px;
}

.content #buildings + ul, .content nav > ul {
  @apply list-none;
}
/* .content #buildings + ul > li, .content nav > p, .content nav > ul > li {
  @apply mb-1;
} */
</style>
