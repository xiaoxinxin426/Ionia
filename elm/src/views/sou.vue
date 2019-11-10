<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #f5f5f5;min-height: 100%;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				搜索地址
			</div>
		</h_nav>
		<div class="j_sin">
			<input type="text" placeholder="请输入小区/写字楼/学校等" v-model="val" />
			<p @click="fnc">确认</p>
		</div>
		<div class="j_wel">
			为了满足商家的送餐要求，建议您从列表中选择地址
		</div>
		<div class="j_kc">
			<p>找不到地址？</p>
			<p>请尝试输入小区、写字楼或学校名</p>
			<p>详细地址（如门牌号）可稍后输入哦。</p>
		</div>
		<div style="position: relative;z-index: 99;background: #f2f2f2;">
			<li style="border-bottom: 1px solid #ccc;padding: .4rem;" v-for="(i,$index) in arr" :key="$index" @click="goto(i.name)">
				<p style="margin-bottom: .2rem;font-size: .65rem;color: #969696;">{{i.name}}</p>
				<p style="font-size: .65rem;color: #969696;">{{i.address}}</p>
			</li>
		</div>
	</div>
</template>

<script>
	import h_nav from './../components/h_nav.vue'
	export default {
		components: {
			h_nav
		},
		data() {
			return {
				arr: '',
				val: ''
			}
		},
		methods: {
			go() {
				this.$router.go(-1)
			},
			fnc() {
				this.axios.get('http://elm.cangdu.org/v1/pois?type=nearby&keyword=' + this.val + '').then((data) => {
					console.log(data.data)
					this.arr = data.data
				})
			},
			goto(i) {
				this.$store.commit('addOrder', i)
				setTimeout(() => {
					this.$router.go(-1)
				}, 1000)
			}
		}
	}
</script>

<style>
	.j_wel {
		background: #fff6e4;
		font-size: .62rem;
		color: #ff883f;
		text-align: center;
		padding: .2rem 0;
	}
	
	.j_sin {
		display: flex;
		justify-content: space-between;
		background: #fff;
		padding: .5rem;
	}
	
	.j_sin input {
		display: block;
		width: 11.8rem;
		padding: .4rem;
		background: #f2f2f2;
		border: 1px solid #ddd;
		border-radius: 5px;
		font-size: .6rem;
	}
	
	.j_sin p {
		display: block;
		width: 3rem;
		background: #3199e8;
		font-size: .7rem;
		color: #fff;
		border-radius: 5px;
		text-align: center;
		line-height: 2rem;
	}
	
	.j_kc {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
	}
	
	.j_kc p {
		width: 100%;
		text-align: center;
		font-size: .7rem;
		color: #969696;
		margin-bottom: .4rem;
	}
</style>