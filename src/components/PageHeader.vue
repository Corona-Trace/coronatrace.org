<template>
  <section
    class="section page-header"
    :style="{ 'background-color': bgColor, 'text-align': $attrs.block.TextAlign }"
    :class="{ alternateBackgroundLight: alternateBackground }"
    v-editable="blok"
  >
    <div
      class="container"
      :class="{ 'container__large-margins': largeMargins }"
    >
      <div class="columns">
        <div class="column">
          <h1 class="title is-1">{{ $attrs.block.Heading }}</h1>
          <p
            class="subtitle"
            v-if="$attrs.block.SubHeading"
          >
            {{ $attrs.block.SubHeading }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    largeMargins: Boolean,
    alternateBackground: Boolean,
    backgroundColor: String
  },
  computed: {
    bgColor() {
      const color = this.$attrs.block.BackgroundColor

      if (color == 'white') {
        return '#fff'
      } else if (color == 'off-white') {
        return '#f7f9f8'
      } else if (color == 'gray') {
        return '#e6edeb'
      } else {
        return '#fff'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 9rem !important;
  padding-bottom: 6rem !important;
}

.page-header {
  h1 {
    padding-bottom: 2rem;
  }

  .subtitle {
    max-width: 525px;
    margin: auto;
  }

  p:empty {
    display: none;
  }
}
</style>