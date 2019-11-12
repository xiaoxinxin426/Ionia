<template>
	<div>
		<div class="j_dg">
			<div style="flex: 1;text-align: center;">
				<a :href="'#/fujin/waimai/'+names" ><p class="iconfont icon-eliaomo"></p></a>
				<a :href="'#/fujin/waimai/'+names" class="j_ako">外卖</a>
			</div>
			<div style="flex: 1;text-align: center;">
				<a href="#/fujin/sousuo"><p class="iconfont icon-faxian"></p></a>
				<a href="#/fujin/sousuo" class="j_ako">搜索</a>
			</div>
			<div style="flex: 1;text-align: center;">
				<a href="#/fujin/dingdan"><p class="iconfont icon-liebiao"></p></a>
				<a href="#/fujin/dingdan" class="j_ako">订单</a>
			</div>
			<div style="flex: 1;text-align: center;">
				<a href="#/fujin/wode"><p class="iconfont icon-wode"></p></a>
				<a href="#/fujin/wode" class="j_ako">我的</a>
			</div>
		</div>
		<keep-alive>
		<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				names:'',
				inx:''
			}
		},
		methods:{
			fn(){
				this.inx=1
			}
		},
		created(){
			this.names = localStorage.ncl
		},
		
	}
</script>

<style>
	.iconfont{
		line-height:0.9rem;
		font-size: .625rem;
	}
	.j_ako{
		color: #666666;
		font-size: 0.5rem;
	}
	.j_dg{
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		z-index: 2;
		display: flex;
		width: 100%;
	}
	.j_dg p{
		line-height: 0.5rem;
	}
	.active{
		color:#3190e8 ;
	}
</style>