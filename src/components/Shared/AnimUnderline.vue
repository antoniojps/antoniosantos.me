<template>
  <div @mouseover="animIn" @mouseout="animOut" class="anim-underline__wrapper pointer">
    <slot class="anim-underline__span" ></slot>
    <div class="anim-underline">
      <div class="anim-underline__line" ref="underline"/>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap'

export default {
  name: 'AnimUnderline',
  methods: {
    animIn() {
      const line = this.$refs.underline
      TweenLite.to(line, 0.4, { width: '100%' })
    },
    animOut() {
      const line = this.$refs.underline
      TweenLite.to(line, 0.4, { width: '0%' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";

  .anim-underline {
    height:1px;
    width:100%;
    position:relative;
    padding: $spacingXSmall/2 0 $spacingXSmall 0;
    &__line{
      position:absolute;
      top:0;
      left:0;
      width:0%;
      height:1px;
      background-color: rgba($colorBase5,0.7);
    }
    &__wrapper{
      width: fit-content;
    }
  }
</style>
