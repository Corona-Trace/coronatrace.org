<template>
  <Layout>

    <div
      class="blok"
      v-for="block in $page.storyblokEntry.content.PageItems"
    >

      <!-- Hero Component Logic -->
      <component
        v-if="block.component == 'Hero'"
        :is="block.component"
        :block="block"
        :key="block._uid"
      />
      <!-- End Hero Component Logic -->

      <!-- Device Carousel Component Logic -->
      <component
        v-if="block.component == 'DeviceCarousel'"
        :is="block.component"
        :block="block"
        :key="block._uid"
      />
      <!-- End Device Carousel Component Logic -->

      <!-- Device Carousel Component Logic -->
      <component
        v-if="block.component == 'FeatureList'"
        :is="block.component"
        :block="block"
        :key="block._uid"
      />
      <!-- End Device Carousel Component Logic -->

    </div>

    <FeatureList />

    <HomeContent />

    <CallToAction alternateBackground />

  </Layout>
</template>

<script>
import RichText from '~/components/RichText.vue'
import Hero from '~/components/Hero.vue'
import DeviceCarousel from '~/components/DeviceCarousel.vue'
import FeatureList from '~/components/FeatureList.vue'
import HomeContent from '~/components/HomeContent.vue'
import CallToAction from '~/components/CallToAction.vue'
import VLazyImage from 'v-lazy-image'

export default {
  metaInfo: {
    title: "Let's stop the spread of the Coronavirus together"
  },
  computed: {},
  components: {
    RichText,
    Hero,
    DeviceCarousel,
    FeatureList,
    HomeContent,
    CallToAction,
    VLazyImage
  },
  methods: {
    richtext(text) {
      return $storyapi.richTextResolver.render(text)
    }
  }
}
</script>

<page-query>
query HomePage {
  storyblokEntry(id: "story-10694429-default") {
    id,
    name,
    slug,
    full_slug,
    position,
    content 
  }
}
</page-query>