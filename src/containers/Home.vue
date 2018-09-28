<template>
  <BasePage :landingPage="true">
    <transition name="fade" type="transition" mode="out-in">
      <div v-if="loading" key="loading" class="loading">
        <BaseAnim
          class="anim-logo"
          :loop="true"
          :animData="animDataLoading" />
      </div>
      <div key="page" v-else>
        <div class="page__top">

          <div class="header flex--center">
            <BaseAnim
              v-if="animData"
              class="anim-logo"
              :animData="animData"
              :speed="4" />
          </div>

          <div class="description flex--center">

            <p class="align-center ">
              Hi, I’m António Santos! I like creating challenging websites
            </p>

            <div class="terminal__help">

            <ul>
                <li class="nav__container-footer__li" title="Github">
                  <BaseButton link="https://github.com/antoniojps" icon="brands/github" />
                </li>
                <li class="nav__container-footer__li" title="LinkedIn">
                  <BaseButton link="https://www.linkedin.com/in/antonio-pires-dos-santos/" icon="brands/linkedin-in" />
                </li>
                <li class="nav__container-footer__li" title="Behance">
                  <BaseButton link="https://www.behance.net/antoniojps" icon="brands/behance" />
                </li>
                <li class="nav__container-footer__li" title="Youtube">
                  <BaseButton link="https://www.youtube.com/user/AntonioSantosYT" icon="brands/youtube" />
                </li>
              </ul>

              <ul>
                <li
                  v-for="cmd in publicCmds"
                  :key="cmd.command"
                  @click="runCommand(cmd.command)"
                  @mouseover="typeCommand(cmd.command)"
                  @mouseout="typeCommand('')"
                  >
                  <BaseButton :text="cmd.command" />
                </li>
                <li
                  key="clear"
                  @click="showClear && runCommand('clear')"
                  @mouseover="showClear && typeCommand('clear')"
                  @mouseout="showClear && typeCommand('')">
                  <BaseButton :disabled="!showClear" icon="eraser"/>
                </li>
              </ul>

            </div>

          </div>

        </div>

        <div class="page__bottom">

          <Terminal
            :terminalOptions="options"
            :commands="cmds"
            title="type below!"
            directory="antoniosantos.me$"
          />

          <div class="wrapper__btn">
            <BaseButton
              link="mailto:antoniojmsps@gmail.com"
              text="Contact me"
              btnStyle="gradient"
              size="large" />
          </div>

        </div>
      </div>
    </transition>
  </BasePage>
</template>

<script>
import H from '@/costum/Helpers'
import { eventBus } from '@/main'
import { getAnimDataAntonio } from '@/costum/requests'
import Terminal from '@/components/Terminal/Terminal.vue'

const animDataLoading = require('@/assets/anim/anim-loading.json')

export default {
  name: 'Home',
  components: {
    Terminal,
  },
  data() {
    return {
      cmds: [
        {
          command: 'about',
          description: 'my general information',
          response: 'Fresh from college with a degree in IT from the University of Aveiro,I consider myself a driven and creative web developer which enjoys working on ambitious projects that require the latest and best technology.\n\nTo freshen myself up and clear my thoughts I love going for a surf and taking some sick pictures and movies. \n\n Type "tech" to know my experience'
        },
        {
          command: 'tech',
          description: 'my stack',
          response: ' - HTML5, CSS3, Javascript ES6\n - SASS, css preprocessor\n - Design experience with Sketch app, and a lot of Adobe software (Photoshop, Premiere, After Effects, Lightroom)\n - Used a lot of Bootstrap and jQuery in the past\n - AJAX Requests with promise based libraries (Fetch, Axios, Request)\n - Love Vue JS\n - Like React JS\n - Node JS (npm, web servers with Express, modules, restful APIs, CLI tools with Yargs)\n - Experience in the past with PHP\n - GraphQL, client & server with Node and Apollo\n - Basic understanding and experience of MongoDB (Mongoose)\n - Basic knowledge of Webpack and Gulp\n - Experience with Git, version control\n - Some experience deploying web-apps (digital ocean, heroku, netlify)\n - Always up to date with SEO\n - Experience running Docker containers\n ...more soon, one must keep learning!'
        },
        {
          command: 'email',
          description: 'my email',
          response: 'antoniojmsps@gmail.com'
        },
        {
          command: 'gregonia',
          description: '',
          response: 'Gregonia is the Sonia'
        },
        {
          command: 'rafaela',
          description: 'hidden',
          hidden: true,
          response: 'Muitos parabéns à senhora mais bonita!'
        },
        {
          command: 'flip',
          description: 'hidden',
          hidden: true,
          response: () => {
            if (Math.random() > 0.5) return 'cara';
            return 'croa';
          }
        }
      ],
      options: {
        routing: false,
        emptyLog: true
      },
      animData: false,
      animDataLoading,
      showClear: false,
      loading: true,
    };
  },
  computed: {
    publicCmds() {
      return H.getPublicCommandsObj(this.cmds)
    }
  },
  methods: {
    runCommand(cmd) {
      eventBus.$emit('run-command', cmd)
      this.typeCommand(cmd)
    },
    typeCommand(cmd) {
      eventBus.$emit('type-command', cmd)
    },
    handleCommand(isClear) {
      if (!isClear) this.showClear = true
      else this.showClear = false
    }
  },
  async mounted() {
    eventBus.$on('terminal-response', this.handleCommand)
    eventBus.$on('terminal-clear', () => this.handleCommand(true))
    try {
      const start = Date.now()
      const { data } = await getAnimDataAntonio()
      const end = Date.now()
      const requestTime = Math.floor((end - start) / 1000)
      this.animData = data

      // make it so that the animation plays untill the end (so its not weird)
      if (requestTime > 1) this.loading = false
      else {
        setTimeout(() => { this.loading = false }, 900)
      }
    } catch (e) {
      console.log('Eww I couldnt load the animation...')
      this.loading = false
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';

.terminal {
  min-height: 40vh;
  &__help {
    padding-bottom: $spacingBase / 1.5;
    display: flex;
    flex-direction: column;
    @include screen(md) {
      flex-direction: row-reverse;
    }

    ul {
      list-style-type: none;
      display: flex;
      width: 100%;
      justify-content: start;
      &:first-child {
        padding-bottom: $spacingSmall;
      }
      @include screen(md) {
        justify-content: center;
        &:first-child {
          padding-bottom: 0;
        }
      }
      li {
        width: fit-content;
        padding: $spacingSmall;
      }
    }
  }
}

.loading {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  margin: 0;
  min-height: 121.95px;
  @include screen(md) {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
}

.page {
  &__bottom {
    position: relative;
    height: auto;
    @include screen(md) {
      height: 60vh;
    }
  }
}

.wrapper__btn {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  padding: $spacingSmall;
  transform: translateY(-100%);

  div {
    height: auto;
    width: auto;
    transform: translateY(-50%);
    box-shadow: 0 -10px 10px -5px rgba(0, 0, 0, 0.08);
  }
}
</style>

