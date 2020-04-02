<template>
  <section
    v-if="$static.allCorporate.edges.length > 0"
    class="section section__contributors contributors__corporate"
  >
    <div class="container">
      <h2 class="title">Corporate Contributors</h2>
      <div class="columns is-variable is-multiline is-8 is-mobile">
        <div
          v-for="edge in $static.allCorporate.edges"
          :key="edge.node.id"
          class="column is-2"
        >
          <div class="contributor">
            <a target="_blank" :href="edge.node.Website_URL">
              <g-image
                v-if="edge.node.fields.Logo[0]"
                :src="edge.node.fields.Logo[0].url"
                :alt="edge.node.fields.Name + ' Logo'"
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
    flex: 0 0 32% !important;

    @include from($desktop) {
      flex: none !important;
    }
  }
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
