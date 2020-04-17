<template>
  <section
    class="section primary-section about__overview about__text"
    :class="{ alternateBackground: alternateBackground }"
  >
    <div class="container container__large-margins">
      <div class="columns">
        <div class="column">
          <h2 class="title">{{ title }}</h2>
          <div class="about__text-body">
            <slot />
          </div>
          <!-- <div class="cta-link">
            <a href="">See Latest Data</a>
            <b-icon size="is-small" icon="arrow-right"></b-icon>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    alternateBackground: Boolean
  }
}
</script>

<style>
</style>