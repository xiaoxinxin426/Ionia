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
import yue from '../views/yue.vue'
import jifen from '../views/jifen.vue'
import yuc from '../views/yuc.vue'
import jif from '../views/jif.vue'
import donload from '../views/donload.vue'
import serve from '../views/serve.vue'
import ser from '../views/ser.vue'
import Vip from '../views/vip.vue'
import users from '../views/users.vue'
import xiug from '../views/xiug.vue'
import filter from '../views/filter.vue'
import vips from '../views/vips.vue'
import shouh from '../views/shouh.vue'
import shoud from '../views/shoud.vue'
import sou from '../views/sou.vue'
import shoplist from '../views/shoplist.vue'
import yuh from '../views/yh.vue'
import ysm from '../views/ysm.vue'
import hist from '../views/hist.vue'
import dui from '../views/dui.vue'
import tuij from '../views/tuij.vue'
import sjq from '../views/sjq.vue'
import buy from '../views/buy.vue'
import duip from '../views/duip.vue'
import jilu from '../views/jilu.vue'
import jies from '../views/jies.vue'
import xshouh from '../views/xshouh.vue'
import tianjx from '../views/tianjx.vue'
import so from '../views/so.vue'
import remak from '../views/remak.vue'
import fap from '../views/fap.vue'
import shop_msg from '../views/shop_msg.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: home
	},
	{
		path: '/city/:id/:name',
		name: 'city',
		component: city
	}, {
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
		path: '/login',
		name: 'rest',
		component: rest
	},
	{
		path: '/logins',
		name: 'logins',
		component: logins
	},
	{
		path: '/yue',
		name: 'yue',
		component: yue,
		children: [{
			path: 'yuc',
			name: yuc,
			component: yuc
		}]
	},
	{
		path: '/jifen',
		name: 'jifen',
		component: jifen,
		children: [{
			path: 'jif',
			name: jif,
			component: jif
		}]
	},
	{
		path: '/donload',
		name: 'donload',
		component: donload,
	},
	{
		path: '/serve',
		name: 'serve',
		component: serve,
		children: [{
			path: 'ser',
			name: 'ser',
			component: ser
		}]
	},
	{
		path: '/vip',
		name: 'vip',
		component: Vip,
		children:[
			{
				path:'vip_s',
				name:'vip_s',
				component:vips
			},
			{
				path:'buy',
				name:'buy',
				component:buy
			},
			{
				path:'duip',
				name:'duip',
				component:duip
			},
			{
				path:'jilu',
				name:'jilu',
				component:jilu
			}
		]
	},
	{
		path: '/users',
		name: 'users',
		component: users,
		children: [{
			path: 'xiug',
			component: xiug
		},
		{
			path:'shouh',
			component:shouh,
			children:[
				{
					path:'shoud',
					component:shoud,
					children:[
						{
							path:'sou',
							component:sou
						}
					]
				}
			]
		}]
	},
	{
		path: '/filter/:id/:title/:jwd',
		name: 'filter',
		component: filter
	},
	{
		path:'/shoplist/:id',
		name:'shoplist',
		component:shoplist
	},
	{
		path:'/yuh',
		component:yuh,
		children:[
			{
				path:'ysm',
				component:ysm
			},
			{
				path:'hist',
				component:hist
			},
			{
				path:'dui',
				component:dui
			},
			{
				path:'tuij',
				component:tuij
			},
			{
				path:'sjq',
				component:sjq
			}
		]
	},
	{
		path:'/jies',
		component:jies,
		children:[{
			path:'xshouh',
			component:xshouh,
			children:[{
				path:'tianjx',
				component:tianjx,
				children:[{
					path:'so',
					component:so
				}]
			}]
		},{
			path:'remak',
			component:remak
		},{
			path:'fap',
			component:fap
		},
		{
			path: '/shop_msg/:id',
			component: shop_msg
		}]
	}
]

const router = new VueRouter({
	routes
})

export default router