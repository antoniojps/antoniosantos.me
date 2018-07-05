import Vue from 'vue'
import VueRouter from 'vue-router'
import 'vue-awesome/icons/expand'
import 'vue-awesome/icons/minus'
import Icon from 'vue-awesome/components/Icon.vue'
import VueConfetti from 'vue-confetti'
import { VTooltip } from 'v-tooltip'

import App from './App.vue'
import routes from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueConfetti)

Vue.component('icon', Icon)

Vue.directive('tooltip', VTooltip)

// Global directive for focus in terminal
Vue.directive('focus', {
  inserted(el) {
    Vue.nextTick(() => {
      el.focus()
    })
  }
})

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
