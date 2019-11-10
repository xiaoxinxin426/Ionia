<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #f5f5f5;min-height: 100%;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				兑换红包
			</div>
		</h_nav>
		<div class="j_bjk">
			<input type="text" placeholder="请输入兑换码" v-model="shur" />
		</div>
		<div class="j_lmk">
			<input type="text" placeholder="验证码" v-model="yzm" />
			<div>
				<img :src="img_url" alt="" />
				<div @click="fn">
					<p>看不清</p>
					<p>换一张</p>
				</div>
			</div>
		</div>
		<div class="j_imk" :class="[inx==1?'j_vb':'j_imk']" @click="fnc">兑换</div>
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
			fn() {
				this.axios.post('https://elm.cangdu.org/v1/captchas')
					.then(data => {
						this.img_url = data.data.code
					})
			},
			fnc() {
				if(this.inx == 1 && this.yzm != '') {
					
					this.$router.go(-1)
					alert('兑换成功')
				} else {
					alert ('请填完整数据')
				}
			}
		},
		data() {
			return {
				img_url: '',
				yzm: '',
				shur: '',
				inx: ''
			}
		},
		created() {
			this.axios.post('https://elm.cangdu.org/v1/captchas')
				.then(data => {
					this.img_url = data.data.code
				})
		},
		watch: {
			yzm(a) {
				console.log(a)
				if(a.length >= 4) {
					this.inx = 1
				} else {
					this.inx = 2
				}
			}
		}
	}
</script>

<style>
	.j_bjk {
		margin-top: .7rem;
		padding: 0 .5rem;
	}
	
	.j_bjk>input {
		width: 100%;
		font-size: .7rem;
		color: #666;
		padding: .6rem .4rem;
		border-radius: .15rem;
		border: none;
	}
	
	.j_lmk {
		padding: 0 .5rem;
		height: 2.2rem;
		display: -ms-flexbox;
		display: flex;
		margin-top: .7rem;
	}
	
	.j_lmk>input {
		font-size: .7rem;
		color: #666;
		padding: .6rem .4rem;
		border-radius: .15rem;
		flex: 3;
		border: none;
	}
	
	.j_lmk>div {
		display: flex;
		align-items: center;
		flex: 2;
		margin-left: .3rem;
		background-color: #fff;
		padding-left: .2rem;
		border-radius: .15rem;
	}
	
	.j_lmk>div>div {
		display: flex;
		flex-wrap: wrap;
		width: 2rem;
		justify-content: center;
	}
	
	.j_lmk>div p:nth-of-type(1) {
		font-size: .55rem;
		color: #666;
	}
	
	.j_lmk>div p:nth-of-type(2) {
		color: #3b95e9;
		margin-top: .2rem;
		font-size: .55rem;
	}
	
	.j_imk {
		background-color: #ccc;
		font-size: .7rem;
		color: #fff;
		text-align: center;
		margin: 0 .7rem;
		line-height: 1.8rem;
		border-radius: .2rem;
		margin-top: .7rem
	}
	
	.j_vb {
		background-color: #4cd964;
	}
</style>