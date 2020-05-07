<template>

  <div
    class="layout"
    :global-content="globalData.content"
  >

    <Header :blok="$static.global.edges[0].node.content.Header[0]" />

    <main>
      <slot />
    </main>
    <EmailSignupModal></EmailSignupModal>
    <Footer :blok="$static.global.edges[0].node.content.Footer[0]" />

  </div>

</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import EmailSignupModal from '~/components/email-signup/EmailSignupModal.vue'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  props: {
    globalContent: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    Header,
    Footer,
    EmailSignupModal
  },
  computed: {
    ...mapGetters(['emailModalActive']),
    globalData() {
      return this.$static.global.edges[0].node
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

<static-query>
query  {
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
</static-query>