<template>
  <carousel
    :perPageCustom="[[375, 1], [640, 2], [768, 3], [1024, 4], [1280, 5]]"
    :navigation-enabled="true"
    >
    <slide v-for="(image, index) in images" :key="index">
      <img :src="`${image}?w=600`" loading="lazy" class="border-2 border-black"/>
    </slide>
  </carousel>
</template>

<script>
  export default {
    props: {
      images: {
        type: Array,
        default: ()=>[]
      },
    },
    components: {
      carousel: () =>
        import ('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
      slide: () =>
        import ('vue-carousel')
        .then(m => m.Slide)
        .catch()
    },

  }
</script>

<style lang="scss" scoped>

</style>
