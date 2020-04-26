<template>
  <section
    class="section page-header"
    :class="{ alternateBackground: alternateBackground }"
  >
    <div
      class="container"
      :class="{ 'container__large-margins': largeMargins }"
    >
      <div class="columns">
        <div class="column">
          <h1 class="title is-1">{{ title }}</h1>
          <p class="subtitle">
            <slot />
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