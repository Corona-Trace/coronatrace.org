<template>
  <Layout>
    <Hero />

    <HowItWorks />

    <HomeContent />
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
import HowItWorks from '~/components/HowItWorks.vue'
import HomeContent from '~/components/HomeContent.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Hero,
    HowItWorks,
    HomeContent
  }
}
</script>
