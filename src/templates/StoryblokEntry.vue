<template>
  <Layout :global-content="globalData.content">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
    <EmailSignupModal></EmailSignupModal>
  </Layout>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import EmailSignupModal from '~/components/email-signup/EmailSignupModal.vue'
import Footer from '~/components/Footer.vue'
import { getMetadataToPage } from '../utils/meta-tags'

export default {
  props: {
    globalContent: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    EmailSignupModal,
    Footer
  },
  metaInfo() {
    const config = {
      title: this.story.content.MetaTitle,
      description: this.story.content.MetaDescription
    }
    if (this.story.full_slug == 'home') {
      config['path'] = '/'
    } else {
      config['path'] = `/${this.story.full_slug}`
    }
    return getMetadataToPage(config)
  },
  computed: {
    ...mapGetters(['emailModalActive']),
    story() {
      return this.$page.storyblokEntry
    },
    globalData() {
      return this.$page.global.edges[0].node
    }
  },
  methods: {
    ...mapActions(['toggleEmailModal']),
    getProperty(prop) {
      if (this.globalContent[prop] === undefined) {
        return {}
      }
      return this.globalContent[prop][0] || {}
    }
  }
}
</script>

<style lang="scss">
</style>

<page-query>
query StoryblokEntry ($id: ID) {
  storyblokEntry (id: $id) {
    id
    name
    slug
    full_slug
    content
  }

  global: allStoryblokEntry (filter: { slug: { eq: "global" } }) {
    edges {
      node {
        id
        full_slug
        content
      }
    }
  }
}
</page-query>