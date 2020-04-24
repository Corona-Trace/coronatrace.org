<template>
  <section class="section get-started primary-section alternateBackground">
    <div class="container">
      <div class="get-started__heading">
        <h3>Download the App</h3>
        <h2 class="section-title">Get Started</h2>
      </div>
      <div class="columns is-multiline">
        <div
          class="column is-6-tablet is-3-desktop get-started__item"
          v-for="edge in $static.allContentfulGetStartedItem.edges"
          :key="edge.node.id"
        >
          <picture class="get-started__icon">
            <g-image :src="edge.node.iconImage.file.url">
            </g-image>
          </picture>
          </g-image>
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
        iconImage{
          title,
          file {
            url,
            fileName
          }
        },
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
.get-started {
  &__heading {
    text-align: center;
    margin-bottom: 4rem;

    @include from($desktop) {
      margin-bottom: 8rem;
    }

    h3 {
      @include heading_tag($red);
    }
  }

  &__item {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    @include from($desktop) {
      padding: 0 2.75rem;
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;

      @include from($desktop) {
        font-size: 2rem;
        margin-bottom: 2rem;
        min-height: 6rem;
      }
    }

    p {
      @include set_type(1.125rem);
    }
  }

  &__icon {
    color: $blue;
    margin-bottom: 0.5rem;
    width: 6rem;
    height: 6rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: $white;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }
}
</style>