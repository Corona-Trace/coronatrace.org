<template>
  <div class="layout">
    <Header :blok="getProperty('Header')" />

    <main>
      <slot />
    </main>

    <Footer :blok="getProperty('Footer')" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import EmailSignup from '~/components/home/email-signup/EmailSignup.vue'
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
    EmailSignup
  },
  computed: {
    ...mapGetters(['emailModalActive'])
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

