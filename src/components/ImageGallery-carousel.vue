<template>
  <div class="full-width px-4">
    <div class="max-w-4xl mx-auto mb-8" >
      <ClientOnly>
        <carousel :images="imgUrls"/>
      </ClientOnly>
    </div>
  </div>
</template>

<script>

import Carousel from '~/components/Carousel'

export default {
  name: 'ImageGallery',
  props: {
    folder: {
      type: String,
      default: '/'
    },
    prefix: {
      type: String,
      default: ''
    },
    numImages: {
      type:Number,
      default: 0
    }
  },
  components: {
    Carousel
  },
  computed: {
    maxNumCols() {
      // if only 2 images, always set maxcols to 2
      return this.numImages % 2 === 0 ? 2 : 3;
    },
    imgUrls() {
      const imgUrls = [];
      for (let i = 1; i <=this.numImages; i ++) {
        const paddedNumber = ("00" + i).slice(-2);
        imgUrls.push(`${process.env.GRIDSOME_IMGIX_URL}/${this.folder}/${this.prefix}-${paddedNumber}.jpg`.replace(/([^:])(\/\/+)/g, '$1/'))
      }
      return imgUrls;
    }
  },
}
</script>

<style scoped>

</style>
