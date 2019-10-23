<template>
  <Layout>
    <div class="flex flex-wrap justify-center sm:w-full md:w-full lg:w-full xl:w-full">
      <div
        v-for="tag in $page.tags.edges"
        
        class="bg-background-tertiary sm:w-full md:w-full lg:w-2/5 xl:w-2/5 m-3 rounded-lg shadow-lg overflow-hidden"
      >
        <!-- <g-link :to="tag.node.slug.current"> -->
        <!-- <g-image
          alt="Cover image"
          v-if="tag.node.mainImage"
          class="justify-center"
          :src="$urlForImage(tag.node.mainImage, $page.metadata.sanityOptions).height(440).width(800).auto('format').url()"
        /> -->
        </g-link>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ tag.node.title }}</div>
          <div class="text-lg mb-4">
            <span>{{tag.node.publishedAt}}</span>
          </div>
          <div class="text-lg mb-4">
            <block-content :blocks="tag.node._rawExcerpt" /> 
          </div>
          <div class="mb-8 justify-center">
            <!-- <g-link :to="tag.node.slug.current" class="font-bold uppercase">Read More</g-link> -->
          </div>
        </div>
      </div>
      <!-- end post -->
      <div class="px-6 py-4">
        <pagination-posts
          v-if="$page.tags.pageInfo.totalPages > 1"
          base="/blog"
          :totalPages="$page.tags.pageInfo.totalPages"
          :currentPage="$page.tags.pageInfo.currentPage"
        />
      </div>
    </div>
    <!-- </div> -->
  </Layout>
</template>

<page-query>
query SanityCategory ($page: Int) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  tags: allSanityCategory (sortBy: "title", order: DESC, perPage: 6, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title        
      }
    }
  }
}
</page-query>

<script>

import PaginationPosts from "../components/PaginationPosts";
import BlockContent from "~/components/BlockContent";

export default {
  metaInfo: {
    title: "Nick Lewis Photography & Digital"
  },
  components: {
    PaginationPosts,
    BlockContent
  
  }
};
</script>

