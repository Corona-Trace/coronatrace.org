<template>

  <b-navbar-item
    v-if="blok.Destination.linktype =='story'"
    :to="transformLink(blok.Destination.cached_url)"
    tag="g-link"
    v-editable="blok"
  >
    {{ blok.Text }}
  </b-navbar-item>

  <b-navbar-item
    v-else-if="blok.Destination.linktype =='url' && blok.Destination.url.includes('http')"
    :to="blok.Destination.url"
    tag="a"
  >
    {{ blok.Text }}
  </b-navbar-item>
  <b-navbar-item
    v-else-if="blok.Destination.linktype =='url'"
    :to="blok.Destination.url"
    tag="g-link"
  >
    {{ blok.Text }}
  </b-navbar-item>

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
