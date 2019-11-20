<template>
  <div class="full-width px-4">
      <div class="max-w-4xl mx-auto mb-8" >
        <client-only>
          <masonry
            :cols="{default: maxNumCols, 1024: maxNumCols,  768: maxNumCols, 640: 2, 375: 1}"
            :gutter="0"
          >
            <div v-for="(item, index) in imgUrls" :key="index" class="py-1 sm:px-1">
              <img :src="`${item}?w=600`" loading="lazy" class="border-2 border-black"/>
            </div>
          </masonry>
        </client-only>
      </div>
  </div>
</template>

<script>

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
  computed: {
    maxNumCols() {
      // if only 2 images, always set maxcols to 2
      return this.numImages % 2 === 0 ? 2 : 3;
    },
    imgUrls() {
      console.log("number of images", this.numImages)
      const imgUrls = [];
      for (let i = 1; i <=this.numImages; i ++) {
        const paddedNumber = ("00" + i).slice(-2);
        console.log(`${process.env.GRIDSOME_IMGIX_URL}/${this.folder}/${this.prefix}-${paddedNumber}.jpg`.replace(/([^:])(\/\/+)/g, '$1/'))
        imgUrls.push(`${process.env.GRIDSOME_IMGIX_URL}/${this.folder}/${this.prefix}-${paddedNumber}.jpg`.replace(/([^:])(\/\/+)/g, '$1/'))
      }
      return imgUrls;
    }
  },
}
</script>

<style scoped>

</style>
