<template>
  <section
    class="section device-carousel primary-section alternateBackgroundLight"
    v-editable="blok"
  >
    <div class="container">
      <div class="columns device-carousel__carousel-container">

        <div class="column device-carousel__device-container">
          <div class="device-carousel__device-inner-container">
            <g-image
              src="~/assets/images/hiw-blob.svg"
              width="458"
              height="488"
              class="iphone__blob is-hidden-mobile"
            ></g-image>

            <div class="iphone">
              <g-image
                width="318"
                height="616"
                src="~/assets/images/iPhone.svg"
                class="iphone__device"
              >
              </g-image>

              <b-carousel
                class="iphone__image"
                @change="carouselChange"
                :indicator="false"
                :arrow="false"
                :interval="5000"
                ref="hiwCarousel"
              >
                <b-carousel-item
                  v-for="(item, i) in blok.CarouselItems"
                  :key="i"
                >
                  <v-lazy-image
                    :src="item.Image"
                    src-placeholder="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  />
                </b-carousel-item>
              </b-carousel>
            </div>

            <div class="indicator__container indicator__container-mobile is-hidden-tablet">

              <b-icon
                icon="chevron-left"
                @click.native="prev"
                class="carousel-control is-hidden-tablet"
                size="is-large"
              ></b-icon>
              <div>
                <span
                  class="current-item"
                  v-text="activeCarouselItem + 1"
                ></span>
                <div class="indicator__progress">
                  <b-progress
                    size="is-small"
                    :value="((activeCarouselItem + 1) / totalCarouselItems) * 100"
                  ></b-progress>
                </div>
                <span
                  class="total-items"
                  v-text="totalCarouselItems"
                ></span>
              </div>
              <b-icon
                icon="chevron-right"
                @click.native="next"
                class="carousel-control is-hidden-tablet"
                size="is-large"
              ></b-icon>
            </div>
          </div>
        </div>

        <div class="column device-carousel__body">
          <div class="device-carousel__heading">
            <h2>{{ blok.HeadingTag }}</h2>
            <h3 class="title section-title">
              {{ blok.CarouselItems[activeCarouselItem].Heading }}
            </h3>
            <p class="text">
              {{ blok.CarouselItems[activeCarouselItem].Text }}
            </p>
          </div>
          <div class="device-carousel__indicator indicator is-hidden-mobile">
            <div class="indicator__container">
              <span
                class="current-item"
                v-text="activeCarouselItem + 1"
              ></span>
              <div class="indicator__progress">
                <b-progress
                  size="is-small"
                  :value="((activeCarouselItem + 1) / totalCarouselItems) * 100"
                ></b-progress>
              </div>
              <span
                class="total-items"
                v-text="totalCarouselItems"
              ></span>
            </div>
            <div class="indicator__controls">
              <b-icon
                class="carousel-control"
                @click.native="prev"
                icon="arrow-left-drop-circle-outline"
                size="is-medium"
              ></b-icon>
              <b-icon
                icon="arrow-right-drop-circle-outline"
                @click.native="next"
                class="carousel-control"
                size="is-medium"
              ></b-icon>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import iPhone from '~/assets/images/iPhone.svg'
import VLazyImage from 'v-lazy-image'

export default {
  props: ['blok'],
  components: {
    iPhone,
    VLazyImage
  },
  data() {
    return {
      activeCarouselItem: 1
    }
  },
  methods: {
    next: function() {
      this.$refs.hiwCarousel.next()
    },
    prev: function() {
      this.$refs.hiwCarousel.prev()
    },
    carouselChange: function(itemNumber) {
      this.activeCarouselItem = itemNumber
    }
  },
  computed: {
    totalCarouselItems() {
      const length = this.blok.CarouselItems.length
      return length
    }
  }
}
</script>

<style lang="scss" scoped>
.device-carousel {
  &__carousel-container {
    display: flex;
    flex-direction: column-reverse;

    @include from($tablet) {
      flex-direction: row;
    }
  }

  &__device-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 2rem;

    @include until($tablet) {
      flex: 1 0 auto;
    }

    @include from($tablet) {
      padding-top: 0;
    }
  }

  &__device-inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;

    @include until($tablet) {
      flex: 1 0 auto;
    }
  }

  &__heading {
    display: flex;
    flex-direction: column;

    h2 {
      @include heading_tag($green);
    }

    .section-title {
      @include set_type(2.5rem);
    }

    p.text {
      @include set_type(1.125rem);
      color: $gray-dark;

      @include from($tablet) {
        @include set_type(1.25rem);
        color: $gray-dark;
      }
    }
  }

  &__indicator {
    display: flex;
  }
}

.iphone {
  position: relative;
  z-index: 20;
  opacity: 0.99;

  &__device {
    display: flex;
  }

  &__blob {
    position: absolute;
    z-index: 10;
    top: -6rem;
  }

  &__image {
    z-index: 30;
    position: absolute;
    top: 20px;
    right: 0;
    left: 40px;
    bottom: 0;
  }
}

.indicator {
  padding-top: 2rem;

  &__container {
    display: flex;
    align-items: center;
    padding-top: 1rem;

    @include from($tablet) {
      padding-top: 0;
    }

    span {
      font-size: 1.25rem;
    }

    &-mobile {
      justify-content: space-between;
      width: 100%;

      > div {
        display: flex;
      }
    }
  }

  &__progress {
    padding: 0 0.75rem;
    width: 10rem;
  }

  &__controls {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;

    .icon {
      margin: 0 0.125rem;
    }
  }
}

.carousel-control {
  z-index: 10;
  cursor: pointer;
}
</style>