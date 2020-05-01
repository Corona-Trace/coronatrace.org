<template>

  <a
    :href="block.Destination.url"
    class="button is-primary is-rounded"
    v-text="block.Text"
  >
  </a>

</template>

<script>
export default {
  methods: {
    transformLink(link) {
      return '/' + link
    }
  },
  computed: {
    block() {
      return this.$attrs.block
    }
  }
}
</script>
