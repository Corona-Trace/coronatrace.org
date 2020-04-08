<template>
  <div class="layout">

    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>

  </div>
</template>

<style lang="scss">
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
