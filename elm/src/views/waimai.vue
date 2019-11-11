<template>
	<div class="j_div" v-loading="loading">
		<div>
		<h_nav>
			<div slot="left">
				<router-link to="/fujin/sousuo">
					<i class="iconfont icon-zoom"></i>
				</router-link>
			</div>
			<div slot="title">
				{{names.address}}
			</div>
			<div slot="right">
				<p><a href="#/fujin/wode">我的</a></p>
			</div>
		</h_nav>
		<lunbo></lunbo>
		<p class="iconfont icon-dianpu"><span class="j_sj">附近商家</span></p>
		<!--下面20条数据-->
		<div style="padding-bottom: 1.25rem;background: #FFFFFF;">
		<div v-for="(i,$index) in arr" :key="$index" class="j_divd" @click="shopl(i.id)">
			<div>
				<img :src="'//elm.cangdu.org/img/'+i.image_path" alt="" />
			</div>
			<div>
				<div class="j_pl">
					<span class="j_pp">品牌</span>
					<span class="j_pk">{{i.name}}</span>
					<ul class="j_bh">
						<li v-for="(i,$index) in i.supports" :key="$index">
							{{i.icon_name}}
						</li>
					</ul>
				</div>
				<div class="j_tdiv">
					<p style="line-height: 0.6rem;">
						<span v-for="i in 5" :key="i" class="iconfont icon-start j_xinxin"></span>
						<span class="j_fen">{{i.rating}}</span>
						<span class="j_shou">月售{{i.recent_order_num}}单</span>
						<span class="j_sright j_pq">准时达</span>
						<span class="j_sright j_lp">{{i.delivery_mode.text}}</span>
					</p>
				</div>
				<div style="line-height: 0;">
					<span class="j_lk">{{i.float_minimum_order_amount}}元起送 /</span>
					<span class="j_lk">{{i.piecewise_agent_fee.tips}}</span>
					<span class="j_sright j_hg" style="color: #3190e8;">{{i.order_lead_time}}</span>
					<span class="j_sright j_hg">{{i.distance}}/</span>
				</div>
			</div>
		</div>
</div>
<!--结束-->
</div>
	</div>
</template>

<script>
	import h_nav from './../components/h_nav.vue'
	import lunbo from './../components/lunbo.vue'
	export default {
		components: {
			h_nav,lunbo
		},
		data() {
			return {
				arr: '',
				names: '',
				loading:true,
			}
		},
		methods:{
			shopl(i){
				location.href=`#/shoplist/${i}`
			}
		},
		created() {
				setTimeout(()=>{
				this.loading=false
			},1000)
				this.names = localStorage.name
			this.axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=32.035351&longitude=118.820363&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=').then((data) => {
				console.log(data.data)
				this.arr = data.data
			})
			this.axios.get('https://elm.cangdu.org/v2/pois/' +localStorage.ncl+ '').then((data) => {
				console.log(data.data)
				this.names = data.data
			})
			localStorage.img_url = '//elm.cangdu.org/img/default.jpg'
		},
	}
</script>

<style scoped="">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	.j_div {
		border-top: solid 0.025rem #CCCCCC;
		width: 100%;
		overflow: hidden;
	}
	
	.j_div p .j_sj {
		padding-left: 0.5rem;
		background: #FFFFFF;
	}
	
	.j_div .icon-dianpu {
		padding-left: 0.5rem;
		background: #FFFFFF;
		margin-top: 0.75rem;
		margin-bottom: 0;
		padding-bottom: 1rem;
		padding-top: 0.7rem;
	}
	
	.j_tdiv {
		margin-top: 0.5rem;
	}
	
	.j_sright {
		float: right;
	}
	
	.j_div img {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.j_divd {
		overflow: hidden;
		border-bottom: solid 1px #CCCCCC;
		margin-bottom: 1rem;
		padding: 0 0.5rem 1rem 0.5rem;
	}
	
	.j_divd>div {
		float: left;
	}
	
	.j_divd>div:nth-of-type(1) {
		width: 20%;
		min-height: 1.5rem;
		margin-right: 3%;
	}
	
	.j_divd>div:nth-of-type(2) {
		width: 76%;
		min-height: 1.5rem;
	}
	
	.j_xinxin {
		display: inline-block;
		line-height: 0;
		color: #ff9a0d;
		margin: 0;
		width: 0.4rem;
		height: 0.4rem;
	}
	
	.j_bh {
		display: flex;
		transform: scale(0.8);
		margin-right: -0.3rem;
		float: right;
	}
	
	.j_bh li {
		font-size: 0.5rem;
		color: #999;
		border: 0.025rem solid #f1f1f1;
		padding: 0.04rem;
		border-radius: 0.08rem;
		margin-left: 0.05rem;
	}
	
	.j_pp {
		content: "\54C1\724C";
		display: inline-block;
		font-size: 0.5rem;
		line-height: 0.6rem;
		color: #333;
		background-color: #ffd930;
		padding: 0.1rem;
		border-radius: 0.1rem;
		margin-right: 0.2rem;
	}
	
	.j_pk {
		color: #333;
		padding-top: .01rem;
		font: .65rem/.65rem PingFangSC-Regular;
		font-weight: 700;
	}
	
	.j_pl {
		width: 100%;
		line-height: 0;
	}
	
	.j_pl ul {
		margin-top: 0.25rem;
	}
	
	.j_fen {
		font-size: .4rem;
		color: #ff6000;
		margin-left: 0.5rem;
	}
	
	.j_shou {
		transform: scale(.8);
		margin-left: .2rem;
		font-size: .4rem;
		color: #666;
	}
	
	.j_lp {
		color: #fff;
		background-color: #3190e8;
		border: 0.025rem solid #3190e8;
		font-size: .2rem;
		padding: .04rem .08rem 0;
		border-radius: .08rem;
		margin-left: .08rem;
	}
	
	.j_pq {
		color: #3190e8;
		border: .025rem solid #3190e8;
		font-size: .2rem;
		padding: .04rem .08rem 0;
		border-radius: .08rem;
		margin-left: .08rem
	}
	
	.j_lk {
		font-size: 0.5rem;
		transform: scale(.9);
		color: #666;
		line-height: 0.15rem;
		display: inline-block;
	}
	
	.j_hg {
		font-size: 0.5rem;
		transform: scale(.9);
		color: #999;
		line-height: 0.15rem;
		display: inline-block;
	}
</style>