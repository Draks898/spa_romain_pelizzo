import Vue from 'vue'
import App from './App.vue'
import router from './router' // added by router plugin


Vue.config.productionTip = false

new Vue({
  router, // added by router plugin
  render: h => h(App)
}).$mount('#app')