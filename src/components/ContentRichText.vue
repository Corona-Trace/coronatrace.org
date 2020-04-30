<template>

  <section class="section">
    <div class="container">
      <RichText :text="$attrs.block.Content"></RichText>
    </div>
  </section>

</template>

<script>
import RichText from '~/components/RichText.vue'

export default {
  components: {
    RichText
  }
}
</script>

<style>
</style>