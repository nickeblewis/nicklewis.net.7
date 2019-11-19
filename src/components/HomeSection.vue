<template>
  <section class="mb-12">
    <div class="md:flex">
      <div class="mb-4 sm:w-3/4 md:w-1/3 xl:max-w-sm">
        <h2
          class="uppercase tracking-wide px-4 py-1 mb-4
          font-bold text-white bg-black inline-block
          lg:text-lg">
            <slot name="title"/>
        </h2>
        <p class="px-4"><slot name="description"/></p>
      </div>
        <div class="px-4 w-full md:w-2/3 xl:w-full">
          <slot name="content"/>
        </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomeSection'
  }
</script>

<style  scoped>
</style>
