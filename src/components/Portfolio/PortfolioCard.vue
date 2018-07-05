<template>
  <div class="portfolio__card">
    <div class="portfolio__card-header">
      <h2>{{title}}</h2>
    </div>
    <div class="portfolio__card-mockup">
      <img :src="img" alt="mockup" class="img-responsive">
    </div>
    <div class="portfolio__card-description" v-if="description">
      <p>{{description}}</p>
    </div>
    <div class="portfolio__card-keywords" v-if="keywords">
      <ul>
        <li
          class="portfolio__card-keyword"
          v-for="keyword in keywords"
          :key="keyword">{{keyword}}</li>
      </ul>
    </div>
    <div class="portfolio__card-link" v-if="link">
      <a :href="link" target="_blank">View project</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    img: {
      type: String,
      required: true
    },
    keywords: {
      type: Array,
      required: false
    },
    link: {
      type: String,
      required: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.portfolio {
  &__card {
    opacity:0;
    transform:translateX(-16px);
    background-color: $colorBg;
    width: 100%;
    padding: $sizeLarge $sizeSmall;
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.05),
      0 6px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
    }

    &-description {
      margin-top: $spacingBase;
      p {
        padding-bottom: 0;
        color: $colorBase5;
        line-height: $sizeLarge;
      }
    }

    &-mockup {
      display: flex;
      justify-content: center;
    }

    &-keywords {
      margin-top: $spacingXLSmall;
      ul {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
      }
    }
    &-keyword {
      padding: $spacingLSmall $spacingSmall;
      background-color: $colorAzul;
      border-radius: $radius;
      color: $colorWhite;
      font-family: $fontAlternative;
      margin-right: $spacingLSmall;
      margin-top: $spacingXLSmall;
    }

    &-link {
      margin-top: $spacingBase;
    }
  }
}
</style>
