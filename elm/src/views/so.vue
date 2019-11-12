<template>
	<div class="countent" style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
		<h_nav>
			<div slot="left">
					<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				搜索
			</div>
		</h_nav>
		<form data-v-3ab7c394="" class="search_form"><input data-v-3ab7c394="" type="search" name="search" placeholder="请输入小区/写字楼/学校等" v-model="values"> <span @click="sou">搜索</span></form>
		<div class="sm">
			<p>找不到地址？</p>
			<p>尝试输入小区、写字楼或学校名</p>
			<p>详细地址（如门牌号等）可稍后输入哦</p>
		</div>
		<div class="j_lists">
			<div v-for="(item,index) in arr" :key="index">
				<li @click="fn(item.name)">
				<p style="color: #666;">{{item.name}}</p>
				<p >{{item.address}}</p>
				</li>
			</div>
		</div>
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
			values:'',
			arr:[]
		}
	},
	methods:{
		go(){
				this.$router.go(-1)
		},
		sou(){
			this.axios.get('http://elm.cangdu.org/v1/pois?type=nearby&keyword='+this.values+'').then((data)=>{
				this.arr = data.data
				console.log(this.arr)
			})
		},
		fn(i){
			this.$store.commit('cityn', i)
			setTimeout(()=>{
				this.$router.go(-1)
			},1000)
		}
	},
}
</script>
<style>
	.j_lists{
		padding: .7rem;
		background: #FFFFFF;
		position: relative;
		z-index: 99;
	}
	.j_lists p:nth-of-type(1){
		font-size: .75rem;
    color: #555;
	}
	.j_lists p:nth-of-type(2){
		font-size: .65rem;
    color: #999
	}
	.j_lists li{
		padding: .7rem 0;
    border-bottom: .025rem solid #f5f5f5;
    line-height: 1rem;
	}
	.sm{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 100%;
	}
	*{
		margin: 0;
		padding: 0;
	}
	.sm p{
		font-size: .5rem;
		color: #aaa;
		line-height: .7rem;
		text-align: center;
	}
	.search_form{
		display: flex;
		padding: .7rem;
	}
	.search_form input[data-v-3ab7c394] {
    font-size: .65rem;
    color: #999;
    flex: 4;
    background-color: #f1f1f1;
	outline: none;
    margin-right: .6rem;
	border: none;
    height: 1.5rem;
    border-radius: .15rem;
    padding: 0 .4rem;
}
.search_form span {
    flex: 1;
	border: none;
	outline: none;
    font-size: .65rem;
    color: #fff;
    background-color: #3190e8;
    border-radius: .15rem;
    text-align: center;
    line-height: 1rem;
    padding-top: 0.2rem;
}
</style>
