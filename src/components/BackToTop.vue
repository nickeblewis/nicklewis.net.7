<template>
  <p class="text-sm font-bold">
    <span class="mr-2">&uarr;</span>
    <a :href="anchor">back to top</a>
  </p>
</template>

<script>
  export default {
props: {
    anchor: {
      type: String,
      default: '#',
    },
  },
  }
</script>

<style lang="scss" scoped>

</style>
