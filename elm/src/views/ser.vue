<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
		<h_nav>
			<div slot="left">
					<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				{{this.$store.state.titles}}
			</div>
		</h_nav>
		<div style="padding: 0.5rem;font-size: 1rem;font-size: 0.7rem;max-height: 26.25rem;overflow:auto;">
			{{this.$store.state.cons}}
		</div>
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
	},
}
</script>

<style>
</style>