<template>
  <div class="terminal" ref="terminal">
    <div class="terminal__top">
      <TerminalButton :disabled="true" color="#f1605c" />
      <TerminalButton
        :disabled="!fullScreenActive"
        icon="minus"
        color="#fdbe2a"
        @click="goFullscreen"
      />
      <TerminalButton color="#45b748" @click="goFullscreen"/>
      <div class="terminal__top--title">{{title}}</div>
    </div>
    <div class="terminal__container" ref="terminalContainer">
      <div class="terminal__textarea" v-for="textArea in nTextAreas" :key="textArea">
        <TerminalTextArea
          @command-finished="appendTextArea"
          @command-clear="clearTerminal"
          @command-log="saveCmdLog"
          :id="textArea"
          :commands="commands"
          :directory="directory+ ' '"
          :commandLogs="commandLogs"
          :terminalOptions="mergedTerminalOptions"
          :isFullscreen="isFullscreen"
          />
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap';
import H from '../../costum/Helpers';

import TerminalTextArea from './TerminalTextArea.vue';
import TerminalButton from './TerminalButton.vue';

export default {
  name: 'Terminal',
  components: {
    TerminalTextArea,
    TerminalButton
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'terminal -- root'
    },
    directory: {
      type: String,
      required: false,
      default: 'root:'
    },
    commands: {
      type: Array,
      required: true
    },
    terminalOptions: {
      type: Object,
      required: false,
      default: () => ({ routing: true, emptyLog: true })
    },
    // ANIMATIONS
    newDistanceToTop: {
      type: Object
    },
    newSize: {
      type: Object
    },
    isDummy: {
      type: Boolean
    }
  },
  data() {
    return {
      command: '',
      action: '',
      nTextAreas: [0],
      inputLog: [],
      mountedRoute: '',
      defaultOptions: { routing: true, emptyLog: true },
      // ANIMATIONS
      fullScreenActive: false,
      distanceToTop: {},
      size: { width: 438 },
      isFullscreen: false,
    };
  },
  methods: {
    appendTextArea() {
      // random string to prevent duplicate keys
      const nTextArea = btoa(Math.random());
      this.nTextAreas.push(nTextArea);
    },
    clearTerminal() {
      // clear array of textAreas and insert new one
      this.nTextAreas = [btoa(Math.random())];
    },

    saveCmdLog(cmd) {
      this.inputLog.push(cmd);
    },

    scrollToBottomTerminal() {
      const elContainer = this.$refs.terminalContainer;
      elContainer.scrollTop = elContainer.scrollHeight;
    },
    // ANIMATIONS
    goFullscreen() {
      let fullscreenTimeline
      let windowedTimeline

      const { distanceToTop } = this
      const el = this.$refs.terminal
      const elContainer = this.$refs.terminalContainer

      if (!this.fullScreenActive) {
        fullscreenTimeline = new TimelineMax({ paused: true });

        this.size = {
          width: this.$refs.terminal.offsetWidth
        };

        // eslint-disable-next-line
        fullscreenTimeline.fromTo(el,0.5,{ minWidth:this.minWidth,position: "fixed", top: distanceToTop.y, left: distanceToTop.x }, { minWidth: "100%", position: "fixed", height: "100%", zIndex: "999", top: 0, left: 0, ease: Power4.easeOut } )
        // eslint-disable-next-line
                          .fromTo( elContainer, 0.5, { minHeight: "100px", maxHeight: "300px" }, { minHeight: "100%", maxHeight: "100%", ease:  Expo.easeOut,onComplete:() => {
            this.isFullscreen = true;
          }
          }, 0);
        fullscreenTimeline.play();
        this.fullScreenActive = true;
      } else {
        windowedTimeline = new TimelineMax({ paused: true });
        // eslint-disable-next-line
        windowedTimeline.fromTo( elContainer, 0.2, { minHeight: "100%", maxHeight: "100%" }, { minHeight: "100px", maxHeight: "300px", clearProps: "minHeight,maxHeight" } )
        // eslint-disable-next-line
                        .fromTo( el, 0.5, { position: "fixed", top: 0, left: 0, height:"100%"}, { minWidth: this.minWidth, position: "absolute", top: distanceToTop.y, left: distanceToTop.x,  height:"auto",clearProps: "left,top,position,minWidth,zIndex,height", ease: Power4.easeOut,onComplete:() => {
            this.isFullscreen = false;
            elContainer.scrollTo(0, elContainer.scrollHeight);
          }
          }, 0);
        windowedTimeline.play();

        this.fullScreenActive = false;
      }
    },
    handleWindowResize() {
      // update distances for animations
      if (!this.isDummy && !this.isFullscreen) {
        this.distanceToTop = H.getDistanceToTop(this.$refs.terminal);
      } else if (!this.isDummy) {
        this.distanceToTop = this.newDistanceToTop;
        this.size = this.newSize;
      }
    }
  },
  computed: {
    minWidth() {
      return `${this.size.width}px`;
    },
    // saves array with default commands + user input commands
    commandLogs() {
      if (!this.mergedTerminalOptions.emptyLog) {
        let defaultCommands = H.getPublicCommandsArr(this.commands);
        // adding empty string to first element so that the last log resets
        defaultCommands = [''].concat(defaultCommands);
        return defaultCommands.concat(this.inputLog);
      }
      return [''].concat(this.inputLog);
    },
    mergedTerminalOptions() {
      return Object.assign(this.defaultOptions, this.terminalOptions);
    }
  },
  watch: {
    $route(to) {
      if (this.mergedTerminalOptions.routing && to.path === this.mountedRoute) {
        this.scrollToBottomTerminal();
      }
    },

    // ANIMATIONS
    isFullscreen() {
      this.$emit('is-fullscreen', this.isFullscreen);
    }
  },
  mounted() {
    if (this.mergedTerminalOptions.routing) {
      this.$nextTick(() => {
        this.mountedRoute = this.$route.path;
      })
    }

    // ANIMATIONS
    this.distanceToTop = H.getDistanceToTop(this.$refs.terminal);
    window.addEventListener('resize', this.handleWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/styles.scss";
</style>

