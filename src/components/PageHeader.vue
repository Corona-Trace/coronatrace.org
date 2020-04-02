<template>
  <section class="section page-header alternateBackground">
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
    largeMargins: Boolean
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
}
</style>