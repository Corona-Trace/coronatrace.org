<template>
  <Layout>

    <div
      class="blok"
      v-for="block in $page.storyblokEntry.content.PageItems"
    >
      <component
        v-if="block.component"
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
import ContentWithTwoLogos from '~/components/ContentWithTwoLogos.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.storyblokEntry.content.MetaTitle,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.storyblokEntry.content.MetaDescription
        }
      ]
    }
  },
  components: {
    RichText,
    Hero,
    DeviceCarousel,
    FeatureList,
    ContentWithImage,
    CallToAction,
    ContentWithTwoLogos
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