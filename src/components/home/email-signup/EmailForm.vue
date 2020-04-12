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
      <b-button
        class="is-primary"
        expanded
        :disabled="!formData.email || !formData.selectedState"
        @click="subscribe"
      >SIGN UP</b-button>
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
        email: 'phjohnson08@gmail.com',
        selectedState: 'Texas'
      }
    }
  },
  computed: {
    states() {
      return states
    }
  },
  methods: {
    subscribe() {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

      const formData = this.formData

      const instance = axios.create({
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      })
      instance.post('https://localhost:9000/.netlify/functions/subscribe')
    }
  }
}
</script>

<style>
</style>