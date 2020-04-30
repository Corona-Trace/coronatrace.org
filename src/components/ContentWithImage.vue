<template>
  <section
    class="section content-with-image primary-section"
    :class="{ alternateBackgroundLight: $attrs.block.AlternateBackground }"
  >
    <div class="container">
      <div
        class="columns is-variable is-mobile-6 is-6-tablet is-8-desktop"
        :class="{ rowReverse: $attrs.block.AlignImageLeft }"
      >
        <div class="column content-with-image__content is-12-tablet is-6-desktop">
          <h3 :class="'content-with-image__heading-tag-' + tagColor">
            {{ $attrs.block.HeadingTag }}
          </h3>
          <h2 class="title section-title">
            {{ $attrs.block.Heading }}
          </h2>
          <div class="content-with-image__body-text">
            <RichText :text="$attrs.block.Text"></RichText>
          </div>
          <div class="content-with-image__link cta-link">
            <a
              :href="$attrs.block.LinkDestination"
              v-text="$attrs.block.LinkText"
              target="_blank"
            ></a>
            <b-icon
              size="is-small"
              icon="arrow-right"
              v-if="$attrs.block.LinkText"
            ></b-icon>
          </div>
        </div>
        <div class="column content-with-image__image-container is-12-tablet is-6-desktop">
          <div
            class="content-with-image__image image is-square"
            :class="{ imageBoxShadow: $attrs.block.ImageBoxShadow }"
          >
            <v-lazy-image
              :src="$attrs.block.Image"
              src-placeholder="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RichText from '~/components/RichText.vue'
import VLazyImage from 'v-lazy-image'

export default {
  props: {
    // Set to true if you want image to be pushed to the right
    imagePushed: Boolean,
    alternateBackground: Boolean,
    imageBoxShadow: Boolean
  },
  components: {
    RichText,
    VLazyImage
  },
  data: function() {
    return {}
  },
  computed: {
    tagColor() {
      if (this.$attrs.block.HeadingTagColor == 'orange') {
        return 'orange'
      } else if (this.$attrs.block.HeadingTagColor == 'red') {
        return 'red'
      } else if (this.$attrs.block.HeadingTagColor == 'gray') {
        return 'gray'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  overflow: hidden;

  @include until($desktop) {
    padding: 0;
  }
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
