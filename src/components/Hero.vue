<template>
  <section
    class="section hero"
    v-editable="blok"
  >
    <div class="container">
      <div class="columns hero__columns">
        <div class="column is-7-tablet is-7-desktop hero__left">
          <div class="hero__text">
            <RichText :text="blok.Heading"></RichText>
            <RichText :text="blok.SubHeading"></RichText>
          </div>
          <div class="hero__cta">
            <JoinWaitlist />
          </div>
        </div>
        <div class="column is-5-tablet is-5-desktop hero__right">

          <g-image
            :src="imageURL"
            class="hero__image"
            width="800"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RichText from '~/components/RichText.vue'
import JoinWaitlist from '~/components/JoinWaitlist.vue'

export default {
  props: ['blok'],
  components: {
    RichText,
    JoinWaitlist
  },
  computed: {
    imageURL() {
      if (typeof this.blok.Image === 'string') {
        return this.blok.Image
      }

      const path = this.blok.Image.path
      return require('!!assets-loader?width=800&quality=100&fit=inside!~/' +
        path)
    }
  }
}
</script>

<style lang="scss">
.hero {
  padding-top: 4rem;
  padding-bottom: 4rem;

  @include from($tablet) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @include from($desktop) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @include from($fullhd) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  &__columns {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;

    @include from($tablet) {
      flex-direction: row;
      align-items: center;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 4rem;

    @include until($desktop) {
      flex: 1 auto;
    }

    @include from($desktop) {
      padding-bottom: 0;
    }
  }

  &__text {
    .title {
      @include set_type(2.5rem, 'sm');

      @include from($tablet) {
        @include set_type(3.25rem, 'sm');
      }

      @include from($desktop) {
        @include set_type(3.75rem, 'sm');
      }

      @include from($widescreen) {
      }

      @include from($fullhd) {
        @include set_type(4.25rem, 'sm');
      }
    }

    .subtitle {
      display: block;

      @include set_type(1.15rem);
      padding: 2rem 0 3rem;
      margin: 0;

      @include from($tablet) {
        @include set_type(1.25rem);
      }

      @include from($desktop) {
        padding-right: 6rem;
      }

      @include from($fullhd) {
        padding-right: 13rem;
      }
    }
  }

  &__cta {
    display: flex;
    flex-direction: column;

    @include from($desktop) {
      flex-direction: row;
    }

    .button {
      display: flex;
      justify-content: center;
      width: 100%;
      font-size: 1.25rem;
      margin: 0.5rem 0;

      @include from($tablet) {
        width: auto;
      }

      &.is-primary {
        @include box_shadow(2);

        @include from($desktop) {
          margin-right: 1rem;
        }
      }
    }
  }

  &__right {
    position: relative;
    overflow: visible !important;

    @include until($desktop) {
      flex: 1 auto;
    }

    @include from($desktop) {
      width: auto;
      height: auto;
      overflow: hidden;
    }
  }
  .notification {
    @include box_shadow(3);
  }
}

.email-signup-modal {
  .modal-content {
    overflow: visible;
  }
}
</style>
