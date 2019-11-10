<template>
	<div style="background: #FFFFFF;">
		<h_nav>
			<div slot="left">
					<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				服务中心
			</div>
		</h_nav>
		<div class="j_wej">
			<div>在线客服</div>
			<div>在线客服</div>
		</div>
		<h4 class="j_h4">热门问题</h4>
		<p class="j_gh" @click="fn(arr.supervipCaption,arr.supervipContent)">{{arr.supervipCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.signCaption,arr.signContent)">{{arr.signCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.rankCaption,arr.rankContent)">{{arr.rankCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.pointtextCaption,arr.pointtextContent)">{{arr.pointtextCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.phototutorialCaption,arr.phototutorialContent)">{{arr.phototutorialCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.paymentCaption,arr.paymentContent)">{{arr.paymentCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.otherCaption,arr.otherContent)">{{arr.otherCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.ontimeCaption,arr.ontimeContent)">{{arr.ontimeCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.memberPartCutCaption,arr.memberTimesContent)">{{arr.memberPartCutCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.memberCaption,arr.memberContent)">{{arr.memberCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.hongbaoCaption,arr.hongbaoContent)">{{arr.hongbaoCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.freshmanCaption,arr.freshmanContent)">{{arr.freshmanCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.forgotCaption,arr.forgotContent)">{{arr.forgotCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.discountCaption,arr.discountContent)">{{arr.discountCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.disclaimerCaption,arr.disclaimerContent)">{{arr.disclaimerCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.couponCaption,arr.couponContent)">{{arr.couponCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.businessCaption,arr.businessContent)">{{arr.businessCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.balanceCaption,arr.balanceContent)">{{arr.balanceCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.awesomeRestaurantCaption,arr.couponContent)">{{arr.awesomeRestaurantCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.anonymousBuyCaption,arr.anonymousBuyContent)">{{arr.anonymousBuyCaption}}<span>></span></p>
		<p class="j_gh" @click="fn(arr.activityCaption,arr.activityContent)">{{arr.activityCaption}}<span>></span></p>
		<router-view></router-view>
	</div>
</template>

<script>
	import h_nav from './../components/h_nav.vue'
export default {
	components:{
		h_nav
	},
	data(){
		return {
			arr:''
		}
	},
	methods:{
		go(){
			this.$router.go(-1)
		},
		fn(a,b){
			this.$store.commit('addtit',a)
			this.$store.commit('addcons',b)
			location.href="#/serve/ser"
		}
	},
	created(){
		this.axios.get('http://elm.cangdu.org/v3/profile/explain').then((data)=>{
		console.log(data.data)
		this.arr = data.data
		})
	}
}
</script>

<style>
	.j_wej{
		display: flex;
	}
	.j_wej div{
		flex: 1;
		text-align: center;
		line-height: 4.25rem;
		border: solid 1px #f5f5f5;
    font-size: .6rem;
    color: #666;
    font-size: .6rem;
	}
	.j_h4{
		font-size: .75rem;
    color: #333;
    line-height: 3rem;
    border-bottom: 1px solid #f5f5f5;
    padding-left: .7rem;
    font-weight: normal;
	}
	.j_gh{
		padding: 0 .7rem;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .6rem;
    color: #666;
	}
	.j_gh span{
		float: right;
		font-size: 1rem;
	}
</style>