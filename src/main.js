import Vue from 'vue'
import App from './App.vue'

import pleasureUI from './index.js'
import './assets/fonts/icomoon.css'
Vue.use(pleasureUI)

import './directives/index'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
