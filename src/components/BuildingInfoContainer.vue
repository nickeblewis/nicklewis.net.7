<template>
  <div>
    <article
      v-if="building"
      :id="'building-info-'+building.id"
      class="sm:flex mt-8 mb-2 w-full border-2 border-black p-4 building-info"
    >
      <section class="sm:w-1/2 pb-4 sm:pb-0 sm:mr-4">
        <iframe
          :src="
      'https://www.google.com/maps/embed?pb='+building.gmapsEmbed"
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0"
        ></iframe>
      </section>
      <div class="sm:w-1/2 sm:pr-2">
        <section class="mb-4">
          <h5 class="text-xl font-bold">{{building.name}}</h5>
          <ul class="flex flex-wrap">
            <li v-for="({architect}, index) in building.architectBuildings.nodes" :key="architect.id">
              <a v-if="architect.website" :href="architect.website">{{architect.name}}</a>
              <span v-else>{{architect.name}}</span><span v-if="index < building.architectBuildings.nodes.length-1">,&nbsp;</span>
            </li>
          </ul>
        </section>
        <section class="mb-4">
          <ul>
            <li v-if="building.typology">{{building.typology}}</li>
            <li v-if="building.year">{{building.year}}</li>
            <li v-if="building.gfa && building.gfa > 0">{{building.gfa}}sqm</li>
            <li v-if="building.height && building.height > 0">{{building.height}}m</li>

          </ul>
        </section>
        <section v-if="building.links.nodes.length > 0">
          <ul>
            <li v-for="link in building.links.nodes" :key="link.id">
              <a :href="link.url">{{link.title}}</a>
            </li>
          </ul>
        </section>
      </div>
    </article>
    <back-to-top anchor="#buildings"/>
  </div>
</template>

<script>
import BackToTop from '~/components/BackToTop'
export default {
  name: 'BuildingInfoBox',
  props: {
    id: {
      type: [Number, String],
      required: true
    },
  },
  components: {
    BackToTop
  },
  data() {
    return {
      building: null
    }
  },
  mounted() {
    this.building = require(`../data/building-${this.id}.json`);
  }
}
</script>

<style scoped>
.building-info p {
  @apply m-0;

}
.building-info ul{
  @apply list-none m-0;
}

.building-info ul >li {
  @apply m-0;
}

</style>
