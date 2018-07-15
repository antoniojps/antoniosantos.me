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
    }
  },
  mounted() {
    const animation = lottie.loadAnimation({
      container: this.$refs.elAnim,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: this.animData
    })

    animation.setSpeed(4);
    animation.play();
  }
}
</script>
