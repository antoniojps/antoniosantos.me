<template>
  <div class="terminal" ref="terminal">
    <div class="terminal__top">
      <TerminalButton color="#FF6059" />
      <TerminalButton
        color="#FFBD2E"
      />
      <TerminalButton
        color="#27CA42"
      />
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
          />
      </div>
    </div>
  </div>
</template>

<script>
import H from '@/costum/Helpers';

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
    }
  },
  data() {
    return {
      command: '',
      action: '',
      nTextAreas: [0],
      inputLog: [],
      mountedRoute: '',
      defaultOptions: { routing: false, emptyLog: true },
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
  },
  mounted() {
    if (this.mergedTerminalOptions.routing) {
      this.$nextTick(() => {
        this.mountedRoute = this.$route.path;
      })
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/styles.scss";
</style>

