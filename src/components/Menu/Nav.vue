<template>
  <div class="nav">
    <div class="nav__btn" @click="anim">
      <div class="nav__btn--line nav__btn--line"></div>
      <div class="nav__btn--line nav__btn--line"></div>
      <div class="nav__btn--line nav__btn--line"></div>
    </div>
    <div class="nav__menu">
      <div class="nav__filter" @click="anim"></div>

      <div class="nav__container">
        <ul @click="anim">
          <li>
            <div class="close"></div>
          </li>
          <router-link tag="li" to="/" exact>
            Home
          </router-link>
          <router-link tag="li" to="/portfolio" exact>
            Portfolio
          </router-link>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
  props: {
    msg: String
  },
  data() {
    return {
      navOpen: false
    }
  },
  methods: {
    anim() {
      const containerEl = document.querySelector('.nav__container')
      const filterEl = document.querySelector('.nav__filter')

      if (!this.navOpen) {
        TweenMax.to(containerEl, 0.3, { x: '0%' });
        TweenMax.fromTo(filterEl, 0.2, { autoAlpha: 0, display: 'none' }, { autoAlpha: 0.2, display: 'block' });
      } else {
        TweenMax.to(containerEl, 0.2, { x: '-100%' });
        TweenMax.fromTo(filterEl, 0.2, { autoAlpha: 0.2, display: 'block' }, { autoAlpha: 0, display: 'none' });
      }
      this.navOpen = !this.navOpen;
    }
  }
};
</script>

<style lang="scss">

  @import '../../assets/scss/styles.scss';

</style>
