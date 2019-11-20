<template>
  <div class="full-width px-4">
      <ul class="image-layout max-w-4xl mx-auto">
        <li v-for="(url, index) in imgUrls" :key="index">
          <img :src="`${url}?w=600`" loading="lazy"/>
        </li>
      </ul>
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
    imgs: {
      type: Array,
      default: ()=>[]
    }
  },
  computed: {
    imgUrls() {
      return this.imgs.map(img => `${process.env.GRIDSOME_IMGIX_URL}/${this.folder}/${img}.jpg`.replace(/([^:])(\/\/+)/g, '$1/'));
    }
  },
}
</script>

<style scoped>

/* https://css-tricks.com/adaptive-photo-layout-with-flexbox/ */

ul.image-layout {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

ul.image-layout > li {
  height: 40vh;
  flex-grow: 1;
  @apply p-2 m-0;
}

ul.image-layout > li > img {
  max-height:100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  @apply border-2 border-black;
}

/* VIEWPORT OPTMIZATION */

/* portrait */
@media (max-aspect-ratio: 1/1) {
  ul.image-layout > li {
    height: 30vh;
  }
}
/* short screens */
@media (max-height: 480px) {
  ul.image-layout > li {
    height: 80vh;
  }
}
/* Smaller Screens + Portrait */
@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  ul.image-layout {
    flex-direction: row;
  }

  ul.image-layout > li {
    height: auto;
    width: 100%;
  }

  ul.image-layout > li > img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}
</style>
