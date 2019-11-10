<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				积分问题
			</div>
		</h_nav>
		<div class="countent">
			<div class="dqzh">成功兑换后将关联到当前帐号:{{names}}</div>
			<div class="dqzh" style="background-color: #fff;">
				<input v-model="ka" placeholder='请输入10位卡号' type="text" style="width: 16rem;height: 2rem;padding-left: 0.7rem;border: none;outline: none;">
			</div>
			<div class="dqzh" style="background-color: #fff;">
				<input v-model="kam" placeholder='请输入6位卡密' type="text" style="width: 16rem;height: 2rem;padding-left:0.7rem;border: none;outline: none;">
			</div>
			<p class='duihuan' :class="[inx==1?'j_vb':'duihuan']" @click="fnc">兑换</p>
			<h3>-温馨提示-</h3>
			<p class="sm">新兑换的会员服务，权益以「会员说明」为准。</p>
			<p class="sm">月卡:30次减免配送费。</p>
			<p class="sm">季卡:90次减免配送费。</p>
			<p class="sm">年卡:360次减免配送费。</p>
			<p class="sm" style="padding-right: 1.5rem;">＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
		</div>
	</div>
</template>
<script>
	import h_nav from './../components/h_nav.vue'
	export default {
		components: {
			h_nav
		},
		methods: {
			go() {
				this.$router.go(-1)
			},
			fnc() {
				alert('无效的卡号')
			}
		},
		data() {
			return {
				names: localStorage.name,
				ka: '',
				kam: '',
				inx: ''
			}
			
		},
		watch: {
			ka(a) {
				console.log(a)
				if(a.length >= 10) {
					this.inx = 1
				} else {
					this.inx = 2
				}
			}
		}
	}
</script>
<style>
	.sm {
		font-size: .5rem;
		color: #aaa;
		line-height: .8rem;
		text-align: left;
		padding-left: 0.95rem;
	}
	
	h3 {
		text-align: center;
		font-weight: 400;
		font-size: .65rem;
		color: #aaa;
		margin-top: 0.75rem;
		margin-bottom: .6rem;
	}
	
	body {
		background-color: #f5f5f5;
	}
	
	.duihuan {
		width: 14.6rem;
		margin-top: 0.7rem;
		height: 1.8rem;
		margin: 0 auto;
		background-color: #ccc;
		color: #fff;
		font-size: 0.7rem;
		line-height: 1.8rem;
		text-align: center;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	.countent {
		width: 16rem;
		height: auto;
	}
	
	.dqzh input {
		line-height: 2rem;
		border-bottom: 1px solid #333;
		font-size: 0.65rem;
	}
	
	.dqzh {
		width: 16rem;
		height: 2rem;
		padding-left: 0.7rem;
		font-size: 0.6rem;
		color: #333;
		background-color: #f5f5f5;
		line-height: 2rem;
		font-size: 0.65rem;
	}
	
	.j_vb {
		background-color: #4cd964;
		color: #FFFFFF;
	}
</style>