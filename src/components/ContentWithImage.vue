<template>
  <section
    v-editable="blok"
    class="section content-with-image primary-section"
    :class="{ alternateBackgroundLight: blok.AlternateBackground }"
  >
    <div class="container">
      <div
        class="columns is-variable is-mobile-6 is-6-tablet is-8-desktop"
        :class="{ rowReverse: blok.AlignImageLeft }"
      >
        <div class="column content-with-image__content is-12-tablet is-6-desktop">
          <h3 :class="'content-with-image__heading-tag-' + tagColor">
            {{ blok.HeadingTag }}
          </h3>
          <h2 class="title section-title">
            {{ blok.Heading }}
          </h2>
          <div class="content-with-image__body-text">
            <RichText :text="blok.Text"></RichText>
          </div>
          <div class="content-with-image__link cta-link">
            <a
              :href="blok.LinkDestination"
              v-text="blok.LinkText"
              target="_blank"
            ></a>
            <b-icon
              size="is-small"
              icon="arrow-right"
              v-if="blok.LinkText"
            ></b-icon>
          </div>
        </div>
        <div class="column content-with-image__image-container is-12-tablet is-6-desktop">
          <div
            class="content-with-image__image image is-square"
            :class="{ imageBoxShadow: blok.ImageBoxShadow }"
          >
            <g-image
              :src="imageURL"
              width="1024"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RichText from '~/components/RichText.vue'

export default {
  props: {
    // Set to true if you want image to be pushed to the right
    imagePushed: Boolean,
    alternateBackground: Boolean,
    imageBoxShadow: Boolean,
    blok: Object
  },
  components: {
    RichText
  },
  data: function() {
    return {}
  },
  computed: {
    tagColor() {
      if (this.blok.HeadingTagColor == 'orange') {
        return 'orange'
      } else if (this.blok.HeadingTagColor == 'red') {
        return 'red'
      } else if (this.blok.HeadingTagColor == 'gray') {
        return 'gray'
      }
    },
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

<style lang="scss" scoped>
.section {
  overflow: hidden;
}

.columns {
  align-items: center;
  display: flex;
  flex-direction: column-reverse;

  @include from($desktop) {
    padding-bottom: 0;
    flex-direction: row;
    align-items: flex-start;
  }

  @include from($desktop) {
    align-items: center;
  }
}

.rowReverse {
  @include from($desktop) {
    flex-direction: row-reverse;
  }
}

.content-with-image {
  &__content {
    @include until($desktop) {
      padding: 4rem 2rem !important;
    }
  }

  .title {
    margin-bottom: 0;
  }

  &__body-text {
    padding-top: 4rem;
    padding-bottom: 1rem;

    p {
      margin-bottom: 1.5rem;
      @include set_type(1.2rem);
    }
  }

  &__link {
    a {
      font-size: 1.25rem;
      font-weight: bold;
      text-decoration: underline;
    }

    .icon {
      margin-left: 0.5rem;
      color: $blue;
    }
  }

  &__image-container {
    width: 100%;

    position: relative;

    @include from($desktop) {
      padding-bottom: 0;
    }
  }

  .imageBoxShadow {
    @include box_shadow(3);
  }

  &__image {
    @include from($desktop) {
      border-radius: 6px;
    }

    overflow: hidden;

    img {
      // object-fit: cover;
      // object-position: center;
      z-index: 20;
      object-fit: contain;
    }
  }

  .blob {
    position: absolute;
    z-index: 10;
    top: -3rem;
    left: -3rem;
  }

  &__heading-tag {
    &-red {
      @include heading_tag($red);
    }

    &-orange {
      @include heading_tag($orange);
    }

    &-gray {
      @include heading_tag($gray);
    }
  }
}
</style>
