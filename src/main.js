import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import VueMobileDetection from "vue-mobile-detection";

Vue.config.productionTip = false
Vue.use(VueMobileDetection);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
