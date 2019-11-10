<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
		<h_nav>
			<div slot="left">
					<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				代金券说明
			</div>
		</h_nav>
		<div class="j_kmh">
			<h3>Q1: 什么是商家代金券？</h3>
			<p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
			<h3>Q2: 怎么获得商家代金券？</h3>
			<p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
			<p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
			<h3>Q3: 商家代金券使用条件</h3>
			<p>商家代金券仅限在指定商家使用</p>
			<p>商家代金券仅限在线支付使用</p>
			<p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
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
	.j_kmh{
		padding: 0.5rem;
	}
	.j_kmh h3{
		line-height: 2rem;
		font-size: 0.8rem;
		font-weight: normal;
	}
	.j_kmh p{
		font-size: 0.6rem;
    color: #666;
    line-height: 1rem;
	}
</style>