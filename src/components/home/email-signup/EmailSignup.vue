<template>
  <div class="email-signup">
    <div class="email-signup__container-outer">
      <div class="email-signup__container-inner">
        <email-form
          v-if="currentStep == 1"
          v-on:advance-form="advanceForm"
        ></email-form>
        <confirmation
          v-if="currentStep == 2"
          v-on:close-modal="closeModal"
        ></confirmation>
      </div>
    </div>
  </div>

</template>

<script>
import EmailForm from '~/components/home/email-signup/EmailForm.vue'
import Confirmation from '~/components/home/email-signup/Confirmation.vue'

export default {
  components: {
    EmailForm,
    Confirmation
  },
  data() {
    return {
      currentStep: 1
    }
  },
  methods: {
    advanceForm() {
      this.currentStep++
    },
    closeModal() {
      this.$parent.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-content {
  overflow: visible;
}

.email-signup {
  &__container-outer {
    max-width: 720px;
    margin: auto;

    @include from($tablet) {
      padding: 2rem;
    }
  }

  &__container-inner {
    background-color: $white;

    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
  }

  &__heading {
    .title {
      font-size: 2.125rem;
      font-weight: 500;
      margin-bottom: 2rem;

      @include from($desktop) {
        font-size: 3rem;
      }
    }

    .subtitle {
      font-size: 1rem;
    }
  }

  &__form {
    input {
      background-color: #f6f6f6;
    }
  }
}
</style>