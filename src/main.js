import Vue from 'vue'
import App from './App.vue'
import kIcon from './components/k-icon.vue'
import kButton from './components/k-button.vue'
import kButtonGroup from './components/k-button-group.vue'
import kInput from './components/k-input.vue'

Vue.config.productionTip = false
Vue.component('k-icon',kIcon)
Vue.component('k-button',kButton)
Vue.component('k-group',kButtonGroup)
Vue.component('k-input',kInput)

new Vue({
  render: h => h(App),
}).$mount('#app')
