import Vue from 'vue'
import VueRouter from 'vue-router'
import Fuj from '../views/fujin.vue'
import waimai from '../views/waimai.vue'
import sousuo from '../views/sousuo.vue'
import dingdan from '../views/dingdan.vue'
import wode from '../views/wode.vue'
import rest from '../views/rest.vue'
import logins from '../views/logins.vue'
import home from '../views/home.vue'
import city from '../views/city.vue'

Vue.use(VueRouter)

const routes = [
{
		path: '/',
		name: 'home',
		component: home
	},
	{
		path: '/city/:id/:name',
		name: 'city',
		component: city
	}
,{
	path: '/fujin',
	name: 'fujin',
	component: Fuj,
	children: [{
			path: 'waimai/:jwd',
			component: waimai,
		},
		{
			path: 'sousuo',
			component: sousuo,
		},
		{
			path: 'dingdan',
			component: dingdan,
		},
		{
			path: 'wode',
			component: wode,
		},
	]
},
{
	path:'/login',
	name:'rest',
	component:rest
},
{
	path:'/logins',
	name:'logins',
	component:logins
}]

const router = new VueRouter({
	routes
})

export default router