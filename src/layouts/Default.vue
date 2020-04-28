<template>
  <div class="layout">
    <Navbar />

    <main>
      <slot />
    </main>

    <b-modal
      :active.sync="emailModalActive"
      trap-focus
      aria-role="dialog"
      aria-modal
      scroll="keep"
      class="email-signup-modal"
      @close="toggleEmailModal"
    >
      <email-signup></email-signup>
    </b-modal>

    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import EmailSignup from '~/components/home/email-signup/EmailSignup.vue'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  components: {
    Navbar,
    Footer,
    EmailSignup
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
