<template>
  <Layout>
    <Hero />

    <HowItWorks />

    <HomeContent />

    <CallToAction />
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
import HowItWorks from '~/components/HowItWorks.vue'
import HomeContent from '~/components/HomeContent.vue'
import CallToAction from '~/components/CallToAction.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Hero,
    HowItWorks,
    HomeContent,
    CallToAction
  }
}
</script>
