<template>
  <portable-text
    :blocks="blocks"
    :serializers="serializers"
    :projectId="$static.metadata.sanityOptions.projectId"
    :dataset="$static.metadata.sanityOptions.dataset"
  />
</template>

<script>
import PortableText from "sanity-blocks-vue-component";
import YouTube from '../components/YouTube'
export default {
  props: {
    blocks: Array
  },
  components: {
    PortableText
  },
  data() {
    return {
      serializers: {
        types: {
          youtube: YouTube,
          mainImage: ({ node }) => (
            <figure>
              <img
                src={this.$urlForImage(
                  node,
                  this.$static.metadata.sanityOptions
                )
                  .auto("format")
                  .url()}
                alt={node.alt}
              />
              <figcaption>{node.caption}</figcaption>
            </figure>
          )
        }
      }
    };
  }
};
</script>

<static-query>
  {
    metadata{
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>

<style scoped>
figcaption {
  text-align: center;
  font-size: 0.7em;
  font-style: italic;
}
</style>