<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
	<div id="nav">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				历史红包
			</div>
		</h_nav>
	</div>
	</div>
</template>

<script>import h_nav from './../components/h_nav.vue'
	export default {
		components: {
			h_nav
		},
		methods:{
			go() {
				this.$router.go(-1)
			},
		}
	}
</script>

<style>
</style>