<template>
  <section
    v-if="$static.allCore.edges.length > 0"
    class="section section__contributors contributors__core alternateBackground"
  >
    <div class="container">
      <div class="contributors__heading">
        <h3 class="heading-tag">Core Contributors</h3>
      </div>

      <div class="contributors__container columns is-variable is-multiline is-8 is-mobile">
        <div
          v-for="edge in $static.allCore.edges"
          :key="edge.node.id"
          class="column"
          v-if="edge.node.fields.Logo.length > 0"
        >
          <a
            target="_blank"
            :href="edge.node.fields.Website_URL"
          >
            <div class="contributor">

              <g-image
                v-if="edge.node.fields.Logo[0]"
                :src="edge.node.fields.Logo[0].url"
                :alt="edge.node.fields.Name + ' Logo'"
                width="280"
              >
              </g-image>

            </div>
          </a>
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
    flex: 0 0 25%;

    img {
      max-height: 6rem;
      padding: 1rem 0;
    }

    @include from($desktop) {
      justify-content: flex-start;
    }
  }
}

.contributors {
  &__heading {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
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
  @include heading_tag($trace-green);
}
</style>


<static-query>

query CoreContributers {
  allCore(sortBy: "order", order: ASC) {
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
