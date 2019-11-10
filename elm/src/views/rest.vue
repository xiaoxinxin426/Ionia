<template>
	<div class="ly" style="background:#f5f5f5">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				重置密码
			</div>
		</h_nav>
		<div class="c_center">
			<div class="c_and_pass"><input class="c_pa" type="text" v-model="am.us_name" placeholder="账号"></div>
			<div class="c_and_pass"><input class="c_pa" type="text" v-model="am.old_pass" placeholder="旧密码"></div>
			<div class="c_and_pass"><input class="c_pass" type="text" v-model="am.new_pass" placeholder="请输入新密码"></div>
			<div class="c_and_pass"><input class="confirm" type="text" v-model="am.con" placeholder="请确定密码"></div>
			<div class="c_and_pass">
				<div class="ly_left">
					<input class="auth" type="text" v-model="am.cap" placeholder="验证码" style="padding-top: 0.85rem;">
					<div class="c_right">
						<span style="float:left">
                        <img :src="cap_img" alt="">
                    </span>
						<button style="float:right;margin-right: 0.5rem;" @click='cap_exch'>看不清<br><span>换一张</span></button>
					</div>
				</div>

			</div>
		</div>
		<div class="yes" @click='amend'>确认修改</div>
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
				arr: [],
				cap_img: '',
				am: {
					us_name: '',
					old_pass: '',
					new_pass: '',
					con: '',
					cap: ''
				}
			}
		},
		mounted() {
			this.cap()
		},
		methods: {
			//获取验证码
			cap() {
				this.axios.post('https://elm.cangdu.org/v1/captchas').then((data) => {
					console.log(data);
					this.cap_img = data.data.code
				})
			},
			//更新验证码
			cap_exch() {
				this.cap()
			},
			amend() {
				types = true
				for(let key in this.am) {
					if(this.am[key] == '') {
						var types = false;
					}
				}
				if(types) {
					this.axios.post('https://elm.cangdu.org/v2/changepassword', {
						username: this.am.us_name,
						oldpassWord: this.am.old_pass,
						newpassword: this.am.new_pass,
						confirmpassword: this.am.con,
						captcha_code: this.am.cap
					}, {
						emulateJSON: true
					}).then((data) => {
						console.log(data);
						alert(data.data.message)
					})
				} else {
					alert('缺失')
				}

			},
			go() {
				this.$router.go(-1)
			},
		},
	}
</script>

<style scoped>
	.c_center {}
	
	.c_and_pass {
		width: 100%;
		height: 2.4rem;
		line-height: 2.4rem;
		font-size: 0.75rem;
		border-bottom: 0.025rem solid #ccc;
		background: #fff;
		/* padding: 0px 5px; */
	}
	
	.c_and_pass>.c_pa {
		width: 100%;
		font-size: 0.75rem;
		padding: 0.375rem;
		border: none;
		outline: none;
		background: #fff;
	}
	
	.c_pass {
		width: 100%;
		font-size: 0.75rem;
		padding: 0.375rem;
		border: none;
		outline: none;
		background: #fff;
	}
	
	.confirm {
		width: 100%;
		font-size: 0.75rem;
		padding: 0.375rem;
		border: none;
		outline: none;
		background: #fff;
	}
	
	.auth {
		font-size: 0.75rem;
		padding-left: 0.375rem;
		border: none;
		outline: none;
		background: #fff;
		float: left;
		width: 60%;
	}
	
	.yes {
		width: 18rem;
		height: 2.25rem;
		line-height: 2.25rem;
		font-size: 0.75rem;
		background: green;
		border-radius: 0.15rem;
		color: #fff;
		border: none;
		cursor: pointer;
		text-align: center;
		margin: 1rem auto;
	}
	
	.c_right {
		width: 40%;
		float: right;
		overflow: hidden;
	}
	
	.c_right>span {
		width: 3.25rem;
		height: 1.75rem;
		display: inline-block;
	}
	
	.c_right>span>img {
		width: 100%;
		height: 100%;
	}
	
	.c_right>button {
		width: 2rem;
		height: 1.75rem;
		background: none;
		border: none;
		outline: none;
		font-size: 0.65rem;
		color: #000;
	}
	
	.c_right>button>span {
		color: darkcyan;
	}
	
	.c_left {
		float: left;
	}
</style>