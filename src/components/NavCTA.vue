<template>
  <a
    :href="blok.Destination.url"
    class="button is-primary is-rounded"
    v-text="blok.Text"
    v-editable="blok"
  >
  </a>
</template>

<script>
export default {
  props: ['blok'],
  methods: {
    transformLink(link) {
      return '/' + link
    }
  }
}
</script>
