<template>
  <Layout>
    <section class="mb-12 px-4">
      <div class="md:flex">
        <div class="mb-4 sm:w-3/4 md:w-1/3 xl:max-w-sm">
          <h2
            class="uppercase tracking-wide px-4 py-1 mb-4
            font-bold text-white bg-black inline-block
            lg:text-lg">
              Blog
          </h2>
          <p>
            A personal journal about the world in which we inhabit, through words and images
          </p>
        </div>
          <div class="w-full md:w-2/3 xl:w-full">
            <blog-grid :posts="$page.posts.edges" :show-excerpt="true"/>
          </div>
      </div>
    </section>
    <!-- <div class="container-inner mx-auto py-16">
      <div v-for="post in $page.posts.edges" :key="post.id" class="post border-gray-400 border-b mb-12">
        <h2 class="text-3xl font-bold"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span> &middot; </span>
          
        </div>

        <div class="text-lg mb-4">
          {{ post.node.summary }}
        </div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div> -->

      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
   <!-- </div> -->
  </Layout>
</template>

<page-query>
  query Posts ($page: Int) {
    posts: allPost (sortBy: "date", order: DESC, perPage: 20, page: $page) @paginate {
      totalCount
    pageInfo {
      totalPages
      currentPage
    }
      edges {
        node {
          id
          title
          summary
          coverImage (width: 300, height: 200, quality: 90)
          date
          path
        }
      }
    }
  }
</page-query>

<script>
import BlogGrid from '~/components/BlogGrid'
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    PaginationPosts,
    BlogGrid
  }
}
</script>

