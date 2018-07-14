<template>
     <div class="terminal__icoBtn--wrapper" :class="wrapperStyleClass">
        <div
        class="terminal__icoBtn"
        ref="terminalBtn"
        :class="btnStyleClass"
        :style="btnStyle">
        </div>
      </div>
</template>

<script>
export default {
  name: 'TerminalButton',
  props: {
    icon: {
      type: String,
      default: 'expand'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#45b748'
    }
  },
  computed: {
    wrapperStyleClass() {
      return {
        'terminal__icoBtn--wrapper--disabled': this.disabled
      }
    },
    btnStyleClass() {
      return {
        'terminal__icoBtn--disabled': this.disabled
      }
    },
    btnStyle() {
      return {
        backgroundColor: this.color
      }
    }
  }
}
</script>

