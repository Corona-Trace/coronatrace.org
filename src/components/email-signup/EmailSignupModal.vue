<template>

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

</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import EmailSignup from '~/components/email-signup/EmailSignup.vue'

export default {
  components: {
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


 