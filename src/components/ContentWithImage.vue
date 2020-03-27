<template>
  <section
    class="section content-with-image"
    :class="{ alternateBackground: alternateBackground }"
  >
    <div class="container">
      <div
        class="columns is-variable is-8"
        :class="{ rowReverse: imagePushed }"
      >
        <div class="column content-with-image__content">
          <h2 class="title is-1">
            <slot name="heading"></slot>
          </h2>
          <div class="content-with-image__body-text">
            <slot name="body-text"></slot>
          </div>
          <div class="content-with-image__link">
            <slot name="link"> </slot>
            <b-icon size="is-small" icon="arrow-right"></b-icon>
          </div>
        </div>
        <div class="column content-with-image__image-container">
          <div class="content-with-image__image image is-square">
            <slot name="image"></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // Set to true if you want image to be pushed to the right
    imagePushed: Boolean,
    alternateBackground: Boolean
  },
  data: function() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 9rem;
  padding-bottom: 9rem;
}

.columns {
  align-items: center;
  display: flex;
  flex-direction: column-reverse;

  @include from($desktop) {
    padding-bottom: 0;
    flex-direction: row;
  }
}

.rowReverse {
  @include from($desktop) {
    flex-direction: row-reverse;
  }
}

.content-with-image {
  .title {
    margin-bottom: 0;
  }

  &__body-text {
    padding-top: 4rem;
    padding-bottom: 1rem;

    p {
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
      line-height: 1.6;
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
    padding-bottom: 6rem;

    @include from($desktop) {
      padding-bottom: 0;
    }
  }

  &__image {
    border-radius: 6px;
    overflow: hidden;
    @include box_shadow(2);

    img {
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
