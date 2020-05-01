<template>
  <b-button
    type="is-primary"
    tag="a"
    :href="block.Destination.url"
    target="_blank"
    rounded
  >{{ block.Text}}</b-button>
</template>

<script>
export default {
  computed: {
    block() {
      return this.$attrs.block
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: fit-content;
}
</style>
