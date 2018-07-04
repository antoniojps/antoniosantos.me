<template>
    <div class="loadingScreen">
        <LoadingLogo/>
        <LoadingBar percentage="50"/>
    </div>
</template>

<script>

import LoadingLogo from './LoadingLogo.vue';
import LoadingBar from './LoadingBar.vue';
// import {TweenMax} from 'gsap';


export default {
  name: 'LoadingScreen',
  components: {
    LoadingLogo,
    LoadingBar
  },
  props: {
    finished: {
      type: Boolean,
      default: false
    },
    percentage: {
      default: 0
    }
  }
}
</script>

<style lang="scss">
    @import "../../assets/scss/styles.scss";

    .loadingScreen{
        width:100%;
        height:100%;
        position:fixed;
        z-index:5;
        background-color:$colorWhite;
        top:0;
        left:0;
        display:flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;
    }


</style>
