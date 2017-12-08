// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//路由
import router from './router'
//获取数据
import axios from 'axios'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//懒加载
import VueLazyload from 'vue-lazyload'
//jq
import $ from 'jquery'
//vuex
import store from './router/store'
Vue.use(VueAwesomeSwiper)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '加载失败',
  loading: require('../static/shibai.gif'),
  attempt: 2,
  listenEvents: [ 'scroll', 'mousewheel' ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
