<template>
  <Layout>
    <Hero />

    <HowItWorks />

    <GetStarted />

    <HomeContent />

    <HomeCallToAction />
  </Layout>
</template>

<script>
import Hero from '~/components/home/Hero.vue'
import HowItWorks from '~/components/home/HowItWorks.vue'
import GetStarted from '~/components/home/GetStarted.vue'
import HomeContent from '~/components/home/HomeContent.vue'
import HomeCallToAction from '~/components/home/HomeCallToAction.vue'

export default {
  metaInfo: {
    title: "Let's stop the spread of the Coronavirus together"
  },
  components: {
    Hero,
    HowItWorks,
    GetStarted,
    HomeContent,
    HomeCallToAction
  }
}
</script>
