<template>
	<div style="background: #E4E4E4;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				订单列表
			</div>
		</h_nav>

		<div>
			<div v-for="(i,index) in arr" :key="index" style="display: flex;background: white;margin-bottom: 10px;padding: 10px;padding-top:1rem;">
				<div style="flex: 1;">
					<div style="width:2rem;height: 2rem;margin-right:1rem;">
						<img :src="'//elm.cangdu.org/img/'+i.restaurant_image_url" style="width: 100%;height: 100%;">
					</div>
				</div>

				<div style="flex: 5;">
					<div style="overflow: hidden;margin-bottom: 20px;">
						<div style="float: left;">
							<p style="font-size: 0.8rem;">{{i.restaurant_name}}<span style="color:#ccc">></span></p>
							<p style="font-size: 0.6rem;color: #999;">{{i.formatted_created_at}}</p>
						</div>
						<div style="font-size: 0.7rem;float: right;">
							{{i.status_bar.title}}
						</div>
					</div>

					<div style="overflow: hidden;">
						<span style="color:#999;font-size:0.6rem;float: left;">{{i.basket.group[0][0].name}} <span v-if="i.basket.group[0].length-1 > 0">等{{i.basket.group[0].length-1}}件商品</span></span>
						<span style="font-size: 0.6rem;color: #f60;float: right;font-weight: bold;">￥{{i.total_amount}}</span>
					</div>

					<div :style="{color: '#'+ i.status_bar.color}">
						<span style="font-size: 12px;color: orange;border: 1px solid orange;display: inline-block;float: right;margin: 10px 0 0 0 ;" v-if="i.status_bar.title == '等待支付'">{{i.status_bar.sub_title}}</span><!-- {{i.order_time + 900000 - i.order_time++}} -->
						<span style="color: #3190e8;border: 1px solid #3190e8;font-size: 0.6rem;display: inline-block;float: right;margin: 10px 0 0 0 ;" v-if="i.status_bar.title == '支付超时'"><a :href="'#/shoplist/'+ id">再来一单</a></span>
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
				id: ''
			}
		},
		methods: {
			go() {
				this.$router.go(-1)
			}
		},
		created() {
			this.axios.get('http://elm.cangdu.org/bos/v2/users/44156/orders?limit=10&offset=0').then((data) => {
				this.arr = data.data
				console.log(data.data)
			})
			this.id = localStorage.id
		}
	}
</script>

<style>
</style>
