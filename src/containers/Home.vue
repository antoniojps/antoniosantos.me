<template>
  <div class="row">
    <h1>Type in the terminal to learn
      something about me</h1>
    <div class="wrapper">
      <div class="terminal__help">
        <h4>Commands</h4>
        <ul class="font--alternative">
          <li v-for="cmd in publicCmds" :key="cmd.command">{{cmd.command}}</li>
        </ul>
      </div>
      <Terminal
        class="marginBottom"
        :terminalOptions="options"
        :commands="cmds"
        title="antoniosantos -- bash"
        directory="antoniosantos.io$"
        @is-fullscreen="renderDummy"
        :newDistanceToTop="dummyPosition"
        :newSize="dummySize"></Terminal>

      <Terminal
        ref="dummy"
        class="paddingBottom invisible"
        title="antoniosantos -- bash"
        directory="antoniosantos.io$"
        :commands="cmds"
        v-if="shouldRenderDummy"
        v-show="true"
        :isDummy="true"></Terminal>
    </div>
  </div>
</template>

<script>
import Terminal from '@/components/Terminal/Terminal.vue';
import H from '@/costum/Helpers';

export default {
  name: 'Home',
  components: {
    Terminal
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
        routing: true,
        emptyLog: true
      },
      party: false,
      // ANIMATIONS
      shouldRenderDummy: false,
      windowSize: window.innerWidth,
      dummyPosition: {},
      dummySize: {}
    };
  },
  computed: {
    publicCmds() {
      return H.getPublicCommandsObj(this.cmds)
    }
  },

  methods: {
    renderDummy(isFullscreen) {
      this.shouldRenderDummy = isFullscreen;
    },
    getDummyStyle() {
      const dummyEl = this.$refs.dummy.$el;

      this.dummyPosition = H.getDistanceToTop(dummyEl);
      this.dummySize = {
        width: dummyEl.offsetWidth
      }
    },
    handleWindowResize(event) {
      this.windowSize = {
        width: event.currentTarget.innerWidth,
        height: event.currentTarget.innerHeight
      };
      if (this.shouldRenderDummy) this.getDummyStyle();
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
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize);
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles.scss";
.wrapper {
  display: flex;
  justify-content: auto;
  flex-direction: column-reverse;

  @include screen(md) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
}

.terminal {
  &__help {
    ul {
      list-style-type: none;
    }
  }
}
</style>

