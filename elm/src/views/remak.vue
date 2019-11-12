<template>
	<div id="beizhu" style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				订单备注
			</div>
		</h_nav>
		<div class="top">
			<div class="top_1">
				<p>快速备注</p>
			</div>
			<div class="top_2">
				<div class="la">
					<ul>
						<li @click="fn(i,$index)" :class="[inx==$index?'j_kln':'']" v-for="(i,$index) in arf" :key="$index">{{i}}</li>
					</ul>
				</div>
			</div>

			<div class="xc">
				<p @click="fnh('不要香菜',1)" :class="[inxb==1?'j_kln':'']">不要香菜</p>
			</div>

			<div class="cu">
				<ul>
					<li @click="inxs=1" :class="[inxs==1?'j_kln':'']">不要洋葱</li>
					<li @click="inxa=2" :class="[inxa==2?'j_kln':'']">多点醋</li>
					<li @click="inxt=3" :class="[inxt==3?'j_kln':'']">多点葱</li>
				</ul>
			</div>
			<div class="bing">
				<ul>
					<li @click="fnq(i,$index)" :class="[inxd==$index?'j_kln':'']" v-for="(i,$index) in arr" :key="$index">{{i}}</li>
				</ul>
			</div>
		</div>
		<div class="other">
			<div class="top_1">
				<p>其他备注</p>
			</div>
			<div class="top_2">
				<div class="la">
					<input type="text" placeholder="请输入备注内容(可不填)" v-model="values" @click="op">
				</div>
			</div>
			<div class="tijiao" @click="op">
				<p>确定</p>
			</div>
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
				values: '',
				inx: '',
				inxs: '',
				inxd: '',
				inxb: '',
				arr: ['去冰', '少冰'],
				arf: ['不要辣', '少点辣', '多点辣'],
				inxa:'',
				inxt:''
			}

		},
		methods: {
			go() {
				this.$router.go(-1)
			},
			fn(i, b) {
				this.$store.commit('beiz', i)
				this.inx = b
			},
			fnq(i, b) {
				this.$store.commit('beiz', i)
				this.inxd = b
			},
			fnh(i, b) {
				this.$store.commit('beiz', i)
				this.inxb = b
			},
			op() {
				this.$store.commit('beiz', this.values)
			}
		},
	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		box-sizing: border-box;
	}
	
	#beizhu {
		width: 100%;
		background: #f5f5f5;
		height: auto;
	}
	
	.top {
		width: 100%;
		height: auto;
		background: #fff;
		position: relative;
		padding-bottom: 40px;
	}
	
	.top_1 {
		width: 100%;
		height: auto;
	}
	
	.top_1 p {
		color: #4c4c4c;
		font-size: 0.675rem;
		padding: 20px;
	}
	
	.top_2 {
		width: 100%;
		height: auto;
		padding-left: 0.9375rem;
	}
	
	.top_2 ul {
		width: 55%;
		height: 1.5rem;
		border: 1px solid #3190e8;
		border-radius: 0.325rem;
		line-height: 1.5rem;
	}
	
	.top_2 ul li {
		float: left;
		font-size: 0.55rem;
		width: 2.6rem;
		height: 100%;
		text-align: center;
	}
	
	.top_2 ul li:nth-child(2) {
		border-left: 1px solid #3190e8;
		border-right: 1px solid #3190e8;
	}
	
	.xc {
		width: 20%;
		height: 1.5rem;
		border: 1px solid #3190e8;
		border-radius: 0.325rem;
		line-height: 1.5rem;
		position: absolute;
		right: 3rem;
		top: 2.6rem;
	}
	
	.xc p {
		font-size: 0.55rem;
		text-align: center;
	}
	
	.cu {
		width: 100%;
		height: auto;
		margin-top: 0.9375rem;
		margin-left: 0.9375rem;
	}
	
	.cu ul li {
		width: 20%;
		height: 1.5rem;
		border: 1px solid #3190e8;
		border-radius: 0.325rem;
		line-height: 1.5rem;
		float: left;
		font-size: 0.55rem;
		text-align: center;
		margin-left: 0.9375rem;
	}
	
	.cu ul li:nth-child(1) {
		margin-left: 0;
	}
	
	.bing {
		width: 90%;
		height: auto;
		margin-top: 3.25rem;
		margin-left: 0.9375rem;
		box-sizing: border-box;
	}
	
	.bing ul {
		width: 30%;
		height: 1.5rem;
		border: 1px solid #3190e8;
		border-radius: 0.325rem;
	}
	
	.bing ul li {
		width: 45%;
		height: 1.5rem;
		line-height: 1.5rem;
		float: left;
		font-size: 0.55rem;
		text-align: center;
	}
	
	.bing ul li:nth-child(1) {
		border-right: 1px solid #3190e8;
	}
	
	.other {
		width: 100%;
		height: auto;
		margin-top: 0.625rem;
		background: #fff;
		position: relative;
	}
	
	.other input {
		width: 90%;
		margin-left: .325rem;
		line-height: -1.25rem;
		height: 5.5rem;
		background: #f9f9f9;
		border: 1px solid #eeeeee;
		outline: none;
		color: #757575;
		text-indent: 1rem;
		padding-top: -12px;
		border-radius: .625rem;
	}
	
	.tijiao {
		width: 85%;
		margin: 1.0625rem auto;
		height: 1.6rem;
		background: #4cd964;
		color: #ffffff;
		border-radius: .375rem;
		text-align: center;
		line-height: 1.6rem;
		font-size: .675rem;
	}
	
	.j_kln {
		background: #3190e8;
		color: #FFFFFF;
	}
</style>