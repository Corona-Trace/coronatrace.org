<template>
  <div class="email-signup__email-form">
    <div class="email-signup__heading">
      <h3 class="title">Learn When TraceToZero
        Is Available</h3>
      <p class="subtitle">TraceToZero is not yet available, but we’re launching soon! Enter your email addrress to get notified when we do.</p>
    </div>
    <div class="email-signup__form">
      <b-field
        label-position="inside"
        v-model="email"
      >
        <b-input
          type="email"
          placeholder="Enter Your Email"
        >
        </b-input>
      </b-field>
      <b-field>
        <b-select
          placeholder="Select Your Current State"
          v-model="selectedState"
          :expanded="true"
        >
          <option v-for="state in states">
            {{ state.name }}
          </option>
        </b-select>
      </b-field>
      <b-button
        class="is-primary"
        expanded
      >SIGN UP</b-button>
    </div>
  </div>

</template>

<script>
import states from '~/helpers/us-states.json'

export default {
  data() {
    return {
      email: null,
      selectedState: null
    }
  },
  computed: {
    states() {
      return states
    }
  }
}
</script>

<style>
</style>