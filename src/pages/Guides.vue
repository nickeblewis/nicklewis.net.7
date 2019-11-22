<template>
  <Layout>
    <section class="mb-12 px-4">
      <div class="md:flex">
        <div class="mb-4 sm:w-3/4 md:w-1/3 xl:max-w-sm">
          <h2
            class="stripe-shadow-black uppercase tracking-wide px-4 py-1 mb-4
            font-bold text-white bg-black inline-block
            lg:text-lg">
              Walking Guides
          </h2>
          <p>
            Curated guides with my selection of the most exciting new architecture in each of these cities.
          </p>
        </div>
          <div class="w-full md:w-2/3 xl:w-full">
            <guide-grid :guides="$page.guides.edges" />
          </div>
      </div>
    </section>
  </Layout>
</template>

<!-- guides: allGuide (filter: {chapter: {eq: 0}}, sortBy: "city" ){ -->

<page-query>
query {
  guides: allGuide (filter: {chapter: {eq: 0}}, sortBy: "city" ){
    edges {
      node {
        id
        city
        coverImage (width: 500, height: 500, quality: 90)
        path
      }
    }
  }
}
</page-query>
<script>
import GuideGrid from '~/components/GuideGrid'
import HomeSection from '~/components/HomeSection'

export default {
  metaInfo() {
    return {
      title: 'City Guides for Contemporary Architecture - TFA',
    }
  },
  components: {
    GuideGrid,
    HomeSection
  }

}
</script>

<style scoped>

.grid {
  display: grid;
  grid-gap: 1rem;
}
@screen sm {
  .guide-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@screen xl {
  .guide-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>
