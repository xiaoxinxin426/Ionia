<template>
	<div id="city">
		<h_nav>
			<div slot="left">
				<router-link to="/">
					<i class="iconfont icon-toright"></i>
				</router-link>
			</div>
			<div slot="title">
				{{$route.params.name}}
			</div>
			<div slot="right">
				<router-link to="/">
					切换城市
				</router-link>
			</div>
		</h_nav>

		<!-- 搜索栏 search -->
		<div class="search">
			<div>
				<input type="text" v-model="val" placeholder="输入学校、商务楼、地址" @keydown.enter="search()" id="aa">
			</div>
			<div @click="search()">提交</div>
		</div>
		<!-- 搜索结果 arr -->
		<div class="search_list" v-if="type == true">
			<div v-for="(item,index) in arr" :key="index" @click="history(item)">
				<a :href="'#/fujin/waimai/'+item.geohash" @click="fn(item.geohash)" style="color: #666;">{{item.name}}</a><br />
				<a :href="'#/fujin/waimai/'+item.geohash" @click="fn(item.geohash)">{{item.address}}</a>
			</div>
		</div>
		<!-- 搜索历史 lists/list -->
		<div class="search_history" v-if="type == false">
			<div>搜索历史</div>
			<div style="background: #FFFFFF;">
				<div v-for="(item,index) in lists" :key="index">
					<a :href="'#/fujin/waimai/'+item.geohash" @click="fn(item.geohash)" style="color: #666;">{{item.name}}</a><br />
					<a :href="'#/fujin/waimai/'+item.geohash" @click="fn(item.geohash)">{{item.address}}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import h_nav from './../components/h_nav.vue'
	console.log(localStorage.list)
	export default {
		components: {
			h_nav
		},
		data() {
			return {
				arr: '', //搜索结果
				val: '',
				list: [], // 这是存放到data里的搜索历史
				lists: JSON.parse(localStorage.list || "{}"), // 这是存放到浏览器localStorage的搜索历史
				type: false
			}
		},
		activated() {
			this.type = false
			this.val = ''
		},
		methods: {
			search() {
				if(this.val) {
					this.type = true
					this.$http.get('http://elm.cangdu.org/v1/pois', {
						params: {
							type: 'search',
							city_id: this.$route.params.id,
							keyword: this.val
						}
					}).then((data) => {
						this.arr = data.data
						console.log(this.arr)
					})
				}
			},
			history(a) {
				this.list.push(a)
				for(var i = 0; i < this.list.length; i++) {
					for(var j = this.list.length - 1; j > 0; j--) {
						if(this.list[i].name == this.list[j].name && i != j) {
							this.list.splice(j, 1);
							localStorage.list = JSON.stringify(this.list)
						}
					}
				}
			},
			fn(i){
				this.$store.commit('addOrder',i)
			}
		}
	}
</script>

<style>
	#city .search {
		padding: 0 0.25rem;
		width: 90%;
		margin: 0.25rem auto;
	}
	
	#city .search input {
		border-radius: 0.125rem;
		height: 1.75rem;
		border: 1px solid #e4e4e4;
		width: 100%;
		font-size: 0.5rem;
		margin-top: 0.5rem;
	}
	#city .search>div:last-of-type {
		background: #3190e8;
		color: white;
		text-align: center;
		height: 2rem;
		line-height: 2rem;
		border-radius: 0.125rem;
		margin: 0.7rem 0;
		width: 100%;
		font-size: 0.35rem;
	}
	
	#city .search_list {
		border-bottom: 0.025rem solid #CCCCCC;
		padding: 0.25rem;
	}
	
	#city .search_list>div{
		margin-bottom: 1rem;
		border-bottom: solid 1px #CCCCCC;
	}
	#city .search_list p:first-of-type,
	#city .search_history p:first-of-type {
		color: #333;
		font-size: 0.4rem;
		padding: 0.125rem 0;
	}
	
	#city .search_list a:last-of-type,
	#city .search_history a:last-of-type {
		font-size: 0.35rem;
		color: #999;
		padding: 0.125rem 0;
	}
	
	#city .search_history {
		background: #f5f5f5
	}
	
	#city .search_history>div:first-of-type {
		font-size: 0.55rem;
		border-top: 0.025rem solid #e4e4e4;
		border-bottom: 0.025rem solid #e4e4e4;
		padding: 0.5rem 0.25rem;
	}
	
	#city .search_history>div:last-of-type {
		border-bottom: 0.025rem solid #e4e4e4;
		padding: 0.25rem;
	}
</style>