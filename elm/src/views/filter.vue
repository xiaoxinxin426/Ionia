<template>
	<div>
		<h_nav style="position: fixed;left: 0;top: 0;">
			<div slot="left">
				<i class="iconfont icon-toright" @click="go">
				</i>
			</div>
			<div slot="title">
				{{$route.params.title}}
			</div>
		</h_nav>
		<div class="filter">
			<div class="j_header">
				<span v-for="(item,index) in list" :key='index' @click="type=index" :style="{color:index==type?'#3190e8':''}">{{item}}</span>
			</div>
			<!--  -->
			<div class="header1" v-if="type == 0">
				<div class="no1">
					<p v-for="(items,indexs) in filter" :key="indexs" @click="types=indexs;num=indexs" :style="{background:indexs==types?'white':''}">
						<span>
							<img :src="'https://fuss10.elemecdn.com/'+items.image_url">
						</span> {{items.name}}
						<span style="float: right;width: 0.75rem ;margin-right: 0.5rem;">{{items.count}}</span>
					</p>
				</div>
				<div class="no2">
					<p v-for="(i,index) in filter[num].sub_categories.slice(1,20)" :key="index">
						<span @click="typesss=i.id;s()">{{i.name}}</span>
						<span style="float: right;width: 0.75rem ;">{{i.count}}</span>
					</p>
				</div>

			</div>
			<!--  -->
			<div class="header2" v-if="type == 1">
				<p v-for="(i,index) in sort" :key='index' @click="typessss=i.id;s()">
					<i :class="i.img"></i> {{i.name}}
				</p>
			</div>
			<!--  -->
			<div class="header3" v-if="type == 2">
				<div class="no1">
					<p>配送方式</p>
					<p @click="typess=1">
						<i class="iconfont icon-fengniao"></i>
						<span :style="{color:typess==1?'#3190e8':''}">蜂鸟专送</span>
					</p>
				</div>
				<div class="no2">
					<p>商家属性(可以多选)</p>
					<div>
						<p v-for="(i,index) in sort3" :key="index" @click="typess=i.id">
							<i :class="i.img"></i>
							<span :style="{color:i.id==typess?'#3190e8':''}">{{i.name}}</span>
						</p>
					</div>
				</div>
				<!--supports|support_ids[] 1蜂鸟专送 8品牌商家 3在线支付 4开发票 5新店 7外卖保 4开发票 9准时达 -->
				<div class="no3">
					<p @click="s">确认</p>
				</div>
			</div>
		</div>
		<div style="padding-bottom: 1.25rem;background: #FFFFFF;">
			<div v-for="(i,$index) in arr" :key="$index" class="j_divd" @click="shopl(i.id)">
				<div>
					<img style=" width: 100%;height: 100%; " :src=" '//elm.cangdu.org/img/'+i.image_path " />
				</div>
				<div>
					<div class="j_pl ">
						<span class="j_pp ">品牌</span>
						<span class="j_pk ">{{i.name}}</span>
						<ul class="j_bh ">
							<li v-for="(i,$index) in i.supports " :key="$index ">
								{{i.icon_name}}
							</li>
						</ul>
					</div>
					<div class="j_tdiv ">
						<p style="line-height: 0.6rem; ">
							<span v-for="i in 5 " :key="i " class="iconfont icon-start j_xinxin "></span>
							<span class="j_fen ">{{i.rating}}</span>
							<span class="j_shou ">月售{{i.recent_order_num}}单</span>
							<span class="j_sright j_pq ">准时达</span>
							<!-- <span class="j_sright j_lp " v-if="i.delivery_mode.text ">{{i.delivery_mode.text}}</span> -->
						</p>
					</div>
					<div style="line-height: 0; ">
						<span class="j_lk ">{{i.float_minimum_order_amount}}元起送 /</span>
						<span class="j_lk ">{{i.piecewise_agent_fee.tips}}</span>
						<span class="j_sright j_hg " style="color: #3190e8; ">{{i.order_lead_time}}</span>
						<span class="j_sright j_hg ">{{i.distance}}/</span>
					</div>
				</div>
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
				arr: '',
				list: [this.$route.params.title, '排序', '筛选'],
				filter: '', //这是商品的品种
				type: null, //一级菜单
				types: 0, //二级菜单
				typess: null,
				typesss: null,
				typessss: null,
				num: 0, //二级菜单筛选
				sort: [{
					name: '智能排序',
					img: 'iconfont icon-sort',
					id: 1
				}, {
					name: '距离最近',
					img: 'iconfont icon-location',
					id: 2
				}, {
					name: '销量最高',
					img: 'iconfont icon-fire-o',
					id: 3
				}, {
					name: '起送价最低',
					img: 'iconfont icon-jinbi',
					id: 4
				}, {
					name: '配送速度最快',
					img: 'iconfont icon-shijian',
					id: 5
				}, {
					name: '评分最高',
					img: 'iconfont icon-wujiaoxingxingxing',
					id: 6
				}],
				sort3: [{
						name: '品牌商家',
						id: 8,
						img: 'iconfont icon-pinpairenzhengv'
					},
					{
						name: '外卖保',
						id: 7,
						img: 'iconfont icon-baoxian'
					},
					{
						name: '准时达',
						id: 9,
						img: 'iconfont icon-zhun1'
					},
					{
						name: '新店',
						id: 5,
						img: 'iconfont icon-xin'
					},
					{
						name: '在线支付',
						id: 3,
						img: 'iconfont icon-fu'
					},
					{
						name: '开发票',
						id: 4,
						img: 'iconfont icon-piao'
					},
				],
			}
		},
		methods: {
			go() {
				this.$router.go(-1)
			},
			s() {
				this.type = null
				this.axios.get(
					'http://elm.cangdu.org/shopping/restaurants?latitude=32.035351&longitude=118.820363&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=' +
					this.typesss + '&order_by='+ this.typessss +'&delivery_mode[]=null&support_ids[]=' + this.typess).then((data) => {
					console.log(data.data)
					this.arr = data.data
				})
			},
			shopl(i){
				location.href=`#/shoplist/${i}`
			}
		},
		created() {
			this.axios.get(
				'http://elm.cangdu.org/shopping/restaurants?latitude=32.035351&longitude=118.820363&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]='
			).then((data) => {
				console.log(data.data)
				this.arr = data.data
			})

			this.axios.get(
				'http://elm.cangdu.org/shopping/v2/restaurant/category?latitude=39.86103&longitude=116.3699'
			).then((data) => {
				console.log(data.data)
				this.filter = data.data
			})

		}
	}
</script>

<style>
	.header3 {
		font-size: 0.35rem;
		padding: 0 0.25rem;
	}

	.header3 .no1 p {
		height: 0.875rem;
		line-height: 0.875rem;
		padding: 0 0.125rem 0.125rem 0.125rem;
		box-sizing: border-box;
		border-bottom: 0.025rem solid #eee;
	}

	.header3 .no2 {
		overflow: hidden;
	}

	.header3 .no2 div p {
		width: 33%;
		height: 0.875rem;
		line-height: 0.875rem;
		float: left;
		padding: 0 0.125rem 0.125rem 0.125rem;
		box-sizing: border-box;
		border-bottom: 0.025rem solid #eee;
	}

	.header3 .no3 {
		width: 100%;
		text-align: center;
		line-height: 0.875rem;
		background: #56d176;
	}


	.header3 .no3 p {
		color: white;
	}

	.filter .j_header {
		width: 100%;
		display: flex;
		height: 1rem;
		line-height: 1rem;
	}
	.filter{
		width: 100%;
		position: fixed;
		top: 3rem;
		z-index: 99;
	}
	.filter .j_header span {
		flex: 1;
		text-align: center;
		font-size: 0.35rem;
		border-right: 0.025rem solid pink;
	}

	.filter .j_header span:last-of-type {
		border-right: none;
	}

	.header1 {
		background: #f1f1f1;
		display: flex;
		height: 9.375rem;
	}

	.header1 p {
		font-size: 0.35rem;
		height: 1.025rem;
		line-height: 1.025rem;
		padding-left: 0.25rem;
	}

	.header1 .no1 {
		flex: 1;
	}

	.header1 .no2 {
		flex: 1;
		overflow-y: auto;
		background: white;
	}

	.header1 .no2 p {
		border-bottom: 0.025rem solid #E4E4E4;
	}

	.header1 .no1 span {
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
	}

	.header1 img {
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}
.header2{
	background: #FFFFFF;
}
	.header2 p {
		height: 1.45rem;
		line-height: 1.45rem;
		font-size: 0.35rem;
		padding-left: 0.5rem;
	}
.header3{
	background: #FFFFFF;
}
	.header2 i {
		font-size: 0.4rem;
	}

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
	}

	.j_div p {
		margin-bottom: 0.5rem;
		padding-left: 0.5rem;
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
		content: "\54C1\724C ";
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
	.j_header{
		position: fixed;
		top: 2.125rem;
		left: 0;
		background: #FFFFFF;
		z-index: 99;
	}
</style>