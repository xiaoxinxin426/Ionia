<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #f2f2f2;min-height: 100%;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				修改用户名
			</div>
		</h_nav>
		<div class="j_kn">
			<input type="text" placeholder="输入用户名" v-model="val" />
			<p>用户名只能修改一次（5-24字符之间）</p>
			<h6 @click="xg">确认修改</h6>
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
				val: ''
			}
			
		},
		methods: {
			go() {
				this.$router.go(-1)
			},
			xg() {
				localStorage.name = this.val
				setTimeout(()=>{
					location.href='#/users'
				},500)
			}
		},
	}
</script>

<style>
	.j_kn input {
		background: none;
		width: 15.2rem;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: .2rem .1rem;
		line-height: 1.2rem;
		font-size: .7rem;
		display: block;
		margin: 0.75rem auto 0;
	}
	
	.j_kn p {
		width: 100%;
		font-size: .4rem;
		color: #666;
		padding: .4rem 0 1rem;
	}
	
	.j_kn h6 {
		width: 80%;
		margin: 0 auto;
		background: #007AFF;
		line-height: 1.75rem;
		text-align: center;
	}
</style>