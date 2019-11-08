<template>
	<div style="background: #f5f5f5;">
		<div class="j_dad">
			<p class="iconfont icon-touxiang1"></p>
			<div>
				<p>登陆/注册</p>
				<span class="iconfont icon-shouji">暂无绑定手机号</span>
			</div>
			<p class="j_gr">
				>
			</p>
		</div>
		<div class="j_do">
			<div>
				<span>0.00</span><span>元</span><br />
				<p>我的余额</p>
			</div>
			<div style="border-left: solid 1px #f5f5f5;border-right: solid 1px #f5f5f5;">
				<span>0</span><span>个</span><br />
				<p>我的优惠</p>
			</div>
			<div>
				<span>0</span><span>分</span><br />
				<p>我的积分</p>
			</div>
		</div>
		<div style="background: #FFFFFF;margin-top: 0.75rem;">
			<div class="j_ok">
				<span class="iconfont icon-liebiao"></span>
				<span>我的订单</span>
				<span>></span>
			</div>
			<div class="j_ok">
				<span class="iconfont icon-shangchengjifenshangcheng_xuanzhong"></span>
				<span>积分商城</span>
				<span>></span>
			</div>
			<div class="j_ok">
				<span class="iconfont icon-huangguan"></span>
				<span>饿了么会员卡</span>
				<span>></span>
			</div>
		</div>
		<div class="j_km">
			<div class="j_ok">
				<span class="iconfont icon-zhengfangxing"></span>
				<span>服务中心</span>
				<span>></span>
			</div>
			<div class="j_ok">
				<span class="iconfont icon-elemo"></span>
				<span>下载饿了么APP</span>
				<span>></span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.j_dad {
		display: flex;
		padding: 0.5rem;
		background: #3190e8;
		color: #FFFFFF;
	}
	
	.j_dad .icon-touxiang1 {
		flex: 1;
		color: #CCCCCC;
		font-size: 2.8rem;
		line-height: 3rem;
		width: 100%;
		height: 100%;
		display: inline-block;
		margin-right: 0.75rem;
	}
	
	.j_dad .shouji {
		color: #FFFFFF;
	}
	
	.j_dad div {
		flex: 3;
		text-align: left;
	}
	
	.j_dad .j_gr {
		flex: 1;
		text-align: right;
		line-height: 3rem;
	}
	
	.j_do {
		display: flex;
		background: #FFFFFF;
	}
	
	.j_do div {
		flex: 1;
		text-align: center;
	}
	
	.j_do div:nth-of-type(1) span:nth-of-type(1) {
		display: inline-block;
		font-size: 1.2rem;
		color: #f90;
		font-weight: 700;
		line-height: 2.5rem;
		font-family: Helvetica Neue, Tahoma
	}
	
	.j_do div:nth-of-type(2) span:nth-of-type(1) {
		display: inline-block;
		font-size: 1.2rem;
		color: #ff5f3e;
		font-weight: 700;
		line-height: 2.5rem;
		font-family: Helvetica Neue, Tahoma
	}
	
	.j_do div:nth-of-type(3) span:nth-of-type(1) {
		display: inline-block;
		font-size: 1.2rem;
		color: #6ac20b;
		font-weight: 700;
		line-height: 2.5rem;
		font-family: Helvetica Neue, Tahoma
	}
	
	.j_do div p {
		font-size: .57333rem;
		color: #666;
		font-weight: 400;
		padding-bottom: .453333rem
	}
	
	.j_do div span:nth-of-type(2) {
		font-size: .5rem;
		color: #666;
		font-weight: 400;
		padding-bottom: .453333rem
	}
	.j_ok{
		overflow: hidden;
		padding: 0 0.5rem 0 0.75rem;
	}
	.j_ok span:nth-of-type(1){
		margin-right: 0.75rem;
	}
	.j_ok span:nth-of-type(2){
		font-size: 0.8rem;
		width: 80%;
		border-bottom: solid 1px #f5f5f5;
		display: inline-block;
		padding-bottom: 0.5rem;
	}
	.j_ok span:nth-of-type(3){
		float: right;
		color: #666;
	}
	.j_ok .icon-shangchengjifenshangcheng_xuanzhong{
		color: #fc7b53;
	}
	.j_ok .icon-huangguan{
		color: #ffc636;
	}
	.j_km .iconfont{
		color: #3190e8;
		
	}
	.j_km{
		background: #FFFFFF;
		margin-top: 0.55rem;
	}
</style>