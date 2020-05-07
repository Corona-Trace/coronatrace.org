<template>

  <div
    class="footer__item"
    v-if="blok.Destination.linktype =='story'"
  >
    <g-link :to="transformLink(blok.Destination.cached_url)">{{ blok.Text }}</g-link>
  </div>

  <div
    class="footer__item"
    v-else-if="blok.Destination.linktype =='url' && blok.Destination.url.includes('http')"
  >
    <a :href="blok.Destination.url">{{ blok.Text }}</a>

  </div>

  <div
    class="footer__item"
    v-else-if="blok.Destination.linktype =='url'"
  >
    <g-link :to="blok.Destination.url">{{ blok.Text }}</g-link>
  </div>

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

<style lang="scss" scoped>
.footer {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: $gray-bg;
  color: $gray-logo;

  &__heading {
    padding-bottom: 1rem;

    h4 {
      font-weight: bold;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
  }

  &__item {
    color: $white;
    margin-bottom: 0.5rem;
  }

  a {
    color: $gray-dark;

    &:hover {
      color: $gray-logo;
    }
  }

  &__bottom {
    padding-top: 3rem;
    margin-top: 3rem;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    flex-direction: column;

    @include from($desktop) {
      flex-direction: row;
    }
  }
}
</style>