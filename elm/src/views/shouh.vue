<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #f5f5f5;min-height: 100%;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				编辑地址
			</div>
			<div slot="right">

			</div>编辑
		</h_nav>
		<div class="j_knh" @click="fn">
			新增地址
			<span>></span>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import h_nav from './../components/h_nav.vue'
	export default {
		components: {
			h_nav
		},
		methods: {
			go() {
				this.$router.go(-1)
			},
			fn() {
				location.href = '#/users/shouh/shoud'
			}
		},
	}
</script>

<style>
	.j_knh {
		margin-top: .4rem;
		background: #fff;
		padding: .2rem .4rem;
		border-top: 1px solid #d9d9d9;
		display: block;
		font-size: .7rem;
		color: #333;
		line-height: 1.4rem;
	}
	
	.j_knh span {
		float: right;
		margin-right: 0.5rem;
		font-size: 1rem;
	}
</style>