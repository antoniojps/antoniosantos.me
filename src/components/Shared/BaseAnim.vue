<template>
  <div ref="elAnim" />
</template>

<script>
import lottie from 'lottie-web'

export default {
  props: {
    animData: {
      required: true,
      type: Object
    },
    autoplay: {
      default: false,
      type: Boolean
    },
    loop: {
      default: false,
      type: Boolean
    },
    speed: {
      default: 1,
      type: Number
    }
  },
  mounted() {
    const animation = lottie.loadAnimation({
      container: this.$refs.elAnim,
      renderer: 'svg',
      loop: this.loop,
      autoplay: this.autoplay,
      animationData: this.animData
    })

    animation.setSpeed(this.speed);
    animation.play();
  }
}
</script>
