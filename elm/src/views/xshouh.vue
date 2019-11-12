<template>
	<div class="big" style="position: absolute;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				选择地址
			</div>
		</h_nav>
		<div style="max-height: 23.25rem;overflow:auto;">
			<div style="overflow: hidden;padding-left: .5rem;border-bottom: solid 1px #f5f5f5;padding-bottom: 0.5rem;" v-for="(i,$index) in arr" :key="$index" @click="fnc(i)">
				<div style="float: left;width: 10%;text-align: center;margin-top: 0.25rem;">
					<span class="iconfont icon-duihao" style="color: #4cd964;"></span>
				</div>
				<div style="width: 70%;float: left;">
					<p class="j_ytr"><span>{{i.name}}</span><span>先生</span><span>{{i.phone}}</span></p>
					<p class="j_hnm"><span>{{i.tag}}</span><span>{{i.address_detail}}</span></p>
				</div>
			</div>
			<div class="j_smg" @click="fn">
				<img class="ig" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABCFJREFUWAnNmUtsU0cUhs9cQkKCAwgJpxgJqWqXEQS84CHaIpZsKAhKu2JNUwISsAWFLSBBxGPNihYqqmxYIqCIx8I8qi5bIVXCYLdSW2ISHIiH84091sW5wQ8w10e69r3jmTnfnczj/CdGWrT0WO6zkpVt2jwt1qbEmJTec2FZLctqWVbvM4GR8czIwJ/ulyY/TDP1N56fSE5NT/5gxG63VgabaWuM/G7F/NLb3Xfm9t7+fKNtGwLcfDafeP7aHrQih3RkEnTevyCwX37aY9av7JZP+ufJsoWBu7SO/POiJH/r9WxiRu7+NS03HxftxMtS2ZcxBb05sajLnLw+nCzUA60LuHYst0NH65yCDdDZls8XyLer+2TNivkyr27rsvsZpX7w5JX8+GhSrv3xslxoTE5H9fv7IwNXygXRn3O6sNaa9Fj+iPZ9VOHMUKpbDmxKyKrl86N7arD0t6ev5NStgjzMTovOUasAo5mR5DGj91FdRAJuuGR7i9n8BSt2VxAYe/CLhPluqC+qfctlFx9OyslfC7ZUsjqQ5nJPKrnnzjdmqrbDoLaAkfNwiZ7Ant225IPD4ZMXpm98MBDOp/qu5ZkFWP6z2l00vLB7qVmni6BdRt/48JD4rvX1FnFlQfys+5Z7u3bChUHu6UofHv/P6r6q01J2hhdOdQTZSiqr1TDnWoFbezonXM0avvDJYoQBFt9HFZB9jq2E1fqhF4R39q5vfOIbBsdSqewAOSF0dA9RxlYSl3nfsMAEhwMsFqf2KXmCTfh997n3eTl8wwALR2oV0JrS1zxwQsRtnoHzHpaAqEQn5iBnK8dX3AYDLDDBFlRCJvlKD/5Gz9Z2vgQMsOADNuZgmodWthXatcNCLOlAJ6QLMgmZOsWqLMoWVCJhF8t1CiCxpTON0rv0xo1gtTCCstnTodH69/e7EHOWxxBLSoMpcXGY+5hVNZ4CzwJblwY4TxWxnzB95ZLoeTjXm9bi+5FrtH5te/8MCwYbiwTl5TQE351g6BlnysYicYAInE6xKouysVwygBGTdYqhBCuWUckh4zzcUGmI+orbYECmwgFbgOJHVKNbkYZxGwywwASb2xFR/IChW+M2z+CZHCDpCF0sBUQ1ujUuw7cT9srimBTEAZIr0fDhBGCI6rjM+4bF528cIEDkSnQUcyh+RPXHNnxWsg05x1IBcHGXh+lo2QkkelSJR0lHHL76v338b/s3b3zgq5wCkdGwJobprRGkwCWNTud/Ih2B4j++dXFLGpm+6hmHA3CFom4rmp/J7E/urk0iVeeg74wKJHJoQEMUfzvmJH3St4dzPiMyXLNG0IN2dPrNQ/LdsQnMMORcKWDUFwInnAKmHeGSTwEzzzjn25YCDoOSjiALgdBHt4Z/q3fP2dq2JHqU84/1b4g3B4s+pKLE0ioAAAAASUVORK5CYII=" alt="">
				<span class="sp">新增收货地址</span>
			</div>
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
				location.href = '#/jies/xshouh/tianjx'
			},
			fnc(i) {
				localStorage.idg = i
				localStorage.idk = 1
				location.href = '#/jies'
				this.$store.commit('addx', i)
			}
		},
		data() {
			return {
				arr: ''
			}
		},
		activated() {
			this.axios.get('http://elm.cangdu.org/v1/users/44104/addresses').then((data) => {
				this.arr = data.data
				console.log(this.arr)
			})
		},
		created() {
			this.axios.get('http://elm.cangdu.org/v1/users/44104/addresses').then((data) => {
				this.arr = data.data
			})
		}

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.ig {
		width: 0.6rem;
		height: 0.6rem;
	}
	
	.big {
		width: 16rem;
		height: 22.15rem;
		position: relative;
	}
	
	.j_smg {
		width: 100%;
		height: 2.5rem;
		text-align: center;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	
	.sp {
		font-size: .7rem;
		color: #3190e8;
		margin-left: .3rem;
	}
	
	.j_ytr span {
		line-height: 1rem;
		font-size: .7rem;
		margin-left: 0.3rem;
	}
	
	.j_ytr span:nth-of-type(1) {
		font-size: 1rem;
		color: #333;
		margin-left: 0;
		font-weight: bold;
	}
	
	.j_hnm span:nth-of-type(1) {
		font-size: .5rem;
		color: #fff;
		border-radius: .15rem;
		background-color: #ff5722;
		height: .6rem;
		line-height: .6rem;
		padding: 0 .2rem;
		margin-right: .3rem;
	}
	
	.j_hnm:nth-of-type(2) {
		font-size: .6rem;
		color: #777;
	}
</style>