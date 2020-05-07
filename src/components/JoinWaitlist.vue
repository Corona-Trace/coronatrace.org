<template>
  <b-button
    v-else
    type="is-primary"
    rounded
    @click="toggleEmailModal"
  >Join Waitlist</b-button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['toggleEmailModal'])
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: fit-content;
}
</style>