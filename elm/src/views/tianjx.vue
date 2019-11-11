<template>
	<div class="countent" style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
		<h_nav>
			<div slot="left">
					<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				添加地址
			</div>
		</h_nav>
		<div class="center">
			<div class="l">
				<div class="l1">联系人</div>
				<div class="l2">联系电话</div>
				<div class="l3">送餐地址</div>
				<div class="l4">标签</div>
			</div>
			<div class="r">
				<input type="text" name="name" placeholder="你的名字" class="r1">
				<div style="height: 2rem;">
					<span v-for="(i,$index) in arr" :key="$index" @click="fn($index)" class="iconfont icon-duihao" :class="[inx==$index?'j_zxc':'']">
						{{i}}
					</span>
				</div>
				<input type="text" name="phone" placeholder="你的手机号" class="r3">
				<input type="text" class="r4" placeholder="小区/写字楼/学校等" @click="gos" v-model="values"/>
				<input type="text" name="address_detail" placeholder="详细地址（如门牌号等）" class="r5">
				<input type="text" name="address_detail" placeholder="无/家/学校/公司" class="r5">
			</div>
			
		</div>
		<div class="j_queds">
				确定
			</div>
			<router-view></router-view>
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
		gos(){
			location.href = '#/jies/xshouh/tianjx/so'
		},
		fn(i){
			this.inx = i
		}
	},
	data(){
		return {
			values:this.$store.state.cityn,
			arr:['先生','女士'],
			inx:''
		}
	},
	computed: {
			listenshowpage1() {
				return this.$store.state.cityn;
			},

		},
		watch: {
			listenshowpage1: function(a) {
				this.values = a
			}
		},
}
</script>
<style>
	.j_queds{
		background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .6rem;
	}
	.r5{
		width: 100%;
		height: 2.5rem;
		font-size: .7rem;
		color: #999;
		border: none;
	}
	.r4{
		font-size: .7rem;
		color: #999;
		line-height: 2.5rem;
		border-bottom: .025rem solid #f5f5f5;
		width: 100%;
		border: none;
		font-size: .7rem;
		color: #999;
		margin-top: 0.5rem;
	}
	.r3{
		width: 100%;
		border: none;
		font-size: .7rem;
		color: #999;
	}
	.r2{
		display: flex;
		
		border-top: .025rem solid #f5f5f5;
	}
	.r1{
		width: 100%;
		border: none;
		height: 2.5rem;
		font-size: .7rem;
		color: #999;
	}
	.l4{
		font-size: .7rem;
		color: #333;
		flex: 2;
		line-height: 2.5rem
	}
	.l2{
		font-size: .7rem;
		color: #333;
		flex: 2;
	}
	.l1{
		font-size: .7rem;
		color: #333;
		flex: 2;
		line-height: 2.5rem;
		height: 4.9rem;
	}
	.l3{
		font-size: .7rem;
		height: 5.025rem;
		color: #333;
		flex: 2;
		line-height: 2.5rem;
		margin-top: 0.75rem;
	}
	*{
		margin: 0;
		padding: 0;
	}
	.countent{
		width: 16rem;
		height: auto;
	}
	.center{
		width: 14.575rem;
		overflow: hidden;
		margin: 0 auto;
	}
	.l{
		width: 4.15rem;
		float: left;
	}
	.r{
		width: 10.425rem;
		float: right;
	}
	.j_zxc{
		color: #4cd964;
	}
</style>
