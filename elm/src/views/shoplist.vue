<template>
	<div style="background: #F5F5F5;width: 100%;overflow: hidden;">
		<div class="s_hea">
			<div @click="inx=1"><span class="iconfont icon-toright" @click="go" style="position: fixed;top: 0.75rem;left: 0.75rem;"></span><span :class="[inx==1?'actives':'']">商品</span></div>
			<div @click="inx=2"><span :class="[inx==2?'actives':'']">评价</span></div>
		</div>
		<div v-if="inx==1">
			<div class="s_con">
				<div class="s_lm">
					<div v-for="(i,index) in arr" @click="fnc(index,i.name)" :key="index">
						<p :class="[indexs==index?'s_act':'']">
							{{i.name}}
						</p>
					</div>
				</div>
				<div>
					<div v-for="(i,index) in arr" @click="indexs=index" :key="index" style="padding-bottom: 0.5rem;border-bottom: solid 1px #f5f5f5;">
						<p>{{i.name}}<span>{{i.description}}</span><span>></span></p>
						<div class="s_kn" v-for="(a,$index) in i.foods" :key="$index">
							<div>
								<img :src="'//elm.cangdu.org/img/'+a.image_path" alt="" style="width: 2.15rem;height: 2.15rem;" />
							</div>
							<div class="j_lpl">
								<h6>我问问</h6>
								<h6>发111</h6>
								<h6>{{a.tips}}</h6>
								<h6><span v-for="(m,index) in a.specfoods" :key="index">{{m.price}}</span>起<i style="float: right;margin-right: 1rem;" v-for="(k,index) in a.specifications" :key="index-1">{{k.name}}</i></h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				inx: 1,
				indexs: 0,
				arr: '',
				ids: this.$route.params.id,
				maod: ''
			}
		},
		created() {
			this.axios.get('http://elm.cangdu.org/shopping/v2/menu?restaurant_id=' + this.ids + '').then((data) => {
				this.arr = data.data
				console.log(this.arr)
			})
		},
		methods: {
			go() {
				this.$router.go(-1)
			},
			fnc(i, b) {
				this.indexs = i
				this.maod = b
			}
		},
	}
</script>

<style>
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
		color: #333
	}
	
	.j_lpl h6:nth-of-type(4) span:nth-of-type(1) {
		font-size: .7rem;
		color: #f60;
		font-weight: 700;
		margin-right: .3rem;
	}
	
	.j_lpl h6:nth-of-type(4) i {
			display: block;
			font-size: .55rem;
			color: #fff;
			padding: .1rem .2rem;
			background-color: #3190e8;
			border-radius: .2rem;
			border: 1px solid #3190e8
		}
</style>