<template>
  <div class="columns is-multiline is-mobile">
    <div
      v-for="edge in $static.allIndividual.edges"
      :key="edge.node.id"
      class="column is-3"
    >
      <div class="contributor">
        <div class="contributor__heading">
          <h4>{{ edge.node.fields.Name }}</h4>
          <a v-if="edge.node.fields.LinkedIn" :href="edge.node.fields.LinkedIn">
            <b-icon icon="linkedin"></b-icon>
          </a>
        </div>
        <div class="contributor__footer">
          <p v-if="edge.node.fields.Skill" class="contributor__skill">
            {{ edge.node.fields.Skill }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.column {
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 100% !important;

  @include from($desktop) {
    flex: none !important;
    padding: 0.75rem;
  }
}

.contributor {
  padding: 0.5rem 1rem;
  background-color: $blue-light;
  border-radius: 6px;
  width: 100%;

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

  &__footer {
    display: flex;
    justify-content: space-between;
  }

  p {
    margin: 0;
    font-size: 0.875rem;
    color: $grey;
    width: 100%;
  }
}
</style>

<static-query>
query IndividualContributors {
  allIndividual(sortBy: "order", order: ASC) {
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