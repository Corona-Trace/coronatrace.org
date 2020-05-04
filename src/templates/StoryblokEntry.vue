<template>
  <Layout :global-content="globalData.content">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </Layout>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import Footer from '~/components/Footer.vue'

export default {
  components: {
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
    ...mapActions(['toggleEmailModal'])
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