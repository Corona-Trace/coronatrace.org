<template>
  <div class="layout">
    <Navbar />

    <slot />

    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  computed: {}
}
</script>

<style lang="scss"></style>
