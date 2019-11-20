<template>
  <div>
    <a id="top"/>
    <header class="p-4 mb-4 sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-between items-center mb-4 sm:m-0">
        <p class="font-bold uppercase tracking-wide text-xl">
          <g-link to="/" class="no-decoration">{{ $static.metadata.siteName }}</g-link>
        </p>
        <div class="sm:hidden">
          <button @click="showMenu = !showMenu">X</button>
        </div>
      </div>
      <nav :class="showMenu ? 'block': 'hidden'" class="sm:block">
        <ul class="font-semibold text-sm uppercase sm:flex">
          <li class="mr-2">
            <g-link to="/guides">Guides</g-link>
          </li>
          <li class="mr-2">
            <g-link to="/blog/">Blog</g-link>
          </li>
          <li class="mr-2">
            <g-link to="/about/">About</g-link>
          </li>
          <li>
            <g-link to="/newsletter/">Newsletter</g-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <slot/>
    </main>
    <footer class="bg-black px-4 py-6 text-white text-center">
      <ul class="font-semibold text-sm uppercase flex justify-center mb-4">
          <li class="mr-2">
            <a href="#top" class="white-link">&uarr; Top</a>
          </li>
          <li class="mr-2">
            <g-link to="/guides/" class="white-link">Guides</g-link>
          </li>
          <li class="mr-2">
            <g-link to="/blog/" class="white-link">Blog</g-link>
          </li>
          <li class="mr-2">
            <g-link to="/about/" class="white-link">About</g-link>
          </li>
          <li>
            <g-link to="/newsletter/" class="white-link">Newsletter</g-link>
          </li>
        </ul>
        <p class="text-xs">© 2019, Daniel da Rocha<br>Made with &hearts; and <a href="https://gridsome.org/" class="white-link">Gridsome</a>.</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },

}
</script>

<style>
</style>
