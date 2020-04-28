<template>
  <Layout>
    <Hero />

    <DeviceCarousel />

    <FeatureList />

    <HomeContent />

    <CallToAction alternateBackground />
  </Layout>
</template>

<script>
import Hero from '~/components/home/HeroBeta.vue'
import DeviceCarousel from '~/components/DeviceCarousel.vue'
import HomeContent from '~/components/HomeContent.vue'
import CallToAction from '~/components/CallToAction.vue'

export default {
  metaInfo: {
    title: "Let's stop the spread of the Coronavirus together",
    description: 'Join the beta'
  },
  components: {
    Hero,
    DeviceCarousel,
    HomeContent,
    CallToAction
  }
}
</script>
