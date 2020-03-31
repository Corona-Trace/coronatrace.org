<template>
  <div class="columns is-variable is-multiline is-4 is-mobile">
    <div
      v-for="edge in $static.allIndividual.edges"
      :key="edge.node.id"
      class="column is-3"
    >
      <div class="contributor">
        <div class="contributor__heading">
          <h4>{{ edge.node.fields.Name }}</h4>
          <a :href="edge.node.fields.LinkedIn">
            <b-icon icon="linkedin"></b-icon>
          </a>
        </div>
        <p class="contributor__skill">{{ edge.node.fields.Skill }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.is-mobile {
  .contributor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0 0 50% !important;
    padding: 0.5rem 1rem;
    background-color: $blue-light;
    border-radius: 6px;

    @include from($desktop) {
      flex: none !important;
    }

    &__heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      h4 {
        font-size: 1.125rem;
        font-weight: 500;
        margin: 0;
      }
    }

    p {
      margin: 0;
      font-size: 0.875rem;
      color: $grey;
      width: 100%;
    }
  }
}
</style>

<static-query>
query IndividualContributors {
  allIndividual {
    edges {
      node {
        id,
        fields {
          Name,
          Skill,
          LinkedIn
        }
      }
    }
  }
}
</static-query>