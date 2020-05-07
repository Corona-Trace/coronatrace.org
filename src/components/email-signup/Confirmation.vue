<template>
  <div>
    <div class="email-signup__confirmation">
      <div class="email-signup__heading">
        <h3 class="title">Thanks!</h3>
        <p class="subtitle">We'll email you as soon as it's ready to download.</p>
      </div>
      <div class="email-signup__form">
        <b-button
          class="is-primary"
          expanded
          @click="$emit('close-modal')"
        >SOUNDS GOOD</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>