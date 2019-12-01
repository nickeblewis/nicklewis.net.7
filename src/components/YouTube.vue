<template>
  <youtube :video-id="videoId"></youtube>
</template>
<script>
import getId from "get-youtube-id";

export default {
  data() {
    return {
      videoId: getId(this.url)
    };
  },
  props: {
    url: {
      type: String,
      default: () => ""
    }
  }
};
</script>