<template>
	<div class="content">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				确认订单
			</div>
			<div slot="right">
				我的
			</div>
		</h_nav>
		<div class="j_nck" @click="gos">
			<!--<p class="g_km">请添加一个收获地址<span>></span></p>-->
			<div style="overflow: hidden;padding-left: .5rem;">
				<div style="float: left;width: 5%;text-align: left;margin-right:0.5rem">
					<span class="iconfont icon-location1" style="color: #3190e8;font-size:1rem"></span>
				</div>
				<div style="width: 80%;float: left;padding-top: 0.75rem;padding-left: 0.5rem;">
					<p class="j_ytr" style="overflow:hidden">
						<span>{{this.$store.state.addx.name}}</span>
						<span>先生</span>
						<span>{{this.$store.state.addx.phone}}</span>
					</p>
					<p class="j_hnm">
						<span>{{this.$store.state.addx.tag}}</span>
						<span>{{this.$store.state.addx.address_detail}}</span>
					</p>
				</div>
			</div>
		</div>
		<div class="head">
			<p>送达时间</p>
			<div class="deliver_time">
				<p class="item1">尽快送达 | 预计 11:38</p>
				<p class="item2"><span>蜂鸟专送</span></p>
			</div>
		</div>
		<div class="cont">
			<div class="cont-item1"><span>支付方式</span>
				<p @click="fn"><span>在线支付</span><span>></span></p>
			</div>
			<div class="cont-item2"><span>红包</span><span>暂时只在饿了么 APP 中支持</span></div>
		</div>
		<div class="result">
			<div style="margin-bottom: 20px;"><img :src="img_url"><span>{{names}}</span></div>
			<div class="list">
				<ul v-for="(a,index) in arr" :key='index'>
					<li>
						<p>{{a.name}}</p><span>x{{a.__v}}</span><span v-for="(m,index) in a.specfoods" :key="index">{{m.price}}</span>
					</li>
				</ul>
				<ul>
					<li>
						<p>餐盒<span></span><span style="float: right;margin-right: 30px;font-size:0.5rem;">￥{{num}}</span></p>

					</li>
					<li>
						<p>配送费<span></span><span style="float: right;margin-right: 30px;font-size:0.5rem">￥4</span></p>
					</li>
				</ul>
			</div>
			<div class="dingd">
				<p style="font-size:0.7rem;">订单<span style="font-size:0.7rem">￥{{totalPrice+num+4}}</span></p>
				<p style="font-size:0.7rem;">待支付<span style="font-size:0.7rem;">￥{{totalPrice+num+4}}</span></p>
			</div>
		</div>
		<div class="remark">
			<div><span style="width: 35%;">订单备注</span><span><span v-for="(i,$index) in texts" :key='$index'>{{i}}</span></span><span @click="tiaoz" style="margin-left: 4.7rem;text-align: right;">口味、偏好等></span></div>
			<div><span>发票抬头</span><span @click="tiaok">不需要开发票></span></div>
		</div>
		<div class="zhifu">
			<p>待支付 ￥<span>{{totalPrice+num+4}}</span></p>
			<span class="xiadan" @click="fnk">确认下单</span>
		</div>
		<mt-popup v-model="popupVisible" position="bottom" style="z-index: 2;bottom: 0;">
			<div class="j_moh">
				<p>支付方式</p>
				<div>
					<span>货到付款（商家不支持货到付款）</span><span style="float: right;margin-right: 0.75rem;" class="iconfont icon-duihao"></span>
				</div>
				<div>
					<span style="color: #333;">在线支付</span><span style="float: right;margin-right: 0.75rem;color:#4cd964" class="iconfont icon-duihao"></span>
				</div>
			</div>
		</mt-popup>
		<router-view></router-view>
	</div>
</template>
<script>
	import {
		mapState,
		mapGetters
	} from 'vuex'
	import h_nav from './../components/h_nav.vue'
	export default {
		components: {
			h_nav
		},
		methods: {
			go() {
				this.$router.go(-1)
			},
			gos() {
				location.href = "#/jies/xshouh"
			},
			fn() {
				this.popupVisible = true
			},
			tiaoz() {
				location.href = "#/jies/remak"
			},
			tiaok() {
				location.href = "#/jies/fap"
			},
			fnk() {
				this.axios.post('http://elm.cangdu.org/v1/users/44156/carts/111427/orders', {
				
						address_id: 15822,
						come_from: "mobile_web",
						deliver_time: "",
						description: "",
						entities: [this.arr],
						geohash: localStorage.ncl,
						paymethod_id: localStorage.id,
						sig: parseInt(Math.random()*1000),

				}).then((data) => {
					this.shoplist.push(this.arr)
					console.log(data.data)
				})
				location.href = "#/vip/buy"
			}
		},
		mounted() {
			this.arr = this.$store.state.numb
			for (var i = 0; i < this.arr.length; i++) {
				this.num += this.arr[i].__v
			}
			localStorage.idk = 2
			console.log(typeof(this.arr))
		},
		activated() {
			this.axios.get('http://elm.cangdu.org/v1/users/44104/addresses').then((data) => {
				this.arr = data.data
				console.log(this.arr)
			})
		},
		data() {
			return {
				img_url: localStorage.img_url,
				names: localStorage.name,
				arr: [],
				num: 0,
				popupVisible: false,
				texts: this.$store.state.beiz,
				idk: localStorage.idk,
				shoplist: [],
			}
		},
		computed: {
			...mapState(['numb']),
			...mapGetters(['totalPrice'])
		},
	}
</script>

<style>
	.j_ytr {
		line-height: 0;
	}

	.j_hnm {
		line-height: 0;
	}

	.j_ytr span {
		line-height: 1rem;
		font-size: .7rem;
		margin-left: 0.3rem;
	}

	.j_ytr span:nth-of-type(1) {
		font-size: 1rem;
		color: #333;
		margin-left: 0;
		font-weight: bold;
	}

	.j_hnm span:nth-of-type(1) {
		font-size: .5rem;
		color: #fff;
		border-radius: .15rem;
		/* background-color: #ff5722; */
		height: .6rem;
		line-height: .6rem;
		padding: 0 .2rem;
		margin-right: .3rem;
	}

	.j_hnm:nth-of-type(2) {
		font-size: .6rem;
		color: #777;
	}

	.j_moh {
		width: 100%;
		min-height: 10rem;
	}

	.j_moh p {
		background-color: #fafafa;
		font-size: .7rem;
		color: #333;
		text-align: center;
		line-height: 2rem;
	}

	.j_moh div {
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		padding: 0 .7rem;
		line-height: 2.5rem;
		-ms-flex-align: center;
		align-items: center;
	}

	.j_moh div span {
		font-size: .7rem;
		color: #ccc;
	}

	.k_content {
		background: #f5f5f5;
	}

	.zhifu {
		display: flex;
		/* line-height: 50px; */
		line-height: 2.3rem;
		font-size: .75rem;
		color: #fff;
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.zhifu p {
		padding-left: .7rem;
		background-color: #3c3c3c;
		-ms-flex: 5;
		flex: 5;
	}

	.zhifu .xiadan {
		flex: 2;
		background-color: #56d176;
		text-align: center
	}

	.remark {
		background-color: #fff;
		margin-top: .4rem;
		padding: 0 .7rem;
		margin-bottom: 10px;
		padding-bottom: 1.75rem;
	}

	.remark div {
		line-height: 1.375rem;
		display: flex;
		font-size: 12px;
		border-bottom: solid 1px #f5f5f5;
	}

	.remark div:nth-of-type(1)>span:nth-of-type(1) {
		font-size: .7rem;
		color: #666;
	}

	.remark div:nth-of-type(1)>span:last-child {
		font-size: .7rem;
		color: #666;
	}

	.remark div:nth-of-type(2) span:nth-of-type(1) {
		color: #666;
		font-size: .6rem;
		line-height: 2rem;
	}

	.remark div:nth-of-type(2) {
		overflow: hidden;
		width: 100%;
	}

	.remark div:nth-of-type(2) span:nth-of-type(2) {
		position: relative;
		right: -8rem;
		color: #666;
		font-size: .6rem;
		line-height: 2rem;
	}

	.result {
		padding: .7rem;
		border-bottom: .025rem solid #f5f5f5;
		background: #FFFFFF;
		margin-bottom: 5px;
	}

	.result {
		font-size: .7rem;
		color: #666;
	}

	.result img {
		width: 1.2rem;
		height: 1.2rem;
		vertical-align: middle;
		margin-right: 10px;
	}

	.result div span {
		font-size: .8rem;
		color: #333;
	}

	.result .list li {
		display: flex;
		line-height: 45px;
		font-size: .65rem;
		color: #666;
	}

	.result .list li p {
		flex: 12;
	}

	.result .list li span:nth-of-type(1) {
		flex: 2;
		color: #f60;
		font-size: 12px;
	}

	.result .list li span:nth-of-type(2) {
		flex: 2;
		color: #666;
		font-size: 12px;
	}

	.result .dingd {
		display: flex;
		font-size: 12px;
		line-height: 50px;
	}

	.result .dingd p:nth-of-type(1) {
		flex: 6;
	}

	.result .dingd p:nth-of-type(1) span {
		font-size: 12px;
	}

	.result .dingd p:nth-of-type(2) {
		flex: 2;
	}

	.result .dingd p:nth-of-type(2) span {
		font-size: 12px;
		color: #f60;
	}

	.cont {
		font-size: 12px;
		background: #FFFFFF;
		padding-left: 15px;
		margin-bottom: 10px
	}

	.cont .cont-item1 {
		display: flex;
		line-height: 55px;
	}

	.cont .cont-item1 span:nth-of-type(1) {
		flex: 6;
		font-size: 0.7rem;
	}

	.cont .cont-item1 p {
		flex: 2;
		font-size: .6rem;
		width: 10rem;
		display: inline-block;
		text-align: right;
		vertical-align: middle;
		margin-right: 20px;
		color: #aaa
	}

	.cont .cont-item1 p span {
		margin-right: 5px;
	}

	.cont .cont-item2 {
		line-height: 55px;
		display: flex;
		font-size: .6rem;
		color: #aaa;
		line-height: 2rem;
	}

	.cont .cont-item2 span:nth-of-type(1) {
		flex: 6;
		color: #666;
		font-size: 0.6rem;
	}

	.cont .cont-item2 span:nth-of-type(2) {
		flex:6;
		font-size: 0.6rem;
		text-align: center;
	}

	.head {
		margin-bottom: 10px;
		margin-top: 10px;
		padding: 20px 18px;
		display: flex;
		background: #FFFFFF;
	}

	.head p {
		flex: 6;
		font-size: 0.8rem;
		font-weight: bold;
	}

	.head .deliver_time {
		font-size: 12px;
		color: #3190e8;
	}

	.head .deliver_time .item1 {
		margin-bottom: 5px;
		font-size: 0.6rem;
	}

	.head .deliver_time .item2 {
		text-align: right;
	}

	.head .deliver_time .item2 span {
		display: inline-block;
		font-size: .5rem;
		color: #fff;
		background-color: #3190e8;
		width: 2.4rem;
		margin-top: .4rem;
		text-align: center;
		border-radius: .12rem;
		padding: .1rem;
	}

	.j_nck {
		min-height: 3.25rem;
		background: #FFFFFF;
		line-height: 3.25rem;
		padding: 0 0.75rem 0 1rem;
	}

	.j_nck .g_km {
		font-size: .7rem;
		color: #333;
	}

	.j_nck .g_km span {
		float: right;
		font-size: 1rem;
	}
</style>
