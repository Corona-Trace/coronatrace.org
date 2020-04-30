<template>
  <section
    class="content-two-logos section"
    :style="{ 'background-color': bgColor }"
  >
    <div class="container">
      <div class="columns is-variable is-8-desktop">
        <div class="column content-two-logos__logos is-6-tablet is-6-desktop">
          <h3 class="content-two-logos__heading-tag heading-tag">{{ $attrs.block.HeadingTag }}</h3>
          <div class="content-two-logos__logos-container">
            <div class="content-two-logos__logo-item">
              <v-lazy-image
                :src="$attrs.block.logo1"
                src-placeholder="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </div>
            <div class="content-two-logos__logo-item">
              <v-lazy-image
                :src="$attrs.block.logo2"
                src-placeholder="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </div>
          </div>
        </div>
        <div class="column about__partners-text is-6-tablet is-6-desktop">
          <div class="content-two-logos__heading">
            <h2 class="title section-title">{{ $attrs.block.Heading }}</h2>
          </div>
          <div class="content-two-logos__copy">
            <RichText :text="$attrs.block.Text"></RichText>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import VLazyImage from 'v-lazy-image'
import RichText from '~/components/RichText.vue'

export default {
  components: {
    VLazyImage,
    RichText
  },
  computed: {
    bgColor() {
      const color = this.$attrs.block.BackgroundColor

      if (color == 'white') {
        return '#fff'
      } else if (color == 'off-white') {
        return '#f7f9f8'
      } else if (color == 'gray') {
        return '#e6edeb'
      } else {
        return '#fff'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content-two-logos {
  .columns {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;

    @include from($tablet) {
      flex-direction: row;
      text-align: left;
    }
  }

  &__heading-tag {
    @include heading_tag($gray-logo);
  }

  &__logos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__logos-container {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    @include from($desktop) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__logo-item {
    margin: 1rem 0;
    padding: 3rem;
    height: 14rem;
    width: 14rem;
    border-radius: 50%;
    background-color: $white;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @include from($desktop) {
      margin: 0 1rem;
    }

    img {
      width: 100%;
      height: auto;
      margin: auto;
    }
  }
}
</style>