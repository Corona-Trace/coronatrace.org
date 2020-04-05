<template>
  <section class="section how-it-works home-section">
    <div class="container">
      <div class="columns">
        <div class="column how-it-works__device-container">
          <div class="iphone">
            <iPhone />
            <b-carousel
              class="iphone__image"
              @change="carouselChange"
            >
              <b-carousel-item
                v-for="(item, i) in $static.allContentfulHowItWorksCarousel
                  .edges"
                :key="i"
              >
                <g-image :src="item.node.image.file.url"></g-image>
              </b-carousel-item>
            </b-carousel>
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
          <div class="how-it-works__indicator">

            <span
              class="current-item"
              v-text="activeCarouselItem + 1"
            ></span>
            <div class="indicator__container">
              <div
                v-for="(n,index) in totalCarouselItems"
                class="indicator__item"
                :data-index="index"
                :class="{ active: index <= activeCarouselItem}"
              ><svg
                  height="2"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  class="indicator"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="16"
                    y2="0"
                  />
                </svg>
              </div>
            </div>
            <span
              class="total-items"
              v-text="totalCarouselItems"
            ></span>
            <b-icon icon="arrow-left-drop-circle-outline"></b-icon>
            <b-icon icon="arrow-right-drop-circle-outline"></b-icon>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import iPhone from '~/assets/images/iPhone.svg'
import Slider1 from '~/assets/images/slider-1.svg'

export default {
  components: {
    iPhone,
    Slider1
  },
  data() {
    return {
      activeCarouselItem: 1
    }
  },
  methods: {
    carouselChange(itemNumber) {
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
  allContentfulHowItWorksCarousel {
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
  &__device-container {
    display: flex;
    justify-content: center;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
      font-size: 1.5rem;
      color: #666666;
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
  &__container {
    display: flex;
  }

  &__item {
    display: flex;
    align-items: center;

    line {
      stroke: $black;
      stroke-width: 2;
    }

    &.active {
      line {
        stroke-width: 4;
      }
    }
  }
}
</style>