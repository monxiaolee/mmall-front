// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' //vuex
// import http from './vue-axios'
import global from '@/utils/global'

import '~/themes/default/index.scss'

// import '../static/themes/default/index.scss'

Vue.config.productionTip = false

// Vue.use(http)
Vue.use(global)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
