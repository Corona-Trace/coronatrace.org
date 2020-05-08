<template>
  <section
    class="content-two-logos section"
    :style="{ 'background-color': bgColor }"
    v-editable="blok"
  >
    <div class="container">
      <div class="columns is-variable is-8-desktop">
        <div class="column content-two-logos__logos is-6-tablet is-6-desktop">
          <h3 class="content-two-logos__heading-tag heading-tag">{{ blok.HeadingTag }}</h3>
          <div class="content-two-logos__logos-container">
            <div class="content-two-logos__logo-item">
              <g-image
                :src="blok.logo1"
                width="128"
              />
            </div>
            <div class="content-two-logos__logo-item">
              <g-image
                :src="blok.logo2"
                width="128"
              />
            </div>
          </div>
        </div>
        <div class="column about__partners-text is-6-tablet is-6-desktop">
          <div class="content-two-logos__heading">
            <h2 class="title section-title">{{ blok.Heading }}</h2>
          </div>
          <div class="content-two-logos__copy">
            <RichText :text="blok.Text"></RichText>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import RichText from '~/components/RichText.vue'

export default {
  props: ['blok'],
  components: {
    RichText
  },
  computed: {
    bgColor() {
      const color = this.blok.BackgroundColor

      if (color == 'white') {
        return '#fff'
      } else if (color == 'off-white') {
        return '#f7f9f8'
      } else if (color == 'gray') {
        return '#e6edeb'
      } else {
        return '#fff'
      }
    },
    logoURL1() {
      if (typeof this.blok.logo1 === 'string') {
        return this.blok.logo1
      }

      const path = this.blok.logo1.path
      return require('!!assets-loader?width=800&quality=100&fit=inside!~/' +
        path)
    },
    logoURL1() {
      if (typeof this.blok.logo2 === 'string') {
        return this.blok.logo2
      }

      const path = this.blok.logo2.path
      return require('!!assets-loader?width=800&quality=100&fit=inside!~/' +
        path)
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