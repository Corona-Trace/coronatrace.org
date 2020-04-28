<template>
  <section
    v-if="$static.allCorporate.edges.length > 0"
    class="section contributors contributors__corporate"
  >
    <div class="container">
      <div class="contributors__heading">
        <h3 class="heading-tag">Corporate Contributors</h3>
      </div>
      <div class="contributors__container columns is-variable is-multiline is-4 is-mobile">
        <div
          v-for="edge in $static.allCorporate.edges"
          :key="edge.node.id"
          class="column"
          v-if="edge.node.fields.Logo.length > 0"
        >
          <div class="contributor">
            <a
              target="_blank"
              :href="edge.node.fields.Website_URL"
            >
              <g-image
                v-if="edge.node.fields.Logo[0]"
                :src="edge.node.fields.Logo[0].url"
                :alt="edge.node.fields.Name + ' Logo'"
                width="280"
              >
              </g-image>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.is-mobile {
  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 25% !important;

    @include from($desktop) {
      flex: none !important;
    }
  }
}

.contributors {
  &__corporate {
    background: $white;
  }

  &__heading {
    display: flex;
    justify-content: center;
  }

  &__container {
    justify-content: center;
    max-width: 960px;
    margin: auto !important;

    .column {
      justify-content: center;
    }
  }

  .contributor {
    background: $white;
    border-radius: 50%;
    overflow: hidden;
    height: 10rem;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
}

.heading-tag {
  @include heading_tag($orange);
}
</style>

<static-query>
query CorporateContributers {
  allCorporate(sortBy: "order", order: ASC) {
    edges {
      node {
        id,
        fields {
          Name,
          Website_URL,
          Logo{
            url,
            type,
            thumbnails {
              full {
                url
              }
            }
          }
        }
      }
    }
  }
}
</static-query>
