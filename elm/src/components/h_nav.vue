<template>
	<div id="h_nav">
		<div id="left">
			<slot name="left"></slot>
			<!--<i class="iconfont icon-toright"></i>-->
		</div>
		<div id="title">
			<slot name="title"></slot>
		</div>
		<div id="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'h_nav',
	}
</script>

<style>
	#h_nav {
		background: #3190e8;
		position: relative;
		top: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		height: 2.125rem;
		line-height: 2.125rem;
		display: flex;
	}
	
	#h_nav>div {
		font-size: 0.7rem;
		color: white;
	}
	
	#h_nav #left {
		flex: 1;
		margin-left: 0.5rem;
	}
	
	#h_nav #title {
		flex: 6;
		text-align: center;
	}
	
	#h_nav #right {
		flex: 2;
		text-align: right;
		margin-right: 0.5rem;
	}
	
	#h_nav a {
		color: white;
		text-decoration: none;
	}
</style>