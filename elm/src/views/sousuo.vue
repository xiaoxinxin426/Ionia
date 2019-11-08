<template>
	<div style="background: #f5f5f5;min-height: 26.5rem">
		<div style="background: #FFFFFF;" class="j_divs">
			<input type="text" placeholder="请输入商家或美食名称" v-model="values" @input="ol"/>
			<input type="submit" value="提交" @click="fn"/>
		</div>
		<h3 v-if="arr.length">商家</h3>
		<div style="background: #FFFFFF;" v-if="inx == 2">
		<div class="j_plist" v-for="(i,$index) in arr" :key="$index">
			<div>
				<img :src="'//elm.cangdu.org/img/'+i.image_path" alt="" style="width: 100%;height: 100%;display: block;"/>
			</div>
			<div>
				<p>{{i.name}}<span>支付</span></p>
				<p>月售{{i.recent_order_num}}单</p>
				<p>{{i.float_minimum_order_amount}}元起送/距离{{i.distance}}</p>
			</div>
		</div>
		</div>
		<p v-if="inx==1" class="j_sor">很抱歉！无搜索结果</p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				values:'',
				arr:'',
				inx:0,
				names:''
			}
		},
		methods:{
			fn(){
				this.names = localStorage.ncl
				console.log(this.names)
				this.$http.get('http://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash='+this.names+'&keyword='+this.values+'&type=search').then((data)=>{
					console.log(data.data)
					if(data.data.status==0){
						this.inx=1
						return
					}else{
						this.arr = data.data
						this.inx=2
					}
				})
			},
			ol(){
				if(this.values==''){
					this.inx=0
				}else{
					this.inx=2
				}
			},
		}
	}
</script>

<style>
	.j_divs {
		background: #FFFFFF;
		padding: 0.5rem;
		display: flex;
	}
	
	.j_divs input:nth-of-type(1) {
		flex: 4;
		border: .025rem solid #e4e4e4;
		font-size: .65rem;
		color: #333;
		border-radius: .125rem;
		background-color: #f2f2f2;
		font-weight: 700;
		padding: 0 .25rem;
		display: block;
	}
	
	.j_divs input:nth-of-type(2) {
		flex: 1;
		border: .025rem solid #3190e8;
		margin-left: .2rem;
		font-size: .65rem;
		color: #fff;
		border-radius: .125rem;
		background-color: #3190e8;
		font-weight: 700;
		padding: 0 .25rem;
		height: 2.5rem;
		text-align: center;
	}
	.j_plist{
		overflow: hidden;
		background: #FFFFFF;
		padding: 0.5rem;
		border-bottom: solid 1px #CCCCCC;
		margin-bottom: 0.5rem;
	}
	.j_plist>div:nth-of-type(1){
		float: left;
		width: 20%;
		margin-right: 2%;
	}
	.j_plist>div:nth-of-type(2){
		float: left;
		width: 70%;
		border-bottom: solid 1px #CCCCCC;
		padding-bottom: 0.75rem;
	}
	.j_plist>div:nth-of-type(2) p{
		font-size: .55rem;
		line-height: .9rem;
		color: #333;
	}
	.j_plist>div:nth-of-type(2) p span{
		color: rgb(255, 96, 0);
    font-size: 9px;
    font-weight: bold;
	}
	.j_sor{
		font: .65rem/1.75rem Microsoft YaHei;
    color: #333;
    background-color: #fff;
    text-align: center;
    margin-top: .125rem;
    height: 2rem;
    line-height: 2rem;
	}
</style>