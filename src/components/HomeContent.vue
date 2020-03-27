<template>
  <div>
    <ContentWithImage>
      <template v-slot:heading>
        The CoronaVirus Is Rapidly Spreading
      </template>
      <template v-slot:body-text>
        <p>
          The CoronaVirus pandemic is one of the most serious public health
          emergencies we’ve ever faced. As a society, we have to do everything
          we can to slow the spread of the virus.
        </p>
        <p>
          Tactics like physical distancing and frequent hand-washing are
          effective ways to slow the spread, but we believe that more can be
          done.
        </p>
      </template>
      <template v-slot:link>
        <a
          href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
          target="_blank"
          >See Latest Data</a
        >
      </template>
      <template v-slot:image>
        <g-image
          src="~/assets/images/corona-map.jpg"
          fit="contain"
          height="600"
        ></g-image>
      </template>
    </ContentWithImage>

    <ContentWithImage imagePushed alternateBackground>
      <template v-slot:heading>
        Not Everyone Has Symptoms
      </template>
      <template v-slot:body-text>
        <p>
          Those infected with Coronavirus don’t always experience symptoms in
          the first five days (if ever). These asymptomatic carriers can
          unknowingly spread the virus to others by accident.
        </p>
      </template>
      <template v-slot:link>
        <a
          href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
          target="_blank"
          >Learn More About the Coronavirus</a
        >
      </template>
      <template v-slot:image>
        <g-image
          src="~/assets/images/people-on-subway-in-masks.jpg"
          fit="contain"
          height="600"
        ></g-image>
      </template>
    </ContentWithImage>

    <ContentWithImage>
      <template v-slot:heading>
        Your Participation Can Help Save Lives
      </template>
      <template v-slot:body-text>
        <p>
          By joining the CoronaTrace movement, you can help us stop the spread
          of CoronaVirus.
        </p>
        <p>
          When you seecurely and anonymously share your recent location data
          with us, we can enable instant digital contact tracing and notify
          those who’ve unknowingly been in contact with the virus.
        </p>
        <p>
          Help us flatten the curve and save every live we possibly can.
        </p>
      </template>
      <template v-slot:link>
        <a
          href="https://www.livescience.com/coronavirus-flatten-the-curve.html"
          target="_blank"
          >Learn More About Flattening the Curve</a
        >
      </template>
      <template v-slot:image>
        <g-image
          src="~/assets/images/woman-smiling.jpg"
          fit="contain"
          height="600"
        ></g-image>
      </template>
    </ContentWithImage>
  </div>
</template>

<script>
import ContentWithImage from '~/components/ContentWithImage.vue'

export default {
  components: {
    ContentWithImage
  }
}
</script>

<style lang="scss" scoped></style>
