<template>
  <div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
    <div id="nav">
      <h_nav>
        <div slot="left">
          <i class="iconfont icon-toright" @click="go"></i>
        </div>
        <div slot="title">历史红包</div>
      </h_nav>
    </div>
    <!---->
    <div>
      <div class="hb1">
        <div class="numb">
          <p>￥1.0</p>
          <span>满20元可用</span>
        </div>
        <div class="time">
          <p>分享红包</p>
          <span>2099年13月32日过期</span>
          <span>限收货手机号为：121212121</span>
          <h4>已过期</h4>
        </div>
      </div>
    </div>
    <!---->
	<div>
      <div class="hb1">
        <div class="numb">
          <p>￥9.0</p>
          <span>满20元可用</span>
        </div>
        <div class="time">
          <p>分享红包</p>
          <span>2099年13月32日过期</span>
          <span>限收货手机号为：121212121</span>
          <h4>已过期</h4>
        </div>
      </div>
    </div>
	<!---->
	<div>
      <div class="hb1">
        <div class="numb">
          <p>￥5.0</p>
          <span>满20元可用</span>
        </div>
        <div class="time">
          <p>分享红包</p>
          <span>2099年13月32日过期</span>
          <span>限收货手机号为：121212121</span>
          <h4>已过期</h4>
        </div>
      </div>
    </div>
	<!---->
	<div>
      <div class="hb1">
        <div class="numb">
          <p>￥13.0</p>
          <span>满20元可用</span>
        </div>
        <div class="time">
          <p>分享红包</p>
          <span>2099年13月32日过期</span>
          <span>限收货手机号为：121212121</span>
          <h4>已过期</h4>
        </div>
      </div>
    </div>
	<!---->
	<div>
      <div class="hb1">
        <div class="numb">
          <p>￥6.0</p>
          <span>满20元可用</span>
        </div>
        <div class="time">
          <p>分享红包</p>
          <span>2099年13月32日过期</span>
          <span>限收货手机号为：121212121</span>
          <h4>已过期</h4>
        </div>
      </div>
    </div>
	<!---->
  </div>
</template>

<script>
import h_nav from "./../components/h_nav.vue";
export default {
  components: {
    h_nav
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
	.hb1 {
		width: 100%;
		background: #ffffff;
		margin: 0.625rem auto;
		padding: 0.625rem;
		border-top: 2px solid #ccc;
		overflow: hidden;
		margin-bottom: .5rem;
	}
	.numb {
		width: 30%;
		float: left;
	}
	
	.numb p {
		font-size: 1rem;
		color: #ccc;
		padding-top: 0.625rem;
	}
	
	.numb span {
		font-size: 0.325rem;
		color: #666;
		display: block;
		margin-top: 0.25rem;
	}
	.time {
		width: 70%;
		float: left;
		font-size: 0.625rem;
		position: relative;
	}
	
	.time p {
		font-size: 0.55rem;
		color: #666;
		padding-top: 0.625rem;
	}
	
	.time span {
		font-size: 0.325rem;
		color: #666;
		display: block;
		margin-top: 0.25rem;
	}
	
	.time h4 {
		color: #ccc;
		position: absolute;
		right: 10px;
		top: 0.5rem;
		font-weight: normal;
	}
</style>