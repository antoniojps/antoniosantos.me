<template>
  <main>
    <div v-if="landingPage" class="page page--landingPage">
      <slot />
    </div>

    <div v-else class="page">
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  props: {
    landingPage: {
      type: Boolean,
      default: false,
    }
  }
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';
.page {
  padding: $spacingSmall $spacingBase;
  @include screen(md) {
    padding: $spacingBase;
  }
  @extend .row;

  &--landingPage {
    height: 100vh;
    display: flex;
    flex-direction: column;
    & > div {
      flex: 1;
    }
  }
}
</style>
