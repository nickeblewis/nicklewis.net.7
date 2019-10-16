<template>
  <Layout>
    <div class="flex flex-wrap justify-center sm:w-full md:w-full lg:w-full xl:w-full">
      <!-- <div class="container-inner mx-auto py-16"> -->
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="bg-background-tertiary sm:w-full md:w-full lg:w-2/5 xl:w-2/5 m-3 rounded-lg shadow-lg overflow-hidden"
      >
        <!-- <h2 class="text-3xl font-bold"><g-link :to="post.node.slug.current" class="text-copy-primary">{{ post.node.title }}</g-link></h2> -->
        <g-link :to="post.node.slug.current">
        <g-image
          alt="Cover image"
          v-if="post.node.mainImage"
          class="justify-center"
          :src="$urlForImage(post.node.mainImage, $page.metadata.sanityOptions).height(440).width(800).auto('format').url()"
        />
        </g-link>
        <!-- <div class="px-6 py-4">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#photography</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#travel</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
          >#winter</span>
        </div>-->

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ post.node.title }}</div>
          <!-- TODO don't like the name blurb, so wish to spend time on naming decisions -->
          <!-- should work like tweets and work like a micro-blog -->
          <!-- TODO the text also needs conversion from block format -->
          <!-- Refer to the nfolio.4 project for guidance.... -->
          <!-- TODO I think the text can be corrected via the UI -->
          <!--<p class="text-gray-700 text-base">{{ post.excerpt }}</p>-->
          <div class="text-lg mb-4">
            <!-- {{ post.node.summary }} -->
            <span>{{post.node.publishedAt}}</span>
          </div>
          <div class="text-lg mb-4">
            <!-- {{ post.node.summary }} -->
            <block-content :blocks="post.node._rawExcerpt" /> 
          </div>
          <div class="mb-8 justify-center">
            <g-link :to="post.node.slug.current" class="font-bold uppercase">Read More</g-link>
          </div>
        </div>
      </div>
      <!-- end post -->
      <div class="px-6 py-4">
        <pagination-posts
          v-if="$page.posts.pageInfo.totalPages > 1"
          base="/blog"
          :totalPages="$page.posts.pageInfo.totalPages"
          :currentPage="$page.posts.pageInfo.currentPage"
        />
      </div>
    </div>
    <!-- </div> -->
  </Layout>
</template>

<page-query>
query SanityPosts ($page: Int) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityPost (sortBy: "publishedAt", order: DESC, perPage: 6, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        publishedAt (format: "MMMM D, Y")      
        _rawExcerpt
        mainImage {
          asset {
            _id
            url
          }
          caption
          alt
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }  
        slug {
          current
        }
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

