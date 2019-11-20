<template>
  <div class="border-2 border-black p-4 max-w-sm mx-auto my-12">

      <h3 class="mt-0">Get this guide as a PDF</h3>
      <p>This guide is also available as a beautiful PDF file formatted to be printed in A4/Letter, full with all the information below and more.</p>
      <p>To get the download link, please enter your email and follow the instructions:</p>

    <div id="mc_embed_signup">
      <form
        action="https://theforeignarchitect.us15.list-manage.com/subscribe/post?u=220ad385d5f90b6e7c5e808ba&amp;id=67c1661df3"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
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
            <input type="hidden" name="SIGNUP" :value="guide">
          </div>
          <!-- <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
            <div class="text-sm">
              <label
                class="uppercase tracking-wide text-grey-darker text-sm"
              >Marketing Permissions - GDPR</label>
              <br>
              <span>Due to GDPR regulations, you need to mark the checkbox below if you agree on receiving emails from me:</span>
              <fieldset
                class="flex flex-col justify-start items-center mt-4"
                name="interestgroup_field"
              >
                <label class="uppercase tracking-wide text-grey-darker text-sm" for="gdpr_15033">
                  <input
                    type="checkbox"
                    id="gdpr_15033"
                    name="gdpr[15033]"
                    value="Y"
                    class="av-checkbox gdpr"
                    checked
                  >
                  <span>Email</span>
                </label>
              </fieldset>
              <p class="leading-tight">
                <span
                  class="text-sm"
                >You can unsubscribe at any time by clicking the link in the footer of my emails. For information about our privacy practices, please visit my About page.</span>
              </p>
            </div>
            <div>
              <p class="leading-tight">
                <span class="text-sm">
                  I use Mailchimp as my marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing.
                  <a
                    href="https://mailchimp.com/legal/"
                    target="_blank"
                  >Learn more about Mailchimp's privacy practices here.</a>
                </span>
              </p>
            </div>
          </div> -->
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
              value="Get the link"
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
  name: 'McGetGuideForm',
  props: {
    guide: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
