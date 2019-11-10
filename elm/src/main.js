import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.config.productionTip = false

var store = new Vuex.Store({
	state: {
		names: '',
		titles: '',
		cons: '',
		school: ''
	},
	mutations: {
		addOrder(state, i) {
			state.names = i
		},
		addtit(state, i) {
			state.titles = i
		},
		addcons(state, i) {
			state.cons = i
		},
	},
})
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})