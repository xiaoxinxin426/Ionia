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
		school: '',
		numb: [],
		cityn: '',
		beiz:[]
	},
	mutations: {
		addPri(state, i) {
			state.numb = i
		},
		addOrder(state, i) {
			state.names = i
		},
		addtit(state, i) {
			state.titles = i
		},
		addcons(state, i) {
			state.cons = i
		},
		cityn(state, i) {
			state.cityn = i
		},
		del(state) {
			state.numb = ''
		},
		beiz(state,i){
			state.beiz.push(i)
		}
	},
	getters: {
		totalPrice(state) {
			if(state.numb == '') {
				t = ''
				return
			} else {
				var t = 0
				state.numb.forEach(el => {
					t += el.specfoods[0].price * (el.__v || 1)
				})
				console.log(t)
				return t;
			}
		}
	},
})
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})