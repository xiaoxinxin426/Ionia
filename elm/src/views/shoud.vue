<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				新增地址
			</div>
		</h_nav>
		<div class="j_in">
			<input type="text" placeholder="请填写你的姓名" v-model="names" />
			<input type="text" placeholder="小区/写字楼/学校等" v-model="school" @click="goto" />
			<input type="text" placeholder="请填写详细送餐地址" v-model="dizhi" />
			<input type="text" placeholder="请填写能联系到您的手机号" v-model="tel" />
			<input type="text" placeholder="备用联系电话（选填）" v-model="beitel" />
		</div>
		<div class="j_butg" @click="fn">
			<span>新增地址</span>
		</div>
		<router-view></router-view>
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
				names: '',
				school: this.$store.state.names,
				dizhi: '',
				tel: '',
				beitel: ''
			}
		},
		methods: {
			go() {
				this.$router.go(-1)
			},
			fn() {
				if(this.names == '' || this.school == '' || this.dizhi == '' || this.tel == '' || this.beitel == '') {
					alert('请将信息填完整后重试')
				} else {
					localStorage.sname = this.names
					localStorage.school = this.school
					localStorage.dizhi = this.dizhi
					localStorage.tel = this.tel
					localStorage.beitel = this.beitel
					this.$router.go(-1)
				}

			},
			goto() {
				location.href = "#/users/shouh/shoud/sou"
			}
		},
		computed: {
			listenshowpage1() {
				return this.$store.state.names;
			},

		},
		watch: {
			listenshowpage1: function(a) {
				this.school = a
			}
		},
	}
</script>

<style>
	.j_in input {
		display: block;
		width: 15rem;
		font-size: .6rem;
		margin: 0.75rem auto 0;
		padding: .3rem;
		background: #f2f2f2;
		border: 1px solid #ddd;
		border-radius: 3px;
	}
	
	.j_butg {
		margin: .6rem auto;
		width: 15rem;
		background: #4cd964;
		border-radius: 3px;
		text-align: center;
	}
	
	.j_butg span {
		font-size: .6rem;
		color: #fff;
		line-height: 1.6rem;
		background: none;
		font-weight: 700;
		opacity: .6;
	}
</style>