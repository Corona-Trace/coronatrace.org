<template>
  <Layout>
    <Hero />

    <DeviceCarousel />

    <FeatureList />

    <HomeContent />

    <CallToAction />

  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
import DeviceCarousel from '~/components/DeviceCarousel.vue'
import FeatureList from '~/components/FeatureList.vue'
import HomeContent from '~/components/HomeContent.vue'
import CallToAction from '~/components/CallToAction.vue'

export default {
  metaInfo: {
    title: "Let's stop the spread of the Coronavirus together"
  },
  components: {
    Hero,
    DeviceCarousel,
    FeatureList,
    HomeContent,
    CallToAction
  }
}
</script>

<page-query>
query HomePage {
  contentfulPage(id: "4hWifiNXmiEfiv2NFxI1R3") {
    id,
    title,
    date,
    name,
    content
  }
}
</page-query>