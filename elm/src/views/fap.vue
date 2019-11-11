<template>
 <div id="fapiao" style="position: fixed;top: 0;z-index: 9;width: 100%;min-height: 100%;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				选择发票抬头
			</div>
		</h_nav>
    <div>
        <div class="top">
      <p>不需要开发票</p>
    </div>
    <div class="duihao"><span class="iconfont icon-duihao" :class="[inx==2?'j_ret':'']" @click="inx=2"></span></div>
    </div>
    <div class="end">
      <input type="submit" value="确定" @click="km"/>
    </div>
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
			km(){
				this.$router.go(-1)
			}
		},
		data(){
			return {
				inx:''
			}
		}
	}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#fapiao {
  width: 100%;
  height:auto;
  background: #f5f5f5;
}
.top {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  background: #ffffff;
  position: relative;
  padding-left: .9375rem;
  margin-top: 0.5rem;
}
.top p {
  font-size: 0.65rem;
  color: #333333;
}
.duihao {
  border-radius: 50%;
  position: absolute;
  right: 2.625rem;
  top: 3.3rem;
  font-size: 0.625rem;
  text-align: center;
  line-height: 2rem;
  color: #CCCCCC;
  font-weight: bold;
}
.end input {
  width: 90%;
  margin: 1rem 0.8rem;
  height: 1.8rem;
  background: #4cd964;
  color: #ffffff;
  border-radius: 0.3rem;
  text-align: center;
  line-height: 1.8rem;
  font-size: 0.675rem;
  border: none;
  outline: none;
}
.j_ret{
	color: #4cd964;
}
</style>