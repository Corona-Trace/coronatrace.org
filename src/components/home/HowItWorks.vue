<template>
  <section class="section how-it-works home-section alternateBackground">
    <div class="container">
      <div class="columns how-it-works__carousel-container">

        <div class="column how-it-works__device-container">
          <div class="how-it-works__device-inner-container">
            <div class="iphone">
              <iPhone />

              <b-carousel
                class="iphone__image"
                @change="carouselChange"
                :indicator="false"
                :arrow="false"
                :interval="5000"
                ref="hiwCarousel"
              >
                <b-carousel-item
                  v-for="(item, i) in $static.allContentfulHowItWorksCarousel
                  .edges"
                  :key="i"
                >
                  <v-lazy-image
                    :src="item.node.image.file.url"
                    :alt="item.node.image.title"
                    src-placeholder="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  />
                </b-carousel-item>
              </b-carousel>
            </div>

            <div class="indicator__container indicator__container-mobile is-hidden-desktop">

              <b-icon
                icon="chevron-left"
                @click.native="prev"
                class="carousel-control is-hidden-desktop"
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
                class="carousel-control is-hidden-desktop"
                size="is-large"
              ></b-icon>
            </div>
          </div>
        </div>

        <div class="column how-it-works__body">
          <div class="how-it-works__heading">
            <h2>How It Works</h2>
            <h3 class="title is-3">
              {{ $static.allContentfulHowItWorksCarousel.edges[activeCarouselItem].node.heading }}
            </h3>
            <p class="text">
              {{ $static.allContentfulHowItWorksCarousel.edges[activeCarouselItem].node.text }}
            </p>
          </div>
          <div class="how-it-works__indicator indicator is-hidden-touch">
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
    currentHeading() {
      const carousel = $static.allContentfulHowItWorksCarousel
      const i = this.activeCarouselItem
      const heading =
        $static.allContentfulHowItWorksCarousel.edges[i].node.heading
      return heading
    },
    totalCarouselItems() {
      const length = this.$static.allContentfulHowItWorksCarousel.edges.length
      return length
    }
  }
}
</script>

<static-query>
query HowItWorksCarousel {
  allContentfulHowItWorksCarousel(sortBy: "order", order: ASC) {
    edges {
      node {
        id,
        title,
        heading,
        text,
        image {
          title,
          file {
            url
          }
        }
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.how-it-works {
  padding-top: 8rem;
  padding-bottom: 8rem;

  &__carousel-container {
    display: flex;
    flex-direction: column-reverse;

    @include from($desktop) {
      flex-direction: row;
    }
  }

  &__device-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 2 rem;

    @include until($desktop) {
      flex: 1 0 auto;
    }

    @include from($desktop) {
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
    justify-content: center;

    @include until($desktop) {
      flex: 1 0 auto;
    }
  }

  &__heading {
    display: flex;
    flex-direction: column;

    h2 {
      padding: 0.25rem 1rem;
      color: $green;
      background-color: $green-light;
      border-radius: 50px;
      width: fit-content;
      margin-bottom: 1rem;
      margin-top: 0.5rem;
    }

    p.text {
      font-size: 1.25rem;
      color: #666666;

      @include from($desktop) {
        font-size: 1.5rem;
        color: #666666;
      }
    }
  }

  &__indicator {
    display: flex;
  }
}

.iphone {
  position: relative;

  &__image {
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

    @include from($desktop) {
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