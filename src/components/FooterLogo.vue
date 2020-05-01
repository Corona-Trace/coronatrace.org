<template>
  <div class="footer__heading">
    <g-link to="/">
      <v-lazy-image
        :src="block.Logo"
        src-placeholder="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      />
    </g-link>
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image'

export default {
  components: {
    VLazyImage
  },
  computed: {
    block() {
      return this.$attrs.block
    }
  }
}
</script>
