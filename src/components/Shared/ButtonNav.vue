<template>
  <div>
    <a :href="link" target="_blank" v-if="(link && isAbsoluteLink)">
      <button class="btn btn--small btn--primary btn--icon" :class="classObj">
        <icon v-if="icon" class="btn__icon" :name="icon"></icon>
        {{text}}
      </button>
    </a>

    <router-link :to="link" v-if="(link && !isAbsoluteLink)">
      <button class="btn btn--small btn--primary btn--icon" :class="classObj">
        <icon v-if="icon" class="btn__icon" :name="icon"></icon>
        {{text}}
      </button>
    </router-link>

    <button v-if="!link" class="btn--small btn--primary btn--icon" :class="classObj">
      <icon class="btn__icon" :name="icon"></icon>
      {{text}}
    </button>

  </div>
</template>

<script>
import constants from '@/costum/constants';

export default {
  props: {
    link: String,
    icon: String,
    text: String,
    classes: String
  },
  data() {
    return {}
  },
  computed: {
    isAbsoluteLink() { return constants.regexAbsoluteURL.test(this.link) },
    classObj() { return { 'btn--icon-only': !this.text } }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';
</style>
