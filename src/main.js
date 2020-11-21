import Vue from 'vue'
import App from './App.vue'
import kIcon from './components/k-icon.vue'
import kButton from './components/k-button.vue'
import kButtonGroup from './components/k-button-group.vue'

Vue.config.productionTip = false
Vue.component('k-icon',kIcon)
Vue.component('k-button',kButton)
Vue.component('k-group',kButtonGroup)
new Vue({
  render: h => h(App),
}).$mount('#app')
