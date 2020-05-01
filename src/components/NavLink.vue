<template>

  <b-navbar-item
    v-if="block.Destination.linktype =='story'"
    :to="transformLink(block.Destination.cached_url)"
    tag="g-link"
  >
    {{ block.Text }}
  </b-navbar-item>

  <b-navbar-item
    v-else-if="block.Destination.linktype =='url' && block.Destination.url.includes('http')"
    :to="block.Destination.url"
    tag="a"
  >
    {{ block.Text }}
  </b-navbar-item>
  <b-navbar-item
    v-else-if="block.Destination.linktype =='url'"
    :to="block.Destination.url"
    tag="g-link"
  >
    {{ block.Text }}
  </b-navbar-item>

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
