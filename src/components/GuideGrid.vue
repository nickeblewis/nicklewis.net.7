<template>
  <div class="grid guide-grid">
    <div v-for="{node} in guides" :key="node.id"
      class="h-32 w-full
        border-2 border-black
        flex items-center justify-center
        image-cover
        cursor-pointer
        lg:h-64
        hover:shadow-lg"
      :style="`background-image: url('${node.coverImage.src}')`"
      @click="$router.push(node.path)"
    >
      <h3
        class="stripe-shadow-white
        inline-block uppercase font-bold tracking-wide px-4 bg-white text-center"
      >{{node.city}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GuideGrid',
    props: {
      guides: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
