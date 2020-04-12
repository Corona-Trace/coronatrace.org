<template>
  <div class="email-signup__email-form">
    <div class="email-signup__heading">
      <h3 class="title">Learn When TraceToZero
        Is Available</h3>
      <p class="subtitle">TraceToZero is not yet available, but we’re launching soon! Enter your email addrress to get notified when we do.</p>
    </div>
    <div class="email-signup__form">
      <b-field label-position="inside">
        <b-input
          type="email"
          placeholder="Enter Your Email"
          v-model="formData.email"
        >
        </b-input>
      </b-field>
      <b-field>
        <b-select
          placeholder="Select Your Current State"
          v-model="formData.selectedState"
          :expanded="true"
        >
          <option v-for="state in states">
            {{ state.name }}
          </option>
        </b-select>
      </b-field>
      <div>
        <b-button
          class="is-primary"
          expanded
          :disabled="!formData.email || !formData.selectedState"
          @click="subscribe"
          :loading="isLoading"
        >SIGN UP</b-button>
        <div class="email-signup__privacy-message">Don’t worry, we won’t share your email address with any third-parties.</div>
      </div>

    </div>
  </div>

</template>

<script>
import states from '~/helpers/us-states.json'
import axios from 'axios'
import https from 'https'

export default {
  data() {
    return {
      formData: {
        email: null,
        selectedState: null
      },
      isLoading: false
    }
  },
  computed: {
    states() {
      return states
    }
  },
  methods: {
    subscribe() {
      const formData = this.formData
      this.isLoading = true

      axios({
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url: '/.netlify/functions/subscribe',
        data: formData
      })
        .then(function(response) {
          console.log(response.data)
        })
        .catch(function(error) {
          console.log(error)
        })
        .finally(() => {
          this.isLoading = false
          this.$emit('advance-form')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.email-signup {
  &__privacy-message {
    font-size: 0.75rem;
    text-align: center;
    margin-top: 0.5rem;
  }
}
</style>