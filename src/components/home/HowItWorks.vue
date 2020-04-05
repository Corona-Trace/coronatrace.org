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
          <div class="how-it-works__controls">

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
      activeCarouselItem: 0
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
    align-items: center;
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
</style>