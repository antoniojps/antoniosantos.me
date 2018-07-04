<template>
        <div class="loadingScreen__img"></div>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
  name: 'LoadingLogo',
  data() {
    return {};
  },
  mounted() {
    // eslint-disable-next-line
    let anim = TweenMax.to(".loadingScreen__img", 1, {repeat: -1,backgroundPositionY: "-291px",ease: SteppedEase.config(6)});
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/styles.scss";

.loadingScreen__img {
  width: 280px;
  height: 50px;
  background-image: url("../../assets/imgs/loading.jpg");
  overflow: hidden;
}
</style>
