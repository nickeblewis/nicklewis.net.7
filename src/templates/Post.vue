<template>
  <Layout>
    <article>
      <div class="px-4 max-w-xl mx-auto">
        <section class=" stripe-shadow-black mb-12">
          <g-image :src="$page.post.coverImage" class="border-2 border-black"/>
          <h1 class=" uppercase tracking-wide leading-tight px-4 pt-4 mb-2
              font-bold text-white bg-black w-full text-2xl border-black
              ">{{ $page.post.title }}</h1>
          <p class="text-xl px-4 mb-4">{{ $page.post.summary }}</p>
        </section>
        <section class="mb-24 content-page">
      <VueRemarkContent class="flow"/>
    </section>
      </div>

      <!-- <div class="container-inner mx-auto my-16">
        <div class="mb-8">
          <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
        </div>
      </div>
      <div class="overflow-x-hidden">
        <div class="contact-me bg-background-secondary pt-16">
          <div class="container-inner mx-auto text-xl pb-4 relative">
            <h2 class="font-bold mb-6" id="contact">Sign up to my Newsletter</h2>

            <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
              <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
            </div>

            <div class="text-lg sm:text-lg mb-16">
              <form
                name="subscribers"
                class="mb-12"
                method="post"
                action="/success/"
                v-on:submit.prevent="handleSubmit"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:
                    <input name="bot-field" />
                  </label>
                </p>
                <div class="flex flex-wrap mb-6 -mx-4">                
                  <div class="w-full px-4 md:w-1/2">
                    <label class="block text-copy-primary mb-2" for="email">Email Address</label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email@example.com"
                      class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                      v-model="formData.email"
                      required
                    />
                  </div>
                </div>

                <div class="flex justify-end w-full">
                  <button
                    type="submit"
                    value="submit"
                    class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                  >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>-->
      </div>
    </article>
    
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      coverImage (width: 1920, height: 800, quality: 90)
      title
      
      content
      summary
    }
  }
</page-query>

<script>
export default {
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style>
/* .grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}
#image {
  grid-area: image;
}
#header {
  grid-area: header;
}
#content {
  grid-area: content;
}
#navigation-top {
  grid-area: navigation-top;
}
#navigation-bottom {
  grid-area: navigation-bottom;
}
@screen lg {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "image image header header"
      "image image content content"
      " . navigation-top content content"
  }
} */



.content h2, h3 {
  @apply font-bold;
}
.content h2 {
  @apply text-2xl leading-none p-2 inline-block;
}
.content h3 {
  @apply text-lg;
}
.content  ul {
  list-style-type: square;
}
/* .content  ul > li {
  @apply mb-2;
} */
.guide-cover {
  height: 320px;
}

.content #buildings + ul, .content nav > ul {
  @apply list-none;
}
/* .content #buildings + ul > li, .content nav > p, .content nav > ul > li {
  @apply mb-1;
} */
</style>


