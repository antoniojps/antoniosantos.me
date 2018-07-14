<template>
  <div>
    <a :href="link" :target="isMailto ? '' : '_blank'" v-if="(link && !isPath)">
      <button class="btn btn--small btn--icon" :class="classObj">
        <icon v-if="icon" class="btn__icon" :name="icon"></icon>
        {{text}}
      </button>
    </a>

    <router-link :to="link" v-if="(link && isPath)" exact>
      <button class="btn btn--small btn--icon" :class="classObj">
        <icon v-if="icon" class="btn__icon" :name="icon"></icon>
        {{text}}
      </button>
    </router-link>

    <button v-if="!link && icon" class="btn btn--small btn--icon" :class="classObj">
      <icon class="btn__icon" :name="icon"></icon>
      {{text}}
    </button>

    <button v-if="!link && !icon" class="btn btn--small" :class="classObj">
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
    classes: String,
    btnStyle: {
      type: String,
      default: 'base'
    },
    size: String
  },
  computed: {
    isPath() { return constants.regexPath.test(this.link) },
    isMailto() { return constants.regexMailto.test(this.link) },
    classObj() {
      return {
        'btn--icon-only': !this.text,
        'btn--primary': this.btnStyle === 'primary',
        'btn--base': this.btnStyle === 'base',
        'btn--large': this.size === 'large',
        'btn--gradient': this.btnStyle === 'gradient'

      }
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/styles.scss';
</style>
