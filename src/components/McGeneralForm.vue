<template>
  <div class=" mx-auto my-12 p-8 border-2 border-black max-w-sm">
    <div v-if="title">
      <h3 class="font-bold">Subscribe to my newsletter</h3>
      <p>I only send 1-2 emails per month, and I promise it will always be entertaining! And you can unsubscribe at any time.</p>
    </div>
    <div id="mc_embed_signup">
      
      <form
        action="https://nicklewis.us6.list-manage.com/subscribe/post?u=7feeb83d6f2d04d9037a6da34&amp;id=6329947d2b"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
        placeholder="Enter your email"
      >
        <div id="mc_embed_signup_scroll">
          <div class="block my-4">
            <label for="mce-EMAIL" class="uppercase tracking-wide text-grey-darker text-sm">Email</label>
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter your email address"
              class="w-full bg-grey-light p-2 rounded border border-black focus:bg-white focus:border-black"
              id="mce-EMAIL"
            >
            <input type="hidden" name="SIGNUP" value="general">
          </div>

          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_220ad385d5f90b6e7c5e808ba_67c1661df3" tabindex="-1" value>
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="bg-red-600 text-white p-2 uppercase font-bold tracking-wide rounded text-sm cursor-pointer shadow hover:shadow-lg hover:bg-red-700"
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McGeneralForm',
  props: {
    title: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
