<template>
	<div style="background: #F5F5F5;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				账户信息
			</div>
		</h_nav>
		<div class="j_o">
			<input type="file" @change="uploadImg" />
			<h2>头像</h2>
			<div>
				<img :src="img_url" alt="" />
				<span>></span>
			</div>
		</div>
		<div class="j_k" @click="gotos">
			<h2>用户名</h2>
			<div>
				<p>{{names}}</p>
				<span>></span>
			</div>
		</div>
		<div class="j_k" style="border-bottom: solid 0.025rem #CCCCCC;" @click="shouh">
			<h2>收货地址</h2>
			<div>
				<span>></span>
			</div>
		</div>
		<div class="j_zhk">
			账号绑定
		</div>
		<div class="j_k" style="border-bottom: solid 0.025rem #CCCCCC;" @click="fn">
			<h2 class="iconfont icon-shouji" style="color: #0073FF;"><span style="color: #666;"  @click="type=true">手机</span></h2>
			<div>
				<span>></span>
			</div>
		</div>
		<div class="j_zhk">
			安全设置
		</div>
		<div class="j_k" style="border-bottom: solid 0.025rem #CCCCCC;" @click="restm">
			<h2>登陆密码</h2>
			<div>
				<p>修改</p>
				<span>></span>
			</div>
		</div>
		<div class="j_tc" @click="open">
			退出登陆
		</div>
		<router-view></router-view>
		<!---->
			<a_t v-if="type" @type='an'>
				<p slot="cz">确定</p>
			</a_t>
		<!---->
	</div>
</template>
<script>
	import h_nav from './../components/h_nav.vue'
	import a_t from './../components/alert.vue'
	export default {
	
		components: {
			h_nav,a_t
		},
		methods: {
				an(a){
				this.type=a
			},
			go() {
				location.href = "#/fujin/wode"
			},
			uploadImg(e) {
				var file = e.target.files[0];
				var reader = new FileReader();
				reader.readAsDataURL(file);
				var that = this
				reader.onload = function(e) {
					that.img_url = e.target.result
					localStorage.img_url = that.img_url
				}
			},
			open() {
				this.$confirm('是否退出登陆', '提示', {
					confirmButtonText: '退出登录',
					cancelButtonText: '再等等',
					type: '等一下哇'
				}).then(() => {
					this.exit()
				}).catch(() => {

				});
			},
			exit() {
				location.href = '#/fujin/wode'
				localStorage.inx = 2
				localStorage.img_url = '//elm.cangdu.org/img/default.jpg'
				localStorage.name = ''
			},
			gotos() {
				location.href = '#/users/xiug'
			},
			restm() {
				location.href = '#/login'
			},
			fn() {
				// alert('请在手机APP中设置')
			},
			shouh() {
				location.href = '#/users/shouh'
			}
		},
		data() {
			return {
				type:false,
				names: localStorage.name,
				img_url: localStorage.img_url
			}
		},
		computed: {
			listenshowpage1() {
				return localStorage.name;
			},

		},
		watch: {
			listenshowpage1: function(a) {
				console.log(a)
			}
		},
	}
</script>
<style>
	.j_o input {
		display: block;
		position: absolute;
		opacity: 0;
		top: 2.35rem;
		left: 0;
		width: 100%;
		height: 3.1rem
	}
	
	.j_o {
		margin-top: .4rem;
		padding: .5rem .4rem;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-ms-flex-align: center;
		align-items: center;
		border-top: 1px solid #ddd;
		background: #fff;
	}
	
	.j_o h2 {
		font-size: .6rem;
		color: #333;
		font-weight: 500;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.j_o img {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		vertical-align: middle;
	}
	
	.j_o span {
		width: .66667rem;
		height: 1.4rem;
		position: relative;
		top: .44rem;
	}
	
	.j_k {
		margin-top: 0;
		padding: .3rem .4rem;
		border-top: solid 0.025rem #CCCCCC;
		overflow: hidden;
		background: #FFFFFF;
	}
	
	.j_k h2 {
		font-size: .6rem;
		color: #333;
		font-weight: 500;
		display: -ms-flexbox;
		display: flex;
		align-items: center;
		float: left;
		line-height: 1.25rem;
	}
	
	.j_k div {
		display: flex;
		justify-content: left;
		float: right;
	}
	
	.j_k div p {
		text-align: left;
		line-height: 1.39rem;
		font-size: .7rem;
		color: #999;
		margin-right: .2rem;
		font-weight: 100;
		font-family: Arial;
	}
	
	.j_k div span {
		width: .66667rem;
		height: 1.4rem;
		position: relative;
		top: 0;
	}
	
	.j_zhk {
		padding: .4rem;
		font-size: .5rem;
		color: #666;
	}
	
	.j_tc {
		width: 96%;
		margin: 1.3rem auto 0;
		line-height: 1.5rem;
		border-radius: 5px;
		text-align: center;
		background: #d8584a;
		font-size: .6rem;
		color: #fff;
	}
</style>