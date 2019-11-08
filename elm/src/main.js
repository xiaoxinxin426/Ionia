import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.config.productionTip = false

var store = new Vuex.Store({
  state:{
    names:''
  },
  mutations:{
    addOrder(state,i){
      state.names=i
    }
  },
})
new Vue({
  el: '#app',
   router,
   store,
  render: h => h(App)
})



