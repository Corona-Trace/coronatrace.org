<template>
  <section class="section get-started home-section">
    <div class="container">
      <div class="get-started__heading">
        <h2 class="is-2">Get Started</h2>
      </div>
      <div class="columns">
        <div
          class="column get-started__item"
          v-for="edge in $static.allContentfulGetStartedItem.edges"
          :key="edge.node.id"
        >
          <b-icon
            class="get-started__icon"
            size="is-large"
            :icon="edge.node.iconHandle"
          >
          </b-icon>
          <div class="item__text">
            <h4 v-text="edge.node.heading"></h4>
            <p v-text="edge.node.text"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query GetStartedItems {
  allContentfulGetStartedItem(sortBy: "order", order: ASC) {
    edges {
      node {
        id,
        iconHandle,
        heading,
        text
      }
    }
  }
}
</static-query>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 9rem;
  padding-bottom: 9rem;
}
.get-started {
  &__heading {
    text-align: center;
    margin-bottom: 4rem;

    @include from($desktop) {
      margin-bottom: 8rem;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: bold;

      @include from($desktop) {
        font-weight: 3rem;
      }
    }
  }

  &__item {
    padding: 2rem;
    display: flex;
    flex-direction: row;

    @include from($desktop) {
      padding: 0 2.75rem;
      flex-direction: column;
    }

    h4 {
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;

      @include from($desktop) {
        margin-bottom: 2rem;
      }
    }
  }

  &__icon {
    padding-right: 1.5rem;
    color: $blue;
    margin-bottom: 0.5rem;
    height: 6rem;
    width: 6rem;

    @include from($desktop) {
      padding-right: 0;
      height: 3rem;
      width: 3rem;
    }

    i {
      &::before {
        font-size: 6rem;
      }
    }
  }
}
</style>