<template>
  <Layout>

    <Navbar />

    <main>

      <component
        v-for="block in $page.storyblokEntry.content.PageItems"
        v-if="block.component"
        :is="block.component"
        :block="block"
        :key="block._uid"
      />

    </main>

  </Layout>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import EmailSignup from '~/components/home/email-signup/EmailSignup.vue'
import RichText from '~/components/RichText.vue'
import Hero from '~/components/Hero.vue'
import DeviceCarousel from '~/components/DeviceCarousel.vue'
import FeatureList from '~/components/FeatureList.vue'
import ContentWithImage from '~/components/ContentWithImage.vue'
import CallToAction from '~/components/CallToAction.vue'
import ContentWithTwoLogos from '~/components/ContentWithTwoLogos.vue'
import ResourceLinks from '~/components/ResourceLinks.vue'
import ContentThreeCol from '~/components/ContentThreeCol.vue'
import PageHeader from '~/components/PageHeader.vue'
import ContentRichText from '~/components/ContentRichText.vue'

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
    Navbar,
    Footer,
    EmailSignup,
    RichText,
    Hero,
    DeviceCarousel,
    FeatureList,
    ContentWithImage,
    CallToAction,
    ContentWithTwoLogos,
    ResourceLinks,
    ContentThreeCol,
    PageHeader,
    ContentRichText
  },
  computed: {
    ...mapGetters(['emailModalActive'])
  },
  methods: {
    ...mapActions(['toggleEmailModal'])
  }
}
</script>

<style lang="scss">
// .fade-enter-active {
//   transition: opacity 0.5s;
// }

// .fade-enter {
//   opacity: 0;
// }
</style>

<page-query>
query StoryblokEntry ($id: ID) {
  storyblokEntry (id: $id) {
    id
    slug
    content
  }
}
</page-query>