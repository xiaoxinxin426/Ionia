<template>
	<div class="register clearfix">
		<headBer>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go">
				</i>
			</div>
			<div slot="title">
				{{$route.params.name}}
			</div>
			<div slot="right">
				<router-link to="/">
					切换城市
				</router-link>
			</div>
		</headBer>
		<ul class="c_kj">
			<li class="c_pl">
				<input type="text" placeholder="账号" v-model="user">
			</li>
			<li style="position:relative" class="c_pl">
				<input :type="a" placeholder="密码" v-model="pass">
				<div class="xian" :style="{background:swit?'red':'blue'}" @click="xian()">
					<span class="yuan" :class="swit?'red':'blue'"></span>
				</div>
			</li>
			<li class="c_pl">
				<input class="inputli" type="text" placeholder="验证码" v-model="yanmodel">
				
				<span class="j_ik" @click="random">看不清<br />换一张</span>
				<img class="yanzhengimg" :src="yanurl" alt="">
			</li>
		</ul>
		<div class="wen">
			<p>温馨提示：未注册的账号，登录时将自动注册</p>
			<p>注册过的账户可凭账号密码登录</p>
		</div>
		<button @click="handin" class="btn">确定</button>
		<router-link to="/login" style="overflow: hidden;">
			<p class="chong" @click="reset()">重置密码？</p>
		</router-link>

	</div>
</template>

<script>
	import headBer from '../components/h_nav.vue'
	export default {
		components: {
			headBer
		},
		name: 'logins',

		data() {
			return {
				user: '',
				pass: '',
				yanurl: '',
				yanmodel: '',
				swit: false,
				a: 'password'

			}
		},
		created() {
			this.random()
		},
		methods: {
			random() {
				this.$http.post('https://elm.cangdu.org/v1/captchas')
					.then(data => {
						this.yanurl = data.data.code
					})
			},
			go(){
				this.$router.go(-1)
			},
			handin() {
				if(this.user == '') {
					alert('请输入账号');
					return;
				} else if(this.pass == '') {
					alert('请输入密码')
					return;
				} else if(this.yanmodel == '') {
					alert('请输入验证码')
					return;
				} else {
					this.$http.post('https://elm.cangdu.org/v2/login', {
						user: this.user,
						pass: this.pass,
						captcha_code: this.verifyNumber
					}).then((data) => {
						console.log(data);
						if(data.data.message == '密码错误') {
							alert('登录失败');
						} else if(data.data.message == '验证码不正确') {
							alert('验证码错误');
						} else {
							alert('登录成功');
							this.$router.push({
								path: '/fujin/waimai/'+localStorage.ncl
							})
						}
					})

				}
			},
			reset() {
				this.pass = ''
			},
			xian() {
				this.swit = !this.swit
				if(this.swit) {
					this.a = 'text'
				} else {
					this.a = 'password'
				}
			}

		},
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	
	.clearfix:before,
	.clearfix:after {
		content: '';
		display: table;
	}
	
	.clearfix:after {
		clear: both;
	}
	
	.clearfix {
		zoom: 1;
	}
	
	.register {
		width: 100%;
		height: auto;
	}
	
	.red {
		left: 0px;
	}
	
	.blue {
		left: 1rem;
	}
	.c_kj{
		width: 100%;
	}
	
	.c_pl {
		width: 100%;
		height: 2.75rem;
		border-bottom: 1px solid #ccc;
		background: #fff;
		font-size: 0.875rem;
		color: #3d3d3d;
		padding-left: 0.75rem;
		box-sizing: border-box;
	}
	
	.c_pl input {
		height: 0.875rem;
		width: 40%;
		font-size: 0.875rem;
		outline: none;
		margin-top: 0.5rem;
		border: none;
	}
	
	.btn {
		width: 95%;
		height: 2.5rem;
		background: rgb(14, 196, 75);
		font-size: 0.75rem;
		box-sizing: border-box;
		border-radius: 0.25rem;
		margin: 0 2.5%;
		color: #fff;
	}
	
	.wen {
		width: 80%;
		height: 3.75rem;
		box-sizing: border-box;
		margin-left: 0.625rem;
	}
	
	.wen p {
		color: red;
		font-size: 0.625rem;
		line-height: 1.5rem;
	}
	
	.chong {
		width: 10rem;
		height: 1.25rem;
		box-sizing: border-box;
		float: right;
		margin: 1.25rem;
		line-height: 1.25rem;
		text-align: right;
		color: blue;
	}
	
	.xian {
		width: 2rem;
		height: 0.75rem;
		background: red;
		position: absolute;
		right: 1.25rem;
		top: 0.875rem;
		transition: .35s;
		border-radius: 0.5rem;
	}
	
	.yuan {
		display: block;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: #000;
		position: absolute;
		top: -0.125rem;
	}
	
	.inputli {
		float: left;
		margin-right: 0.5rem;
	}
	
	.yanzhengimg {
		float: right;
		display: inline-block;
		margin-right: 1.5rem;
		margin-top: 0.8rem;
	}
	.j_ik{
		margin-top: 0.6rem;
		float: right;
		font-size: .55rem;
		display: inline-block;
		margin-right: 1rem;
    color: #666;
	}
</style>