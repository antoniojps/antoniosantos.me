<template>
    <div>
        <textarea
            :rows="textAreaRows"
            :disabled="commandEntered"
            spellcheck="false"
            v-model='textAreaTxt'
            @keyup='disableUserDelete'
            @keydown.enter.prevent='readCommand'
            @keydown.up.prevent='typePrevCommand'
            @keydown.down.prevent='typeNextCommand'
            @run-command='runCommand'
            v-focus
            autofocus
            ref="txtArea"
            :style="styleObj"
            >
        </textarea>
    </div>
</template>

<script>
import H from '@/costum/Helpers'
import constants from '@/costum/constants'
import { eventBus } from '@/main'

export default {
  name: 'TerminalTextArea',
  props: {
    directory: {
      type: String,
      required: true
    },
    commands: {
      type: Array,
      required: true
    },
    commandLogs: {
      type: Array
    },
    terminalOptions: {
      type: Object
    },
    isFullscreen: {
      type: Boolean
    }
  },
  data() {
    return {
      textAreaTxt: this.directory,
      commandEntered: false,
      textAreaRows: 1,
      cmd: undefined,
      focus: true,
      height: 'auto',
      logIndex: this.commandLogs.length - 1,
      logIndexDecreased: false,
      logIndexIncreased: false
    };
  },
  watch: {
    textAreaTxt() {
      this.fixTxtAreaHeight();
    },
    isFullscreen() {
      this.fixTxtAreaHeight();
    }
  },
  computed: {
    directoryRegex() {
      return H.convertToRegex(this.directory);
    },
    styleObj() {
      if (this.height !== 'auto') {
        return { height: `${this.height}px` };
      }
      return { height: this.height };
    },
    helpText() {
      let helpTxt = 'Available commands:';
      if (this.commands) {
        H.getPublicCommandsObj(this.commands).forEach((cmd) => {
          // if has description add description to help output
          if (cmd.description) {
            helpTxt += `\n${cmd.command} - ${cmd.description}`;
            // else only show command
          } else {
            helpTxt += `\n${cmd.command}`;
          }
        });
      } else {
        helpTxt = '\nNo commands available';
      }
      return helpTxt;
    },
    cdText() {
      const cdText = 'Available directories:';
      let directories = this.$router.options.routes.map(route => `\n${route.path}`);
      directories = directories.join('');

      return cdText + directories;
    }
  },
  methods: {
    unlistenBus() {
      eventBus.$off('run-command')
      eventBus.$off('type-command')
    },
    runCommand(cmd) {
      this.unlistenBus()
      this.typeCommand(cmd)
      this.readCommand()
    },
    typeCommand(cmd) {
      this.textAreaTxt = this.directory + cmd
    },
    readCommand() {
      this.unlistenBus()
      this.cmd = this.textAreaTxt.match(new RegExp(this.directoryRegex));

      // command is found
      if (!this.cmd[2]) {
        this.cmd = false;
      } else {
        const [, , cmd] = this.cmd;
        this.cmd = cmd;
        this.$emit('command-log', this.cmd);
        this.resetLogIndex();
        this.manageCommandRes();
      }
    },

    typePrevCommand() {
      this.logIndexDecreased = false;
      if (this.logIndexIncreased) {
        this.logIndex -= 1;
      }
      if (this.logIndex > 0 && this.logIndex <= this.commandLogs.length - 1) {
        this.replaceCommand(this.commandLogs[this.logIndex]);
        this.logIndex -= 1;
        this.logIndexDecreased = true;
      } else if (this.logIndex === 0) {
        this.replaceCommand(this.commandLogs[this.logIndex]);
      }
    },

    typeNextCommand() {
      this.logIndexIncreased = false;
      if (this.logIndexDecreased) {
        this.logIndex += 1;
        this.logIndexDecreased = false;
      }
      if (this.logIndex < this.commandLogs.length - 1) {
        this.logIndexIncreased = true;
        this.replaceCommand(this.commandLogs[this.logIndex += 1]);
      } else {
        this.replaceCommand('');
      }
    },

    resetLogIndex() {
      this.logIndex = this.commandLogs.length - 1;
    },

    manageCommandRes() {
      this.typeCommandResponse()
        .then((returnsText) => {
          // set height of textarea to avoid scrollbar
          if (returnsText) {
            this.fixTxtAreaHeight();
          }
          this.$emit('command-finished');
        })
        .catch(() => {
          if (this.cmd !== 'clear' && this.cmd !== 'cls') {
            this.fixTxtAreaHeight();
            this.$emit('command-finished');
          }
        });
    },

    // types the response
    typeCommandResponse() {
      return new Promise((resolve, reject) => {
        const cmdValid = this.validateCommand();
        let returnsTxt = true;
        this.commandEntered = true;

        if (cmdValid && cmdValid !== 'defaultCmd') {
          // command response
          let cmdRes = cmdValid.response;
          if (typeof cmdRes === 'function') {
            cmdRes = cmdRes();
            if (typeof cmdRes === 'string') {
              this.$nextTick(() => {
                this.typeText(cmdRes);
                returnsTxt = true;
                resolve(returnsTxt);
              });
            } else {
              returnsTxt = false;
              resolve(returnsTxt);
            }
          } else {
            this.$nextTick(() => {
              returnsTxt = true;
              this.typeText(cmdRes);
              resolve(returnsTxt);
            });
          }
        } else if (cmdValid === 'defaultCmd') {
          this.$nextTick(() => {
            this.textAreaRows = this.textAreaRows + 1;
            reject();
          });
        } else {
          this.$nextTick(() => {
            this.typeText(`"${this.cmd}" Command not found, type "help"`);
            reject();
          });
        }
      });
    },

    typeText(text) {
      this.textAreaTxt += `\n${text}`;
    },
    typeTextInline(text) {
      this.textAreaTxt += text;
    },
    replaceCommand(command) {
      this.textAreaTxt = this.directory + command;
    },

    // set height of textarea to avoid scrollbar
    fixTxtAreaHeight() {
      this.height = this.$refs.txtArea.scrollHeight;
    },

    getRoutesPath() {
      const routesPath = this.$router.options.routes.map(route => route.path);
      return routesPath;
    },

    // verifies route path exists
    findRoutes(path) {
      return this.getRoutesPath().includes(path);
    },

    // checks if the command is a default command or if its in the props command options
    validateCommand() {
      this.cmd = this.cmd.toLowerCase();
      if (!this.defaultCommand()) {
        const result = this.commands.filter(cmdArr => cmdArr.command.toLowerCase() === this.cmd);
        if (result.length === 1) {
          return result[0];
        }
        return false;
      }

      return 'defaultCmd';
    },

    // manages default commands
    defaultCommand() {
      let defaultCmdFound = false;

      // default commands
      switch (this.cmd) {
        case 'clear':
        case 'cls': {
          this.$emit('command-clear');
          defaultCmdFound = true;
          break;
        }
        case 'help': {
          this.$nextTick(() => {
            this.typeText(this.helpText);
          });
          defaultCmdFound = true;
          break;
        }
        case 'cd': {
          if (this.terminalOptions.routing) {
            this.$nextTick(() => {
              this.typeText(this.cdText);
            });
            defaultCmdFound = true;
          }
          break;
        }
        default: {
          break;
        }
      }
      if (this.terminalOptions.routing && !defaultCmdFound) {
        // check if cd command was called with a route
        const cdMatch = this.cmd.match(constants.regexCd)
        let route

        if (cdMatch !== null) [, route] = cdMatch
        else route = false

        if (route) {
          if (route === this.$route.path) {
            this.$nextTick(() => {
              this.typeText('You are already here!');
            });
          } else if (this.findRoutes(route)) {
            this.$nextTick()
              .then(() => new Promise((resolve) => {
                this.typeText(`Navigated to ${route}`);
                resolve(true);
              }))
              .then(() => {
                this.$router.push(route);
              });
          } else {
            this.$nextTick(() => {
              this.typeText(this.cdText);
            });
          }
          defaultCmdFound = true;
        } else {
          defaultCmdFound = false;
        }
      }

      return defaultCmdFound;
    },

    disableUserDelete(event) {
      if (!this._checkDirectoryIsDefault()) {
        event.preventDefault();
        this.textAreaTxt = this.directory;
      }
    },

    // Verify that user name in terminal hasnt been altered
    _checkDirectoryIsDefault() {
      let userMatch
      let isDefault

      userMatch = this.textAreaTxt.match(new RegExp(this.directoryRegex));

      if (userMatch) {
        [, userMatch] = userMatch;
      } else {
        userMatch = false;
      }

      if (this.directory === userMatch) isDefault = true
      else isDefault = false

      return isDefault;
    }
  },
  created() {
    eventBus.$on('run-command', cmd => this.runCommand(cmd))
    eventBus.$on('type-command', cmd => this.typeCommand(cmd))
  }
};
</script>

<style lang="scss">
</style>
