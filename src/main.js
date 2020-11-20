import Vue from 'vue'
import App from './App.vue'
import kIcon from './components/k-icon.vue'
import kButton from './components/k-button.vue'

Vue.config.productionTip = false
Vue.component('k-icon',kIcon)
Vue.component('k-button',kButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
