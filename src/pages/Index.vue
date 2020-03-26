<template>
  <Layout>

    <Hero />

    <HowItWorks />


  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
import HowItWorks from '~/components/HowItWorks.vue'

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    Hero,
    HowItWorks
  }
}
</script>


