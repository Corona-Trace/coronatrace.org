<template>
  <section
    class="section resource-links"
    v-editable="blok"
  >
    <div class="resource-links__heading">
      <h3 class="resource-links__heading-tag heading-tag">{{ blok.HeadingTag }}</h3>
      <h2 class="title section-title">{{ blok.Heading }}</h2>
    </div>
    <div class="resource-links__body columns">

      <div
        v-for="col in blok.Columns"
        class="column is-3"
      >
        <h4 class="title is-4">{{ col.Heading }}</h4>
        <div class="resource-links__links">
          <RichText :text="col.Content" />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import RichText from '~/components/RichText.vue'

export default {
  props: ['blok'],
  components: {
    RichText
  }
}
</script>

<style lang="scss" >
.resource-links {
  text-align: center;

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__heading-tag {
    @include heading_tag($trace-green);
  }

  &__body {
    margin-top: 2rem;
    justify-content: center;
  }

  &__links {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: underline;
      color: $gray-dark;
      margin: 0.125rem 0;
      display: block;

      &:hover {
        color: $gray-logo;
      }
    }
  }
}
</style>