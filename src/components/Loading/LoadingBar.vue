<template>
    <div class="loadingScreen__bar marginVertLarge">
            <div class="loadingScreen__bar--percentage" ref="bar"></div>
        </div>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
  name: 'LoadingBar',
  props: {
    percentage: {
      required: false,
      default: 0
    }
  },
  methods: {
    animBar() {
      TweenMax.to(this.$refs.bar, 1, { width: `${this.percentage}%` });
    }
  },
  mounted() {
    this.animBar();
  },
  watch: {
    percentage() {
      this.animBar();
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/styles.scss";

.loadingScreen {
  &__bar {
    position: relative;
    width: 200px;
    height: 2px;
    background-color: $colorBase6;
    &--percentage {
      position: absolute;
      height: inherit;
      width: 0%;
      background-color: $colorBase;
    }
  }
}
</style>
