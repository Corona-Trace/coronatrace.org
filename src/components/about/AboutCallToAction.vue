<template>
  <div>
    <section class="section about__contribute about__text">
      <div class="container container__large-margins">
        <h2
          class="title"
          v-text="$static.allContentfulAboutCta.edges[0].node.heading"
        ></h2>
        <p
          class="subtitle"
          v-text="$static.allContentfulAboutCta.edges[0].node.subheading"
        ></p>
        <a
          :href="$static.allContentfulAboutCta.edges[0].node.ctaDestination"
          class="button is-primary"
          target="__blank"
          v-text="$static.allContentfulAboutCta.edges[0].node.cta"
        ></a>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<static-query>
query AboutCTA {
  allContentfulAboutCta{
    edges {
      node {
        id,
        heading,
        subheading,
        cta,
        ctaDestination
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.section {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.about {
  &__contribute {
    text-align: center;
  }
}
</style>