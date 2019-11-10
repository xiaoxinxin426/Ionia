<template>
	<div>
		<h_nav>
			<div slot="left">
					<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				订单列表
			</div>
		</h_nav>
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
			}
		}
	}
</script>

<style>
</style>