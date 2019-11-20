<template>
  <div class="full-width px-4 my-8">
    <div class="max-w-3xl mx-auto">
      <!-- <div class="overlay w-full h-full absolute top-left bg-transparent" onClick="style.pointerEvents='none'"></div> -->
      <iframe :title="title" :src="map" height="500" scrolling="no" class="w-full border-2 border-black"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
name: 'GuideMap',
  props: {
    map: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'map',
    },
  },
  }
</script>

<style>


</style>
