// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'

import router from './router'

import './theme/index.css'

import Layout from '@/components/Layout'
import Topbar from '@/components/Topbar'

Vue.component('Layout', Layout)
Vue.component('Topbar', Topbar)

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
