<template>
  <b-button
    type="is-primary"
    tag="a"
    :href="block.Destination.url"
    target="_blank"
    v-editable="blok"
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

.button {
  width: fit-content;
}
</style>
