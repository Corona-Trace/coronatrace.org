<template>
  <div class="email-signup__email-form">
    <div class="email-signup__heading">
      <h3 class="title">Learn When TraceToZero
        Is Available</h3>
      <p class="subtitle">TraceToZero is not yet available, but we’re launching soon! Enter your email addrress to get notified when we do.</p>
    </div>
    <div class="email-signup__error">
      <b-message
        :title="error.title"
        type="is-danger"
        aria-close-label="Close message"
        v-if="error.status"
        @close="clearError"
      >
        {{ error.detail }}
      </b-message>
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
          <option
            v-for="state in states"
            :value="state.abbreviation"
          >
            {{ state.name }}
          </option>
        </b-select>
      </b-field>
      <div>
        <b-button
          class="is-primary"
          expanded
          :disabled="(!formData.email || !formData.selectedState)"
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
      isLoading: false,
      error: {}
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
        .then(response => {
          console.log(response)
          if (response.data.status == 'Error') {
            console.error('Error!')
            this.error.status = response.data.status
            this.error.title = response.data.title
            this.error.detail = response.data.detail
          } else {
            this.$emit('advance-form')
            this.$ga.event('Wait List', 'Signup')
          }
        })
        .catch(error => {
          console.log(error)
          this.error.status = 'Error'
          this.error.title = 'Oops! Something went wrong'
          this.error.detail = 'Please refresh the page and try again.'
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    clearError() {
      this.error = {}
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

  .message {
    margin-bottom: 1rem;
  }
}
</style>