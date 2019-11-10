<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;">
		<h_nav>
			<div slot="left">
					<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				积分问题
			</div>
		</h_nav>
		<div class="j_nv">
			<h3>Q1: 怎么获得积分？</h3>
			<p>在线支付的订单将获得订单积分奖励：<br />积分将在用户完成评价后获得。<br />可获得积分=订单金额×10（即1元=10点积分）。<br />订单金额指实际付款金额，不包含活动优惠金额。<br />每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</p>
			<h3>Q2: 积分用来做什么？</h3>
			<p>可以在积分商城兑换各种礼品。</p>
			<h3>Q3: 礼品兑换很多天了还没有收到，该怎么办？</h3>
			<p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
			<h3>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</h3>
			<p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
		</div>
	</div>
</template>

<script>
	import h_nav from './../components/h_nav.vue'
export default {
	components:{
		h_nav
	},
	methods:{
		go(){
				this.$router.go(-1)
		},
	},
}
</script>

<style>
	.j_nv{
		padding: 0.5rem;
	}
	.j_nv h3{
		line-height: 2rem;
		font-size: 0.8rem;
		font-weight: normal;
	}
	.j_nv p{
		font-size: .6rem;
    color: #666;
    line-height: 1rem;
	}
</style>