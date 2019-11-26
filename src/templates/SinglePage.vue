<template>
  <Layout>
    <article class="mb-12 px-4">
      <div class="md:flex">
        <div class="mb-4 md:mr-12">
          <h1
            class="stripe-shadow-green-700 uppercase tracking-wide px-4 py-1 mb-4
            font-bold text-white bg-black inline-block
            lg:text-lg">
              {{ $page.singlePage.title }}
          </h1>
        </div>
        <VueRemarkContent  class="flow content-page max-w-xl"/>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query singlePage ($id: ID!) {
  singlePage(id: $id) {
    title
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.singlePage.title,
      meta: [
        { key: "twitter:title",name: "twitter:title", content: this.$page.singlePage.title },
        { key: "og:title",name: "og:title", content: this.$page.singlePage.title },

      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  },
}
</script>

<style >


</style>
