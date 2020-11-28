import Vue from 'vue'
import App from './App.vue'
import kIcon from './components/k-icon.vue'
import kButton from './components/k-button.vue'
import kButtonGroup from './components/k-button-group.vue'
import kInput from './components/k-input.vue'
import kRow from './components/k-row.vue'
import kCol from './components/k-col.vue'
import kLayout from './components/k-layout.vue'
import kHeader from './components/k-header.vue'
import kSider from './components/k-sider.vue'
import kContent from './components/k-content.vue'
import kFooter from './components/k-footer.vue'

Vue.config.productionTip = false
Vue.component('k-icon',kIcon)
Vue.component('k-button',kButton)
Vue.component('k-group',kButtonGroup)
Vue.component('k-input',kInput)
Vue.component('k-row',kRow) 
Vue.component('k-col',kCol)
Vue.component('k-layout',kLayout)
Vue.component('k-header',kHeader)
Vue.component('k-sider',kSider)
Vue.component('k-content',kContent)
Vue.component('k-footer',kFooter) 

new Vue({
  render: h => h(App),
}).$mount('#app')
