<template>
	<div id="nav">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				我的优惠
			</div>
		</h_nav>
		<div style="background: #FFFFFF;">
		<ul class="j_yh">
			<li v-for="(i,index) in arr" :key="index" :class="{active:isindex==index}" @click="isindex=index">{{i}}</li>
		</ul>
		</div>
		<div style="background: #f5f5f5;">
			<div v-show="isindex==0" class="main">
				<div>
					<div class="shuoming" @click="fnc">
						<div class="wenhao">
							<p>？</p>
						</div>
						<div class="shangjia">
							<p>红包说明</p>
						</div>
					</div>
					<div class="daoqi">
						<p>
							有
							<span>3</span>个红包即将到期
						</p>
					</div>
					<div class="hb">
						<div class="numb">
							<p>￥1.0</p>
							<span>满20元可用</span>
						</div>
						<div class="time">
							<p>分享红包</p>
							<span>2099年13月32日过期</span>
							<span>限收货手机号为：121212121</span>
							<h4>剩3日</h4>
						</div>
					</div>
					<div class="hb">
						<div class="numb">
							<p>￥2.0</p>
							<span>满20元可用</span>
						</div>
						<div class="time">
							<p>分享红包</p>
							<span>2099年13月32日过期</span>
							<span>限收货手机号为：121212121</span>
							<h4>剩3日</h4>
						</div>
					</div>
					<div class="hb">
						<div class="numb">
							<p>￥4.5</p>
							<span>满20元可用</span>
						</div>
						<div class="time">
							<p>分享红包</p>
							<span>2099年13月32日过期</span>
							<span>限收货手机号为：121212121</span>
							<h4>剩3日</h4>
						</div>

					</div>
					<div class="xianzhi">
						<p>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
					</div>
					<div class="lishi" @click="hist">
						<p>
							查看历史红包
							<span>></span>
						</p>
					</div>
				</div>
				
			</div>
			<div class="foot">
					<div class="le" @click="dui">
						<p>兑换红包</p>
					</div>
					<div class="ri" @click="tuij">
						<p>推荐有奖</p>
					</div>
				</div>
		</div>
		<div v-show="isindex==1" class="main2">
			<div class="shuoming">
				<div class="wenhao">
					<p>?</p>
				</div>
				<div class="shangjia" @click="sjq">
					<p>商家代金券说明</p>
				</div>
			</div>
			<div class="use">
				<div class="imgs"></div>
				<p>无法使用代金券</p>
				<span>非客户端或客户端版本过低</span>
				<input type="submit" value="下载或升级客户端" @click="fn" />
			</div>
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
		methods: {
			go() {
				this.$router.go(-1)
			},
			fn() {
				location.href = "#/donload"
			},
			fnc(){
				location.href = '#/yuh/ysm'
			},
			hist(){
				location.href = '#/yuh/hist'
			},
			dui(){
				location.href = '#/yuh/dui'
			},
			tuij(){
				location.href = '#/yuh/tuij'
			},
			sjq(){
				location.href = '#/yuh/sjq'
			}
		},
		data() {
			return {
				isindex: 0,
				arr: ["红包", "商家代金券"]
			};
		}
	};
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	#nav {
		background: #f5f5f5;
		height: 100%;
		width: 100%;
	}
	
	.main {
		width: 90%;
		margin: 0.625rem auto;
		position: relative;
	}
	
	.main2 {
		width: 80%;
		margin: 0 auto;
		position: relative;
		height: 100%;
	}
	
	.j_yh {
		width: 80%;
		margin: 0 auto;
		height: 2rem;
		background: #ffffff;
	}
	
	.j_yh li {
		float: left;
		font-size: 0.6rem;
		box-sizing: border-box;
		margin-left: 5rem;
		line-height: 1.5rem;
	}
	
	.j_yh li:nth-child(1) {
		margin-left: 40px;
	}
	
	.active {
		color: blue;
		border-bottom: 1px solid blue;
	}
	
	.shuoming {
		position: absolute;
		top: 0.625rem;
		right: 0;
	}
	
	.wenhao {
		width: 0.625rem;
		height: 0.625rem;
		border-radius: 50%;
		background: blue;
		float: left;
	}
	
	.wenhao p {
		color: #ffffff;
		font-size: 0.325rem;
		line-height: 0.625rem;
		margin-left: 0.1875rem;
	}
	
	.shangjia {
		float: left;
		height: 0.625rem;
	}
	
	.shangjia p {
		font-size: 0.45rem;
		color: blue;
		line-height: 0.625rem;
		margin-left: 0.3125rem;
	}
	
	.use {
		width: 60%;
		height: auto;
		position: absolute;
		top: 6.25rem;
		left: 50%;
		margin-left: -30%;
	}
	
	.use .imgs {
		width: 1.875rem;
		height: 1.875rem;
		background: aqua;
		border-radius: 50%;
		margin: 0 auto;
	}
	
	.use p {
		font-size: 0.565rem;
		text-align: center;
		/* line-height: 1rem; */
		margin-top: 0.625rem;
	}
	
	.use span {
		font-size: 0.525rem;
		color: #cccccc;
		text-align: center;
		margin-top: 0.225rem;
		display: block;
	}
	
	.use input {
		width: 6rem;
		color: #ffffff;
		margin: 10px auto;
		display: block;
		background: green;
		outline: none;
		border: none;
		height: 1.25rem;
	}
	
	.daoqi {
		margin-top: 15px;
		display: inline-block;
	}
	
	.daoqi p {
		font-size: 0.525rem;
		color: #666;
	}
	
	.daoqi span {
		color: red;
	}
	
	.hb {
		width: 100%;
		background: #ffffff;
		margin: 0.625rem auto;
		padding: 0.625rem;
		border-top: 2px solid red;
		overflow: hidden;
	}
	
	.numb {
		width: 30%;
		float: left;
	}
	
	.numb p {
		font-size: 1rem;
		color: red;
		padding-top: 0.625rem;
	}
	
	.numb span {
		font-size: 0.325rem;
		color: #666;
		display: block;
		margin-top: 0.25rem;
	}
	
	.time {
		width: 70%;
		float: left;
		font-size: 0.625rem;
		position: relative;
	}
	
	.time p {
		font-size: 0.55rem;
		color: #666;
		padding-top: 0.625rem;
	}
	
	.time span {
		font-size: 0.325rem;
		color: #666;
		display: block;
		margin-top: 0.25rem;
	}
	
	.time h4 {
		color: red;
		position: absolute;
		right: 10px;
		top: 0.5rem;
		font-weight: normal;
	}
	
	.xianzhi {
		width: 100%;
		height: 1.25rem;
		background: #CCCCCC;
		margin-top: -0.625rem;
	}
	
	.xianzhi p {
		color: #666;
		font-size: 0.2rem;
		text-align: center;
		line-height: 1.25rem;
	}
	
	.lishi {
		width: 100%;
		margin-top: 0.625rem;
	}
	
	.lishi p {
		text-align: center;
		color: #666;
		font-size: 0.55rem;
	}
	
	.foot {
		width: 100%;
		overflow: hidden;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	
	.foot .le {
		width: 50%;
		float: left;
		border-right: solid 0.025rem #f5f5f5;
	}
	
	.foot .ri {
		width: 50%;
		float: left;
	}
	
	.foot .le p {
		font-size: 0.55rem;
		text-align: center;
		line-height: 1.875rem;
		color: #666;
	}
	
	.foot .ri p {
		font-size: 0.55rem;
		text-align: center;
		line-height: 1.875rem;
		color: #666;
	}
</style>