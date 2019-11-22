<template>
  <div class="grid blog-grid">
    <div v-for="{node} in posts" :key="node.id"
      class="border-2 border-grey flex"
    >
      <g-image :src="node.coverImage" class="w-24 min-height object-cover object-center  lg:w-32 xl:w-48"/>
      <div class="p-4 sm:pr-6">
        <p class="text-xs uppercase">{{node.date | formatDate("dd.MMM")}}</p>
        <h3 class="font-bold leading-tight"><g-link :to="node.path">{{node.title}}</g-link></h3>
        <p v-if="showExcerpt" class="leading-tight pt-2">{{node.summary}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogGrid",
    props: {
      posts: {
        type: Array,
        required: true
      },
      showExcerpt: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style scoped>
.min-height {
  min-height: 6rem;
}
@screen lg {
  .min-height {
    min-height: 8rem;
  }
}
@screen xl {
  .min-height {
    min-height: 12rem;
  }
}
</style>
