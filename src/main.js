import Vue from 'vue'
import App from './App.vue'
// import Vuex instance
import { store } from './store/index' 

Vue.config.productionTip = false

new Vue({
  store, // inject store Vuex instance in the main Vue instance
  render: h => h(App),
}).$mount('#app')
