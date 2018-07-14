<template>
  <BasePage :landingPage="true" >
    <div class="page__top">
      <div class="header flex--center">
        <BaseAnim class="anim-logo" :animData="animData" />
      </div>
      <div class="description flex--center">
        <p>Hi, I’m António! I like creating challenging websites</p>
        <!-- <ul>
          <li title="Github">
            <BaseButton link="https://github.com/antoniojps" icon="brands/github" />
          </li>
          <li title="LinkedIn">
            <BaseButton link="https://www.linkedin.com/in/antonio-pires-dos-santos/" icon="brands/linkedin-in" />
          </li>
          <li title="Behance">
            <BaseButton link="https://www.behance.net/antoniojps" icon="brands/behance" />
          </li>
        </ul> -->

        <div class="terminal__help">
          <ul>
            <!-- Terminal Commands -->
            <li
              v-for="cmd in publicCmds"
              :key="cmd.command"
              @click="runCommand(cmd.command)"
              @mouseover="typeCommand(cmd.command)"
              @mouseout="typeCommand('')"
              >
              <BaseButton :text="cmd.command" />
            </li>
            <!-- Links -->
             <li class="nav__container-footer__li" title="Github">
              <BaseButton link="https://github.com/antoniojps" icon="brands/github" />
            </li>
            <li class="nav__container-footer__li" title="LinkedIn">
              <BaseButton link="https://www.linkedin.com/in/antonio-pires-dos-santos/" icon="brands/linkedin-in" />
            </li>
            <li class="nav__container-footer__li" title="Behance">
              <BaseButton link="https://www.behance.net/antoniojps" icon="brands/behance" />
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
        directory="antoniosantos.io$"
      />
      <div class="wrapper__btn">
        <BaseButton
          link="mailto:antoniojmsps@gmail.com"
          text="Contact me"
          btnStyle="gradient"
          size="large" />
      </div>
    </div>
  </BasePage>
</template>

<script>
import H from '@/costum/Helpers'
import { eventBus } from '@/main'

import Terminal from '@/components/Terminal/Terminal.vue'
import animData from '@/assets/anim/antonio.json'

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
          response: 'Name: Antonio santos \nStudying: New Technologies of Communication in Aveiro\nAge:21'
        },
        {
          command: 'hobbies',
          description: 'my favorite activities',
          response: 'Web Development\nSurfing\nPhotography\nFilm Making'
        },
        {
          command: 'party',
          description: 'start the partyyyyy or stop',
          response: this.handleParty
        },
        {
          command: 'treasure',
          description: 'hidden',
          hidden: true,
          response: () => ('you are rich')
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
      party: false,
      animData
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
    handleParty() {
      this.party = !this.party
      if (this.party) {
        this.$confetti.start()
        return ('OHHH YEAHHH')
      }
      this.$confetti.stop()
      return ('thats sad...')
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';
.terminal {
  min-height: 40vh;
  &__help {
    padding-bottom:$spacingBase;
    ul {
      list-style-type: none;
      display:flex;
      width:100%;
      justify-content: center;
      li {
        width: fit-content;
        padding: $spacingSmall;
      }
    }
  }
}

.header {
  margin:0;

  @include screen(md){
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
}

.page{
  &__bottom {
    position:relative;
  }
}

.wrapper__btn {
  display:flex;
  justify-content:center;
  position:absolute;
  top:100%;
  left: 0;
  width:100%;
  background-color:white;
  padding: $spacingSmall;
  transform: translateY(-100%);

  div {
    height:auto;
    width:auto;
    transform: translateY(-50%);
    box-shadow: 0 -10px 10px -5px rgba(0, 0, 0, 0.08)
  }
}

</style>

