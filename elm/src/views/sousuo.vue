<template>
	<div style="background: #f5f5f5;min-height: 26.5rem">
		<div style="background: #FFFFFF;" class="j_divs">
			<input type="text" placeholder="请输入商家或美食名称" v-model="values" @input="ol"/>
			<input type="submit" value="提交" @click="fn"/>
		</div>
		<p v-if="arr.length" style="padding:0.5rem;font-size:0.7rem;">商家</p>
		<div style="background: #FFFFFF;" v-if="inx == 2">
		<div class="j_plist" v-for="(i,$index) in arr" :key="$index" @click="shopl(i.id)">
			<div>
				<img :src="'//elm.cangdu.org/img/'+i.image_path" alt="" style="width: 80%;height: 80%;display: block;"/>
			</div>
			<div>
				<p>{{i.name}}<span>支付</span></p>
				<p>月售{{i.recent_order_num}}单</p>
				<p>{{i.float_minimum_order_amount}}元起送/距离{{i.distance}}</p>
			</div>
		</div>
		</div>
		<p v-if="inx==1" class="j_sor">很抱歉！无搜索结果</p>
		<div v-if="indexs==2" style="background:white">
			<div  v-for="(i,index) in lists" :key="index" style="padding:0.5rem;overflow:hidden;font-size:0.7rem;">
				{{i}}
				<span @click="lm(i)" style="float:right;">X</span>
			</div>
		</div>
		<p @click="qing" v-if="indexs==2" style="background:white;font-size:0.8rem;text-align:center;padding:0.8rem 0">清空历史</p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				values:'',
				arr:'',
				inx:0,
				names:'',
				lists:JSON.parse(localStorage.hists || "{}"),
				list:[],
				indexs:2
			}
		},
		methods:{
			fn(){
				this.indexs=2
				this.names = localStorage.ncl
				console.log(this.names)
				this.axios.get('http://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash='+this.names+'&keyword='+this.values+'&type=search').then((data)=>{
					console.log(data.data)
					if(data.data.status==0){
						this.inx=1
						return
					}else{
						this.arr = data.data
						this.inx=2
					}
				})
				this.list.push(this.values)
				for(var a = 0; a < this.list.length; a++) {
							localStorage.hists = JSON.stringify(this.list)
				}
			},
			ol(){
				if(this.values==''){
					this.inx=0
				}else{
					this.inx=2
				}
			},
			shopl(i){
				location.href=`#/shoplist/${i}`
				
			},
			lm(i){
				console.log(i)
				for(var a = 0; a < this.lists.length; a++) {
					if(i==this.lists[a]){
						this.lists.splice(a,1)
						// .splice(a,1)
						localStorage.hists.substring(a)
					}
				}
			},
			qing(){
				this.lists=''
				localStorage.hists=''
				this.indexs=1
			}
		},
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