<template>
  <g-image :src="imageURL" />
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    imageURL() {
      if (typeof this.blok.Logo === 'string') {
        return this.blok.Logo
      }

      const path = this.blok.Logo.path
      return require('!!assets-loader?width=800&quality=100&fit=inside!~/' +
        path)
    }
  }
}
</script>

<style>
</style>