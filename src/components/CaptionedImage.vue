<template>
  <figure class="my-8" :class="blog? 'w-full':'full-width px-4'">
    <div class="mx-auto" :class="format === 'v' ? 'max-w-sm' : 'max-w-4xl'">
      <img :src="url" :alt="alt" class="mx-auto border-2 border-black" loading="lazy">
      <figcaption class="text-sm">{{ caption }}</figcaption>
    </div>
  </figure>
</template>
<script>
export default {
  props: {
    imgFile: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: '',
    },
    format: {
      type: String,
      default: 'h'
    },
    blog: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    url() {
      return (
        `${process.env.GRIDSOME_IMGIX_URL}/${this.imgFile}?w=1200`.replace(/([^:])(\/\/+)/g, '$1/')
      );
    },
  },
};
</script>
