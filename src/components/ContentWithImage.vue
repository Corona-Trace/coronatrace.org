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
        <div class="column content-with-image__content is-5">
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
        <div class="column content-with-image__image-container is-7">
          <div class="content-with-image__image">
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
}

.rowReverse {
  flex-direction: row-reverse;
}

.alternateBackground {
  background-color: $blue-light;
}

.content-with-image {
  .title {
    margin-bottom: 0;
  }

  &__body-text {
    padding-top: 4rem;
    padding-bottom: 1rem;

    p {
      margin-bottom: 1rem;
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

  &__image {
    border-radius: 6px;
    height: 600px;
    width: 600px;
    overflow: hidden;
    @include box_shadow(2);
  }
}
</style>
