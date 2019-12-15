import './assets/css/index.css'
import './assets/less/index.less'
// import './assets/scss/index.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import VueRouter from 'vue-router'
import plugins from './plugins'
Vue.use(VueRouter)
Vue.use(plugins)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')