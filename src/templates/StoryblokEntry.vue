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