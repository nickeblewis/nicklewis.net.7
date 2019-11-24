<template>
  <Layout>
    <section class="px-4 mb-12 text-lg
      sm:w-3/4 sm:text-xl
      md:text-2xl md:py-12 md:flex md:w-full md:p-0
      lg:text-3xl
      xl:text-4xl xl:py-16">
      <div class="hidden md:w-1/3 md:block xl:max-w-sm">&nbsp;</div>
      <div class="md:w-2/3 xl:w-full md:px-4">
        <p class="font-sans font-bold">Grab the camera, let's go for a stroll!</p>
        <p class="xl:w-3/4">Photography is a storytelling tool and we have all seen the world through others' photos. My aim is to help you find some fascinating new places, history and more through my own gradual discoveries. Welcome to the Rambling Photographer...</p>
      </div>
    </section>  
    <!-- <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Nick Lewis</div>
        <div class="text-green-700 leading-tight">Coder, Photographer &amp; Tutor</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/developer.svg" alt="hero" class="mx-auto sm:mx-0" />
      </div>
    </div> -->
    <!-- <div class="container-inner mx-auto">
       <p
        class="text-lg sm:text-xl"
      >I have worked for many years in the web and photography industries and have combined the two disciplines throughout my career. I am a highly experienced front-end web developer who specialises in VueJS at the current point in time. I am setting out to write about my experience through this website and hope that my blog posts and documentation can help you in some way, whether you are trying to get your head around the latest tech or just want to learn the basics.</p>
      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/code_review.svg" alt="mobile" />
        </div>
      </div>
    </div> -->
    <!-- <div class="overflow-x-hidden">
      <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
        <h2 class="font-bold mb-6" id="projects">Recent Posts:</h2>
        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>
        <ul class="text-lg sm:text-xl">        
          <li
            v-for="post in $page.posts.edges"
            :key="post.id"  
            class="checkmark mb-6">
            <div>
              {{ post.node.section }} - <g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link>
            </div>
            <div class="text-lg text-gray-600">
              {{ post.node.summary }}
            </div>
          </li>
        </ul>
      </div>
    </div>     -->
    <!-- BLOG -->
    <home-section>
      <template #title>
        Blog
      </template>
      <template #description>
        A series of (mostly) weekly posts
      </template>
      <template #content>
        <blog-grid :posts="$page.posts.edges" :show-excerpt="true"/>
      </template>
    </home-section>
     <!-- CITY GUIDES -->
    <!-- <home-section>
      <template #title>
        Walking Guides
      </template>
      <template #description>
        Curated walking guides with a dash of photography tips for good flavour
      </template>
      <template #content>
        <guide-grid :guides="$page.guides.edges" />
      </template>
    </home-section> -->
    <!-- ABOUT -->
    <section class="bg-black text-white py-12 flex flex-col items-center justify-center">
      <h2 class="mb-8 stripe-shadow-white uppercase tracking-wide py-1 font-bold px-4 bg-white text-black inline-block  lg:text-lg">About the Author</h2>

      <div class="px-4 mb-4 sm:mb-12 sm:max-w-2xl sm:mx-auto sm:flex sm:items-start md:p-0">
        <g-image
          src="../assets/profile.jpg"
          alt="Nick Lewis in the studio"
          class="border-2 border-white w-32 mx-auto mb-4 flex-none h-auto sm:m-0 "/>
        <div class="mb-8 sm:px-4">
            <p
              class="mb-4"
            >Nick is a photographer based in Hampshire and runs a web development business, which is super handy as he has created the Rambling Photographer in response to authoring better, more frequently updated walking guides and to blend in a good dose of photography tips along the way, helping you find and see things in a refreshing way. </p>

            <p
              class="mb-4"
            >The Rambling Photographer is designed to be easy to access from your smartphone, so that you can take these guides with you on your travels.</p>

            <!--<p class="mb-4">
              Start by checking out the
              <a href="#guides" class="white-link">guides</a> above and the latest posts on the blog. You can also learn more about me
              <a
                href="/about" class="white-link"
              >here.</a>
            </p>-->
            <p class="mb-8">
              Make sure you
              <a href="/newsletter" class="white-link">sign up</a>
              to receive the latest updates.
            </p>


        </div>
      </div>
          <div class="flex justify-center text-white">
              <a
                href="https://twitter.com/nicklewis"
                class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
                target="_blank"
                alt="@nicklewis on Twitter"
                aria-label="Open my profile on Twitter"
                rel="noopener"
              >
                <font-awesome :icon="['fab', 'twitter']" size="2x" class="text-white"/>
              </a>
              <!-- <a
                href="https://www.linkedin.com/in/nicklewis/"
                class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
                target="_blank"
                alt="Nick Lewis on LinkedIn"
                aria-label="Open my profile on Linkedin"
                rel="noopener"
              >
                <font-awesome :icon="['fab', 'linkedin']" size="2x" class="text-white"/>
              </a>-->
              <!-- <a
                href="https://www.pinterest.de/theforeignarchitect/pins/"
                class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
                alt="@theForeignArchitect on Pinterest"
                target="_blank"
                aria-label="Open my profile on Pinterest"
                rel="noopener"
              >
                <font-awesome :icon="['fab', 'pinterest']" size="2x" class="text-white"/>
              </a> -->
              <a
                href="https://www.instagram.com/nicklewisphotography/"
                class="mr-4 shadow-none hover:shadow-none hover:text-grey-dark"
                target="_blank"
                alt="@nicklewisphotography on Instagram"
                aria-label="Open my profile on Instagram"
                rel="noopener"
              >
                <font-awesome :icon="['fab', 'instagram']" size="2x" class="text-white"/>
              </a>
          </div>
    </section>
    <!-- <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>
        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div><g-image src="../../static/profile.jpg" alt="avatar" class="w-32 h-32 rounded-full mb-8 lg:mb-0" /></div>
          <div class="flex-1 text-lg sm:text-xl ml-6">I am a freelance web developer, content creator and photographer, who is on a mission to help businesses and individuals build solutions for their online world.</div>
        </div>
      </div> 
    </div> -->
    <!-- <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6" id="contact">Contact me:</h2>
          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
          </div>
          <div class="text-lg sm:text-lg mb-16">
            <form
              name="contact"
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
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Joe Bloggs"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                    v-model="formData.name"
                    required
                  />
                </div>
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
              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  v-model="formData.message"
                  required
                ></textarea>
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
      </div>
    </div> -->
  </Layout>
</template>

<page-query>
query {
  guides: allGuide (filter: {chapter: {eq: 0}}, sortBy: "city" ){
    edges {
      node {
        id
        city
        coverImage (width: 500, height: 500, quality: 90)
        path
      }
    }
  }
  posts: allPost (limit:4){
    edges {
      node {
        id
        title
        summary
        coverImage (width: 300, height: 200, quality: 90)
        date
        path
      }
    }
  }
}
</page-query>

<script>
import HomeSection from '~/components/HomeSection'
import BlogGrid from '~/components/BlogGrid'
import GuideGrid from '~/components/GuideGrid'
export default {
  components: {
    HomeSection,
    BlogGrid,
    GuideGrid
  },
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
  metaInfo: {
    title: 'Home'
  }
}
</script>

