<template>
	<div id="shop_msg">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright"></i>
			</div>
		</h_nav>
			
		<div class="fix" v-if="fix==false">
			<p style="padding: 30px 0;">包子铺</p>
			<div>
				<p>优惠信息</p>
				<div style="text-align: left;padding: 30px 0;">
					<p><span style="background: rgb(237, 193, 35);">{{shop.activities[0].icon_name}}</span>{{shop.activities[0].description}}(app专享)</p>
					<p><span style="background: rgb(240, 115, 115);">{{shop.activities[1].icon_name}}</span>{{shop.activities[1].description}}(app专享)</p>
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
			
		<div v-if="shop">
			<div>
				<div class="top_1">
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
						<span style="background: rgb(237, 193, 35);">{{shop.activities[0].icon_name}}</span>
						{{shop.activities[0].description}}
					</p>
					<p @click="fix=false">
						<span>{{shop.activities.length}}个活动</span>
						<i class="iconfont icon-zuo"></i>
					</p>
				</div>
			</div>
			
			<div>
				<div class="top_3">
					<p @click="type=0"><span :style="{borderBottom: type==0?'2px solid #3190e8':''}">商品</span></p>
					<p @click="type=1"><span :style="{borderBottom: type==1?'2px solid #3190e8':''}">评价</span></p>
				</div>
				<!--  -->
				<div class="top_4" v-if="type ==0">
					
				</div>
				<!--  -->
				<div class="top_5" v-if="type ==1">
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
		data(){
			return {
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
		created(){
			// id
			this.$http.get('http://elm.cangdu.org/shopping/restaurant/'+this.id+'?latitude=undefined&longitude=undefined&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics').then((data)=>{
				this.shop = data.data
				this.shops = data.data.rating
				console.log(data.data)
			})
			this.$http.get('http://elm.cangdu.org/ugc/v2/restaurants/'+this.id+'/ratings/tags').then((data)=>{
				this.pl = data.data
			})
			this.$http.get('http://elm.cangdu.org/ugc/v2/restaurants/'+this.id+'/ratings?has_content=true&offset=0&limit=10&tag_name=').then((data)=>{
				console.log(data.data)
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
</style>
