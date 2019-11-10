<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				我的优惠
			</div>
		</h_nav>
		<div>
			<p class="j_p1">尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
			</p>
		</div>
		<div class="j_kb">
			<h3>Q1: 特权介绍</h3>
			<p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
			<p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
			<p>更多特权，敬请期待！</p>
		</div>
		<div class="j_kb">
			<h3>Q2: 资费介绍</h3>
			<p>饿了么会员卡：20元</p>
		</div>
		<div class="j_kb">
			<h3>Q3: 使用说明</h3>
			<p>当用户满足以下任一条件，会员服务自动失效：</p>
			<li>自绑定之日起超过31天；</li>
			<li>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
		</div>
		<div class="j_kb">
			<h3>Q4: 购卡说明</h3>
			<p>在线购买：饿了么App>我的>饿了么会员卡</p>
		</div>
		<div class="j_kb">
			<h3>Q5: 温馨提示</h3>
			<p>用户在当前会员服务失效前，无法购买新卡。</p>
			<p>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
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
		},
	}
</script>

<style>
.j_p1{
	width: 70%;
	margin: 0.75rem auto 0;
	font-size: 0.6rem;
}
.j_kb{
	padding: 0.5rem;
}
.j_kb h3{
    margin-bottom: .2rem;
    font-size: .7rem;
    font-weight: 600;
    color: #333;
}
.j_kb p{
	color: #666;
    margin-bottom: .2rem;
    font-size: 0.6rem;
}
.j_kb li{
	padding-left: 1rem;
	color: #666;
	font-size: 0.6rem;
}
</style>