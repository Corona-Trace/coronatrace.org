<template>

  <div
    class="footer__item"
    v-if="block.Destination.linktype =='story'"
  >
    <g-link :to="transformLink(block.Destination.cached_url)">{{ block.Text }}</g-link>
  </div>

  <div
    class="footer__item"
    v-else-if="block.Destination.linktype =='url' && block.Destination.url.includes('http')"
  >
    <a :href="block.Destination.url">{{ block.Text }}</a>

  </div>

  <div
    class="footer__item"
    v-else-if="block.Destination.linktype =='url'"
  >
    <g-link :to="block.Destination.url">{{ block.Text }}</g-link>
  </div>

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
