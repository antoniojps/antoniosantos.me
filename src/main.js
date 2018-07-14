import Vue from 'vue'
import VueRouter from 'vue-router'
import Icon from 'vue-awesome/components/Icon.vue'
import VueConfetti from 'vue-confetti'
import 'vue-awesome/icons/expand'
import 'vue-awesome/icons/minus'
import 'vue-awesome/icons/brands/github'
import 'vue-awesome/icons/brands/linkedin-in'
import 'vue-awesome/icons/brands/behance'
import 'vue-awesome/icons/brands/youtube'

import App from './App.vue'
import routes from './routes'
import './components'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueConfetti)

Vue.component('icon', Icon)

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

// eslint-disable-next-line
export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
