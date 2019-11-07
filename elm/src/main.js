import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(VueResource)
Vue.use(MintUI)
Vue.config.productionTip = false
new Vue({
  el: '#app',
   router,
  render: h => h(App)
})



