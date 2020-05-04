<template>
  <section
    class="section content-three-col"
    :style="{ 'background-color': bgColor }"
  >
    <div class="content-three-col__heading">
      <h3 class="content-three-col__heading-tag heading-tag">{{ blok.HeadingTag }}</h3>
    </div>
    <div class="content-three-col__body columns is-variable is-8">
      <div
        v-for="col in blok.Columns"
        class="column is-3"
      >
        <h4 class="title is-4">{{ col.Heading }}</h4>
        <div class="content-three-col__text">
          {{ col.Content }}
        </div>
      </div>
    </div>
    <h4 class="title">{{ blok.ClosingTitle }}</h4>
  </section>
</template>

<script>
export default {
  props: ['blok'],
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
    }
  }
}
</script>

<style lang="scss" scoped>
.content-three-col {
  text-align: center;
  background-color: $off-white;

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__heading-tag {
    @include heading_tag($trace-green);
  }

  &__body {
    display: flex;
    flex-direction: column;

    @include from($tablet) {
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>