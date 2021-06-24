import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import toast from 'components/common/toast/index'

Vue.config.productionTip = false

//安装toast插件
Vue.use(toast)

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/lazyback.png')
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
