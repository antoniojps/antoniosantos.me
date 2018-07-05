<template>
  <div class="row">
    <h1>Portfolio</h1>
    <div class="portfolio__list">
      <PortfolioCard v-for="card in cards" v-bind="card" :key="card.title"/>
    </div>
  </div>
</template>
|
<script>
import PortfolioCard from '@/components/Portfolio/PortfolioCard.vue'
import { TimelineLite } from 'gsap'

export default {
  components: {
    PortfolioCard
  },
  data() {
    return {
      cards: [
        {
          title: 'YTRank.net',
          // eslint-disable-next-line
          img: require('@/assets/imgs/mockups/yt-rank.png'),
          keywords: [
            'Vue JS',
            'PHP',
            'Javascript/ES6',
            'SCSS',
            'Webpack',
            'Git',
            'MySQL'
          ]
        },
        {
          title: 'Epa',
          // eslint-disable-next-line
          img: require('@/assets/imgs/mockups/yt-rank.png'),
          keywords: [
            'Vue JS',
            'PHP',
            'Javascript/ES6',
            'SCSS'
          ]
        },
        {
          title: 'Uepa',
          // eslint-disable-next-line
          img: require('@/assets/imgs/mockups/yt-rank.png'),
          keywords: [
            'Vue JS',
            'PHP',
            'Javascript/ES6'
          ],
          link: 'http://google.pt'
        },
        {
          title: 'ei carambas que cena',
          // eslint-disable-next-line
          img: require('@/assets/imgs/mockups/yt-rank.png'),
          keywords: [
            'Vue JS',
            'PHP',
            'Javascript/ES6',
            'SCSS',
            'Webpack',
            'Git',
            'Nginx',
            'MySQL'
          ],
          link: 'http://google.pt'
        }
      ]
    }
  },
  mounted() {
    const timeline = new TimelineLite()
    timeline.staggerTo(
      '.portfolio__card',
      0.4,
      { opacity: 1, x: 0 },
      0.2
    );
    timeline.play()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.portfolio {
  &__list {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: $spacingBase;
    @include screen(sm) {
      grid-template-columns: 1fr 1fr;
    }
    margin-bottom: $spacingXLarge;
  }
}
</style>
