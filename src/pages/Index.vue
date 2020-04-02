<template>
  <Layout>
    <Hero />

    <HowItWorks />

    <HomeContent />

    <HomeCallToAction />
  </Layout>
</template>

<script>
import Hero from '~/components/home/Hero.vue'
import HowItWorks from '~/components/home/HowItWorks.vue'
import HomeContent from '~/components/home/HomeContent.vue'
import HomeCallToAction from '~/components/home/HomeCallToAction.vue'

export default {
  metaInfo: {
    title: "Let's stop the spread of the Coronavirus together"
  },
  components: {
    Hero,
    HowItWorks,
    HomeContent,
    HomeCallToAction
  }
}
</script>
