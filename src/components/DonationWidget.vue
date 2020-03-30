<template>
    <div class="container container__large-margins donate__widget">
      <div class="columns">
        <div class="column">
          <div class="donate__widget-heading">
            <h2 class="title is-4">How much would you like to give?</h2>
            <p class="subtitle">
              The more you give, the faster we can’t launch this effort to the
              public.
            </p>
          </div>
          <div class="widget">
            <div class="widget__note">
              Select the amount you would like to donate:
            </div>
            <div class="columns is-multiline widget__wrapper">

                <div 
                    v-for="amount in donationAmounts"
                    class="column donation-selector"
                    :class="{ selected: donationAmountSelected == amount }"
                    data-amount="5"
                    @click="setDonationAmount(amount)">
                    ${{ amount }}
                </div>

                <b-button 
                  class="donation-selector" 
                  @click="setDonationAmount('Other Amount')" 
                  :class="{ selected: donationAmountSelected == 'Other Amount' }">
                  Other Amount
                </b-button>

                <b-field v-show="donationAmountSelected == 'Other Amount'" label-position="on-border" label="Other Amount" class="donation-input-container">
                    <b-input
                    class="donation-input"
                    placeholder="Numeral"
                    v-cleave="masks.numeral"
                    v-model="customDonationAmount"
                    custom-class="donation-currency-input">
                    </b-input>
                </b-field>

              </div>
            </div>

            <div class="widget__cta">
              <b-button 
                type="is-primary"
                icon-left="lock-outline"
                size="is-large" expanded>
                COMPLETE DONATION
              </b-button>
              <PoweredByStripe />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { Money } from 'v-money'
import Cleave from 'cleave.js'
import PoweredByStripe from '~/assets/images/PoweredByStripe.svg'

const cleave = {
  name: 'cleave',
  bind(el, binding) {
    const input = el.querySelector('input')
    input._vCleave = new Cleave(input, binding.value)
  },
  unbind(el) {
    const input = el.querySelector('input')
    input._vCleave.destroy()
  }
}

export default {
  directives: { cleave },
  components: { PoweredByStripe },
  data: function() {
    return {
      donationAmounts: [5, 10, 20, 50, 100, 250, 500],
      donationAmountSelected: 20,
      customDonationAmountRaw: null,
      customDonationAmount: null,
      masks: {
        creditCard: { creditCard: true },
        numeral: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          prefix: '$ '
        },
        custom: {
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
          numericOnly: true
        }
      }
    }
  },
  methods: {
    setDonationAmount(amount) {
      this.donationAmountSelected = amount
    },
    onInput(event) {
      this.customDonationAmountRaw = event.target._vCleave.getRawValue()
      this.customDonationAmount = event.target._vCleave.getFormattedValue()
    }
  }
}
</script>

<style lang="scss" scoped>
.widget {
  &__wrapper {
    margin-top: 0.5rem;
  }

  &__cta {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      justify-content: center;
      @include box_shadow(1);
      margin-bottom: 1rem;
    }
  }
}

.donation-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid $blue;
  border-radius: 6px;
  margin: 0.25rem;
  color: $blue;
  font-weight: bold;
  cursor: pointer;
  padding: 0.75rem;
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.5rem;
  flex: 1 0 47%;
  background-color: transparent;
  width: 100%;

  &::placeholder {
    color: $blue;
    line-height: 1.5rem;
  }

  &:hover {
    background-color: lighten($blue, 30%);
    border: 2px solid $blue;
  }

  &.selected {
    background-color: $blue;
    color: $white;
  }
}

.donation-input-container {
  width: 100%;
  margin: 0.5rem 0.25rem;

  .donation-input {
    border: 2px solid $blue !important;
    border-radius: 6px;

    > * {
      color: #313ebd;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
}
</style>