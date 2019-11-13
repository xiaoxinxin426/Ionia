<template>
	<div style="background: #F5F5F5;width: 100%;overflow: hidden;">
		<!-- <h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
		</h_nav> -->
		
		
		<div v-if="shop">
			<div class="top_1" style="padding-top:0.5rem;">
					<i class="iconfont icon-toright" @click="go" style="z-index:9"></i>
				<div class="no1">
					<img :src="'//elm.cangdu.org/img/'+shop.image_path" />
				</div>
				<div class="no2">
					<p>{{shop.name}}</p>
					<p>
						<span>商家配送 | </span>
						<span v-if="shop.opening_hours">{{shop.opening_hours[0]}} | </span>
						<span>{{shop.piecewise_agent_fee.tips}}</span>
					</p>
					<p>公告：{{shop.promotion_info}}</p>
				</div>
				<div class="no3">
					<i class="iconfont icon-zuo"></i>
				</div>
			</div>
			
			<div class="top_2">
				<p>
					<span style="background: rgb(237, 193, 35);">{{shop.activities.length>0?shop.activities[0].icon_name:''}}</span>
					{{shop.activities.length>0?shop.activities[0].description:''}}
				</p>
				<p @click="fix=false">
					<span>{{shop.activities.length}}个活动</span>
					<i class="iconfont icon-zuo"></i>
				</p>
			</div>
		</div>
		
		<div class="s_hea">
			<div @click="inx=1"><span :class="[inx==1?'actives':'']">商品</span></div>
			<div @click="inx=2"><span :class="[inx==2?'actives':'']">评价</span></div>
		</div>
		
		<div class="fix" v-if="fix==false">
			<p style="padding: 30px 0;">包子铺</p>
			<div>
				<p>优惠信息</p>
				<div style="text-align: left;padding: 30px 0;">
					<p><span style="background: rgb(237, 193, 35);">{{shop.activities.length>0?shop.activities[0].icon_name:''}}</span>{{shop.activities.length>0?shop.activities[0].description:''}}(app专享)</p>
					<p><span style="background: rgb(240, 115, 115);">{{shop.activities.length>0?shop.activities[1].icon_name:''}}</span>{{shop.activities.length>0?shop.activities[1].description:''}}(app专享)</p>
				</div>
			</div>
			<div>
				<p>商家公告</p>
				<div style="text-align: left;padding: 30px 0;">
					<p>{{shop.promotion_info}}</p>
				</div>
			</div>
			<i class="iconfont icon-guanbi" style="position: absolute;bottom: 100px;font-size: 50px;margin-left: -25px;" @click="fix=true"></i>
		</div>
		
		<div v-if="inx==1">
			<div class="s_con">
				<div class="s_lm">
					<div v-for="(i,index) in arr" @click="fnc(index,i.name)" :key="index">
						<p :class="[indexs==index?'s_act':'']" @click="btn(i.id)">
							{{i.name}}
						</p>
					</div>
				</div>
				<div  style="max-height: 30rem;overflow: auto;">
					<div v-for="(i,index) in arr" @click="indexs=index" :key="index" style="padding-bottom: 1rem;border-bottom: solid 1px #f5f5f5;">
						<p :id="i.id">{{i.name}}<span>{{i.description}}</span><span>></span></p>
						<div class="s_kn" v-for="(a,$index) in i.foods" :key="$index">
							<div>
								<img :src="'//elm.cangdu.org/img/'+a.image_path" alt="" style="width: 2.15rem;height: 2.15rem;" />
							</div>
							<div class="j_lpl">
								<h6>{{a.name}}</h6>
								<h6>{{a.description}}</h6>
								<h6>{{a.tips}}</h6>
								<h6><span>{{a.activity?a.activity.image_text:''}}</span></h6>
								<h6><span v-if="a.specfoods[0]">{{a.specfoods[0].price}}</span>起<jia v-model="a.__v"></jia></h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--  -->
		<!--  -->
		<div class="top_5" v-if="inx==2">
			<div class="no1" style="margin: 20px 0;">
				<div>
					<p>{{shops}}</p>
					<p>综合评价</p>
					<p>高于周边商家</p>
				</div>
				<div>
					<p>
						服务态度 <span v-for="(itemss,index) in 5" :key="index"><i class="iconfont icon-start" style="color: #f60;"></i></span><span style="color: #f60;">4.7</span>
					</p>
					<p>
						菜品评价 <span v-for="(itemss,index) in 5" :key="index"><i class="iconfont icon-start" style="color: #f60;"></i></span><span style="color: #f60;">4.8</span>
					</p>
					<p>
						送达时间 <span style="font-size: 10px;color: #999;">分钟</span>
					</p>
				</div>
			</div>
			<div class="no2" style="border-bottom: 1px solid #f1f1f1;">
				<p v-for="(i,index) in pl" :key="index" @click="types=index" :style="{background: types==index?'#3190e8':'',color: types==index?'white':''}">
					{{i.name}}
					(<span>{{i.count}}</span>)
				</p>
			</div>
			<div>
				<div v-for="(it,index) in list" :key="index" class="top_6">
					<div>
						<div>
							<img src="//elm.cangdu.org/img/default.jpg" alt="">
						</div>
					</div>
					<div>
						<p>{{it.username}}</p>
						<p>
							<span v-for="(item,index) in 5" :key="index">
								<i class="iconfont icon-start"></i>
							</span>
							{{it.time_spent_desc}}
						</p>
						<div style="overflow: hidden;">
							<div v-for="(ite,index) in it.item_ratings" :key="index" style="float: left;width: 70px;overflow: hidden;padding: 5px;">
								<img src="//elm.cangdu.org/img/default.jpg" style="width: 100%;height: 100%;">
								<p style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{ite.food_name}}</p>
							</div>
						</div>
					</div>
					<div>
						{{it.rated_at}}
					</div>
				</div>
			</div>
		</div>

		<div class="j_foot"  v-if="inx==1">
			<p style="flex:1;background:#000">
				<span style="float:left;width:2rem;height:2rem;background:#F4F4F4;border-radius:50%;margin-top:-0.5rem;margin-left:1rem;">
					<img style="width:100%;height:100%;border-radius:50%"  src="http://img5.imgtn.bdimg.com/it/u=2974139780,1314840459&fm=26&gp=0.jpg">
				</span>
			</p>
			<div @click="tiao">
				<p>￥<span>{{totalPrice}}</span></p>
				<p>配送费￥5</p>
			</div>
			<div :class="[totalPrice>=20?'k_lm':'k_ln']">
				<p v-if="inde==1||totalPrice>=20" @click="got">结算</p>
				<p v-if="inde==2">还差￥20起送</p>
			</div>

		</div>
		<mt-popup v-model="popupVisible" position="bottom" style="z-index: 2;bottom: 2rem;">
			<div class="j_shops">
				<p style="background: #f5f5f5;">购物车<span class="j_spans" @click="qin">清空</span></p>
				<div v-for="(i,$index) in $store.state.numb" :key="$index" style="background: #FFFFFF;padding: 0 0.5rem 0 1rem">
					<span style="font-size: .7rem;color: #666;font-weight: 700;">{{i.name}}</span><span style="font-size: .7rem;color: #f60;font-family: Helvetica Neue,Tahoma;font-weight: 700;margin-left: 5rem;" v-if="i.specfoods[0].price">￥{{i.specfoods[0].price}}</span>
					<jia v-model="i.__v" style="float: right;width: 40%;text-align: right;margin-right: 0.75rem;"></jia>
				</div>
			</div>
		</mt-popup>
	</div>
</template>

<script>
	// import h_nav from './../components/h_nav.vue'
	import { mapState, mapGetters } from 'vuex'
	import jia from "./../components/jia.vue"
	export default {
		components: {
			jia
		},
		data() {
			return {
				inx: 1,
				indexs: 0,
				arr: '',
				ids: this.$route.params.id,
				maod: '',
				are: '',
				popupVisible: false,
				inde: 2,
				km:'',
				
				shop: '',
				pl: '',
				list: '',
				type: 0,
				types: 0,
				shops: '',
				fix: true,
				id: this.$route.params.id
			}
		},
		methods: {
			btn(e) {
    let anchorElement = document.getElementById(e);
    if(anchorElement) { anchorElement.scrollIntoView(); }
   },
			go() {
				this.$router.go(-1)
				this.km=1
			},
			fnc(i, b) {
				this.indexs = i
				this.maod = b
			},
			got() {
				localStorage.id = this.$route.params.id
					setTimeout(() => {
						location.href = '#/jies'
					}, 500)
				
			},
			tiao() {
				this.popupVisible = true
			},
			qin() {
				this.$store.state.numb = ''
				this.popupVisible = false
				this.$store.commit('del')
				this.$store.commit('xiug')
			}
		},
		watch: {
			'arr': {
				handler(v1) {
					this.are = [];
					v1.forEach(el => {
						el.foods.forEach(ele => {
							if(ele.__v) {
								this.are.push(ele)
								console.log(this.are)
							}
						})
					})
					// 同步到vuex里
					this.$store.commit('addPri', this.are)
				},
				deep: true
			},
		},
		computed: {
			...mapState(['numb']),
			...mapGetters(['totalPrice'])
		},
		created(){
			this.axios.get('http://elm.cangdu.org/shopping/v2/menu?restaurant_id=' + this.ids + '').then((data) => {
				this.arr = data.data
				console.log(this.arr)
			})
			this.$http.get('http://elm.cangdu.org/shopping/restaurant/'+this.id+'?latitude=undefined&longitude=undefined&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics').then((data)=>{
				this.shop = data.data
				this.shops = data.data.rating
				console.log(data.data)
			})
			this.$http.get('http://elm.cangdu.org/ugc/v2/restaurants/'+this.id+'/ratings/tags').then((data)=>{
				this.pl = data.data
			})
			this.$http.get('http://elm.cangdu.org/ugc/v2/restaurants/'+this.id+'/ratings?has_content=true&offset=0&limit=10&tag_name=').then((data)=>{
				this.list = data.data
			})
		}
	}
</script>

<style>
	.fix{
		position: fixed;
		width: 100%;
		height: 100%;
		background:#262626;
		left: 0;
		top: 0;
		z-index: 999;
		color: white;
		text-align: center;
	}
	.fix>p{
		font-size: 20px;
	}
	.fix>div{
		padding: 0 30px;
		font-size: 12px;
		text-align: center;
	}
	.fix>div>p{
		border-radius: 10px;
		border: 1px solid #555;
		display: inline-block;
		padding: 5px;
	}
	.fix>div:first-of-type>p{
		
	}
	.fix>div:last-of-type{
		
	}
	.icon-start{
		color: #f60;
	}
	.top_1{
		display: flex;
		font-size: 14px;
		padding: 10px;
		color: white;
		background: black;
	}
	.top_1 .no1{
		flex: 2;
		height: 80%;
	}
	.top_1 .no1 img{
		width: 100%;
		height: 100%;
	}
	.top_1 .no2{
		flex: 6;
	}
	.top_1 .no2 p{
		font-size: 12px;
		margin: 0 0 5px 10px;
	}
	
	.top_1 .no2 p:first-of-type{
		font-size: 22px;
		font-weight: bold;
	}
	.top_1 .no3{
		flex: 1;
		line-height: 90px;
		text-align: right;
	}
	.top_2{
		background: black;
		overflow: hidden;
		color: white;
		font-size: 14px;
		padding: 0 10px;
	}
	.top_2>p:first-of-type{
		float: left;
	}
	.top_2>p:last-of-type{
		float: right;
	}
	.top_3{
		display: flex;
	}
	.top_3 p{
		flex: 1;
		text-align: center;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		margin: 5px 0;
	}
	.top_5 .no1{
		font-size: 12px;
		display: flex;
	}
	.top_5 .no1>div:first-of-type{
		flex: 1;
		text-align: center;
	}
	.top_5 .no1>div:first-of-type p:first-of-type{
		font-size: 24px;
		color: #f60;
	}
	.top_5 .no1>div:first-of-type p:last-of-type{
		color: #999;
	}
	.top_5 .no1>div:last-of-type{
		flex: 1;
	}
	.top_5 .no2{
		overflow: hidden;
	}
	.top_5 .no2 p{
		font-size: 12px;
		float: left;
		border-radius: 5px;
		padding: 5px;
		margin: 5px;
		background: #ebf5ff;
		color: #6d7885;
	}
	.top_6{
		display: flex;
		font-size: 12px;
		padding: 10px;
	}
	.top_6>div:nth-of-type(1){
		flex: 1;
	}
	.top_6>div:nth-of-type(1) div{
		width: 35px;
		height: 35px;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
	}
	.top_6>div:nth-of-type(1) img{
		width: 100%;
		height: 100%;
	}
	.top_6>div:nth-of-type(2){
		flex: 4;
	}
	.top_6>div:nth-of-type(3){
		flex: 1;
		font-size: 10px;
	}
	.s_hea {
		display: flex;
		background: #FFFFFF;
	}
	
	.s_hea div {
		flex: 1;
		text-align: center;
		font-size: 0.75rem;
		line-height: 2.25rem;
	}
	
	.actives {
		border-bottom: solid 0.025rem #0073FF;
		color: #0073FF;
	}
	
	.s_con {
		position: relative;
		overflow: hidden;
	}
	
	.s_lm {
		width: 20%;
		float: left;
	}
	
	.s_con>div:nth-of-type(1) p {
		padding: .7rem .3rem;
		border-bottom: .025rem solid #ededed;
		box-sizing: border-box;
		font-size: .5rem;
		color: #666;
	}
	
	.s_con>div:nth-of-type(2) {
		float: left;
		width: 80%;
	}
	
	.s_con>div:nth-of-type(2) p {
		padding-left: 0.5rem;
		font-size: .7rem;
		color: #666;
		font-weight: 700;
		line-height: 2.25rem;
	}
	
	.s_con div:nth-of-type(2) p span:nth-of-type(1) {
		font-size: .5rem;
		color: #999;
		width: 30%;
		overflow: hidden;
		margin-left: 0.55rem;
	}
	
	.s_con div:nth-of-type(2) p span:nth-of-type(2) {
		float: right;
		margin-right: 0.75rem;
	}
	
	.s_act {
		border-left: solid 0.2rem #0073FF;
		background: #FFFFFF;
	}
	
	.s_kn {
		display: flex;
		padding-left: 0.5rem;
		padding-top: 0.75rem;
		background: #FFFFFF;
		border-bottom: solid 0.025rem #f5f5f5;
		padding-bottom: 0.5rem;
	}
	
	.s_kn div:nth-of-type(1) {
		flex: 1;
	}
	
	.s_kn div:nth-of-type(2) {
		flex: 2;
	}
	
	.j_lpl h6 {
		line-height: 1rem;
	}
	
	.j_lpl h6:nth-of-type(1) {
		font-size: .7rem;
		color: #333;
	}
	
	.j_lpl h6:nth-of-type(2) {
		font-size: .5rem;
		color: #999;
		line-height: .6rem;
	}
	
	.j_lpl h6:nth-of-type(3) {
		font-size: .5rem;
		color: #333;
	}
	
	.j_lpl h6:nth-of-type(4) {
		font-size: .5rem;
		color: #333;
		line-height: .6rem;
	}
	
	.j_lpl h6:nth-of-type(5) {
		font-size: .5rem;
		color: #333;
	}
	
	.j_lpl h6:nth-of-type(5) span:nth-of-type(1) {
		font-size: .7rem;
		color: #f60;
		font-weight: 700;
		margin-right: .3rem;
	}
	
	.j_foot {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 2rem;
		width: 100%;
		display: flex;
		font-size: .6rem;
		z-index: 3000;
	}
	
	.j_foot div:nth-of-type(1) {
		flex: 2;
		text-align: left;
		background: #000000;
		color: #FFFFFF;
	}
	.k_lm{
		flex: 1;
		text-align: center;
		background: #4cd964;
		color: #FFFFFF;
		line-height: 1.5rem;
		padding-top: .3rem;
		position: relative;
		z-index: 999;
	}
	.k_ln{
		background: #535356;
		flex: 1;
		text-align: center;
		color: #FFFFFF;
		line-height: 1.5rem;
		padding-top: .3rem;
		position: relative;
		z-index: 999;
	}
	.j_lpl h6:nth-of-type(4) span {
		color: rgb(241, 136, 79);
		font-size: .3rem;
		border: 1px solid rgb(240, 115, 115);
		border-radius: .3rem;
		padding: .08rem;
		display: inline-block;
		transform: scale(.8);
		margin-left: -0.5rem;
	}
	
	.j_shops {
		width: 100%;
		background-color: blue;
	}
	
	.j_shops div {
		width: 100%;
		overflow: hidden;
	}
	
	.j_shops p {
		width: 100%;
		font-size: .7rem;
		color: #666;
		line-height: 2rem;
		padding-left: 0.75rem;
	}
	
	.j_shops .j_spans {
		float: right;
		margin-right: 0.75rem;
		font-size: .6rem;
		color: #666;
	}
	
	.mint-popup-bottom {
		width: 100%;
		z-index: 2;
		bottom: 0;
	}
</style>