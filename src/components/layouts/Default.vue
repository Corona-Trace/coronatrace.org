<template>
  <div class="layout">
    <Navbar />

    <main>
      <slot />
    </main>

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
