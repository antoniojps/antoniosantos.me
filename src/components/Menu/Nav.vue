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
        <ul>
          <li @click="anim">
            <div class="close"></div>
          </li>
          <router-link
            tag="li"
            to="/"
            exact
            @click.native="anim"
            >
            <div class="nav__container-header">home</div>
            <div class="nav__container-description">
              <span>A WEIRD TERMINAL, HOW BASIC?</span>
            </div>
          </router-link>
          <router-link
            tag="li"
            to="/portfolio"
            exact
            @click.native="anim"
            >
            <div class="nav__container-header">portfolio</div>
            <div class="nav__container-description">
              <span>ACADEMIC AND PERSONAL PROJECTS</span>
            </div>
          </router-link>
            <li>
              <a href="mailto:antoniojmsps@gmail.com">
                <div class="nav__container-header">contact</div>
                <div class="nav__container-description">
                  <span>CONTACT ME I WILL ASNWER WITHIN 24 HOURS</span>
                </div>
              </a>
            </li>
        </ul>
        <div class="nav__container-footer">
          <ul>
            <li class="nav__container-footer__li" title="Github">
              <ButtonNav link="https://github.com/antoniojps" icon="brands/github" />
            </li>
            <li class="nav__container-footer__li" title="LinkedIn">
              <ButtonNav link="https://www.linkedin.com/in/antonio-pires-dos-santos/" icon="brands/linkedin-in" />
            </li>
            <li class="nav__container-footer__li" title="Behance">
              <ButtonNav link="https://www.behance.net/antoniojps" icon="brands/behance" />
            </li>
            <li class="nav__container-footer__li">
              <ButtonNav link="mailto:antoniojmsps@gmail.com" text="Contact" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';
import ButtonNav from '@/components/Shared/ButtonNav.vue'

export default {
  components: {
    ButtonNav
  },
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
        TweenMax.to(containerEl, 0.3, { x: '-100%' });
        TweenMax.fromTo(filterEl, 0.3, { autoAlpha: 0.2, display: 'block' }, { autoAlpha: 0, display: 'none' });
      }
      this.navOpen = !this.navOpen;
    }
  }
};
</script>

<style lang="scss">

  @import '@/assets/scss/styles.scss';

</style>
