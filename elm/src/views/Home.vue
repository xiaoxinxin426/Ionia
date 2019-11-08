<template>
	<div id="home">
		<h_nav>
			<div slot="left">
				ele.me
			</div>
			<div slot="right">
				<router-link to="/logins">
					登陆
				</router-link>
				|
				<router-link to="/logins">
					注册
				</router-link>
			</div>
		</h_nav>
		<!-- 定位 header -->
		<div class="header">
			<div class="no1">
				<span>当前定位城市:</span>
				<span>定位不准时，请在城市列表中选择</span>
			</div>
			<div class="no2">
				<router-link :to="{name: 'city',params: {id:header.id,name:header.name}}">
					<span>{{header.name}}</span>
					<span>
						<i class="iconfont icon-zuo"></i>
					</span>
				</router-link>
			</div>
		</div>
		<!-- 热门 hot -->
		<div class="hot">
			<span>热门城市</span>
			<div>
				<span v-for="(item,index) in hots" :key="index">
					<router-link :to="{name: 'city',params: {id:item.id,name:item.name}}">
						{{item.name}}
					</router-link>
				</span>
			</div>
		</div>
		<!-- 排序 城市列表 list -->
		<div class="list">
			<div v-for="(i,key,index) in list" :key="index">
				<p>{{key}}<span>(按字母排序)</span></p>
				<div>
					<span v-for="(ii,index) in i" :key="index">
						<router-link :to="{name: 'city',params: {id:ii.id,name:ii.name}}">
							{{ii.name}}
						</router-link>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import h_nav from './../components/h_nav.vue'
	export default {
		name: 'home',
		components: {
			h_nav
		},
		data() {
			return {
				hots: [],
				header: '',
				list: ''
			}
		},
		created() {
			// 定位 header
			this.$http.get('http://elm.cangdu.org/v1/cities', {
				params: {
					type: 'guess'
				}
			}).then((data) => {
				this.header = data.data
			})
			// 热门 hot
			this.$http.get('http://elm.cangdu.org/v1/cities', {
				params: {
					type: 'hot'
				}
			}).then((data) => {
				this.hots = data.data
			})
			// list 城市列表
			this.$http.get('http://elm.cangdu.org/v1/cities', {
				params: {
					type: 'group'
				}
			}).then((data) => {
				this.list = data.data
				var obj = data.data
				var sorts = (obj) => {
					var news = Object.keys(obj).sort()
					var newObj = {}
					for (let i = 0; i < news.length; i++) {
						newObj[news[i]] = obj[news[i]]
					}
					return newObj
				}
				this.list = sorts(obj)
			})
		}
	}
</script>

<style>
	#home {
		background: #f5f5f5
	}

	#home a {
		text-decoration: none;
	}

	#home .header {
		margin: 1.25rem 0;
		background: white;
	}

	#home .header .no1 {
		color: #666;
		font-size: 0.4rem;
		overflow: hidden;
		height: 1.85rem;
		line-height: 1.85rem;
		border-bottom: 0.025rem solid #e4e4e4;
		padding: 0 1rem;
	}

	#home .header .no1 span:first-of-type,
	#home .header .no2 span:first-of-type {
		float: left;
	}

	#home .header .no1 span:last-of-type,
	#home .header .no2 span:last-of-type {
		float: right;
	}

	#home .header .no2 {
		height: 1.5rem;
		line-height: 1.5rem;
		padding: 0 1rem;
	}

	#home .header .no2 span{
		font-size: 0.45rem;
	}

	#home .header .no2 i {
		font-size: 0.45rem;
	}

	#home .hot {
		background: white;
		margin: 0 0 0.5rem 0;
	}

	#home .hot>span {
		display: block;
		height: 2rem;
		line-height: 2rem;
		font-size: 0.5rem;
		color: #666;
		border-bottom: 0.025rem solid #E4E4E4;
		padding: 0 0.5rem;
	}

	#home .hot>div {
		font-size: 0.35rem;
		overflow: hidden;
	}

	#home .hot>div span a,
	#home .list>div div span a{
		width: 25%;
		float: left;
		text-align: center;
		height: 2rem;
		line-height: 2rem;
		border: 0.025rem solid #e4e4e4;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 0 0.25rem;
	}

	#home .list {}

	#home .list>div {
		margin: 0 0 0.25rem 0;
		background: white;
		overflow: hidden;
	}

	#home .list>div p {
		font-size: 0.55rem;
		height: 1.75rem;
		line-height: 1.75rem;
		border-bottom: 0.025rem solid #e4e4e4;
		padding: 0 0.25rem;
	}

	#home .list>div p span a{
		font-size: 0.5rem;
		color: #666;
	}

	#home .list>div div {
		font-size: 0.55rem;
	}
</style>
