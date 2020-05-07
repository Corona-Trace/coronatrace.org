<template>
  <section class="section resource-links">
    <div class="resource-links__heading">
      <h3 class="resource-links__heading-tag heading-tag">RESOURCES</h3>
      <h2 class="title section-title">Latest COVID-19 Data</h2>
    </div>
    <div class="resource-links__body columns">
      <div class="column is-3">
        <h4 class="title is-4">Maps</h4>
        <div class="resource-links__links">
          <a
            href="https://www.maps.arcgis.com/apps/Styler/index.html?appid=230e6ea74c064fcfa390721d29b05cfe&lat=42.50721&lon=-44.15075&zoom=2"
            target="_blank"
          >IHME Projected Peaks Dashboard</a>
          <a
            href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
            target="_blank"
          >Johns Hopkins University Dashboard</a>
          <a href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html">NY Times US Map</a>

        </div>
      </div>
      <div class="column is-3">
        <h4 class="title is-4">Statistics</h4>
        <div class="resource-links__links">
          <a
            href="https://nssac.bii.virginia.edu/covid-19/dashboard/"
            target="_blank"
          >University of Virginia Dashboard</a>

        </div>
      </div>
      <div class="column is-3">
        <h4 class="title is-4">Global</h4>
        <div class="resource-links__links">
          <a
            href="https://www.arcgis.com/apps/opsdashboard/index.html#/a9419e61cb6f4521a15baf78be309b35"
            target="_blank"
          >ArcGIS Global Dashboard</a>
          <a
            href="https://nextstrain.org/ncov"
            target="_blank"
          >Next Strain Transmission Visualization</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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

      &:hover {
        color: $gray-logo;
      }
    }
  }
}
</style>