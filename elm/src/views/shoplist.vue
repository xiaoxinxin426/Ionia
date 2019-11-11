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
					<div v-for="(i,index) in arr" @click="indexs=index" :key="index" style="padding-bottom: 1rem;border-bottom: solid 1px #f5f5f5;">
						<p>{{i.name}}<span>{{i.description}}</span><span>></span></p>
						<div class="s_kn" v-for="(a,$index) in i.foods" :key="$index">
							<div>
								<img :src="'//elm.cangdu.org/img/'+a.image_path" alt="" style="width: 2.15rem;height: 2.15rem;" />
							</div>
							<div class="j_lpl">
								<h6>{{a.name}}</h6>
								<h6>{{a.description}}</h6>
								<h6>{{a.tips}}</h6>
								<h6><span>{{a.activity?a.activity.image_text:''}}</span></h6>
								<h6><span>{{a.specfoods[0].price}}</span>起<jia v-model="a.__v"></jia></h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="j_foot" @click="tiao">
			<div>
				<p>￥{{totalPrice}}</p>
				<p>配送费￥5</p>
			</div>
			<div @click="got">
				结算
			</div>
			
		</div>
		<mt-popup v-model="popupVisible" position="bottom" style="z-index: 2;bottom: 2rem;">
			<div class="j_shops">
				<p style="background: #f5f5f5;">购物车<span class="j_spans" @click="qin">清空</span></p>
				<div v-for="(i,$index) in $store.state.numb" :key="$index" style="background: #FFFFFF;padding: 0 0.5rem 0 1rem">
					<span style="font-size: .7rem;color: #666;font-weight: 700;">{{i.name}}</span><span style="font-size: .7rem;color: #f60;font-family: Helvetica Neue,Tahoma;font-weight: 700;margin-left: 5rem;">￥{{i.specfoods[0].price}}</span>
					<jia v-model="i.__v" style="float: right;width: 40%;text-align: right;margin-right: 0.75rem;"></jia>
				</div>
			</div>
		</mt-popup>
		
	</div>
</template>

<script>
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
				popupVisible: false
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
			},
			got() {
				location.href = '#/jies'
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
		text-align: center;
		background: #000000;
		color: #FFFFFF;
	}
	
	.j_foot div:nth-of-type(2) {
		flex: 1;
		text-align: center;
		background: #4cd964;
		color: #FFFFFF;
		line-height: 1.5rem;
		padding-top: .3rem;
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