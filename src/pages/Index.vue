<template>
  <Layout>

    <div
      class="blok"
      v-for="block in $page.storyblokEntry.content.PageItems"
    >

      <component
        v-if="block.component == 'Hero'"
        :is="block.component"
        :block="block"
        :key="block._uid"
      />

      <component
        v-if="block.component == 'DeviceCarousel'"
        :is="block.component"
        :block="block"
        :key="block._uid"
      />

      <component
        v-if="block.component == 'FeatureList'"
        :is="block.component"
        :block="block"
        :key="block._uid"
      />

      <component
        v-if="block.component == 'ContentWithImage'"
        :is="block.component"
        :block="block"
        :key="block._uid"
      />

      <component
        v-if="block.component == 'CallToAction'"
        :is="block.component"
        :block="block"
        :key="block._uid"
      />

    </div>

  </Layout>
</template>

<script>
import RichText from '~/components/RichText.vue'
import Hero from '~/components/Hero.vue'
import DeviceCarousel from '~/components/DeviceCarousel.vue'
import FeatureList from '~/components/FeatureList.vue'
import ContentWithImage from '~/components/ContentWithImage.vue'
import CallToAction from '~/components/CallToAction.vue'

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
    ContentWithImage,
    CallToAction
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