<template>
	<div style="position: fixed;top: 0;z-index: 9;width: 100%;background: #FFFFFF;min-height: 100%;">
		<h_nav>
			<div slot="left">
				<i class="iconfont icon-toright" @click="go"></i>
			</div>
			<div slot="title">
				积分问题
			</div>
		</h_nav>
		<div class="sj">
			<p class="zf">剩余支付时间</p>
			<p style="font-size:2rem;margin-top:0.5rem;">00:{{minutes}}:{{seconds}}</p>
		</div>
		<div class="zffs">选择支付方式</div>
		<div class="zfb" v-for="(i,$index) in arr" :key="$index">
			<div class="icon-zfb">
				<img :src="i.img_url" alt="" style="width: 2rem;height: 2rem;" />
			</div>
			<div class="wen">{{i.name}}</div>
			<span style="font-size:1.2rem;" class="iconfont icon-duihao" @click="fnc($index)" :class="[inx==$index?'f_oi':'']"></span>
		</div>

		<div class="btnn" @click="fn">在线支付</div>
			<!---->
			<a_t v-if="type" @type='an'>
				<p slot="cz">暂不开放支付功能</p>
			</a_t>
		<!---->
	</div>
</template>
<script>
	import h_nav from './../components/h_nav.vue'
	import a_t from './../components/alert.vue'
	export default {
		components: {
			h_nav,a_t
		},
		data() {
			return {
				type:false,
				arr: [{
						img_url: '		data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAw1BMVEUAAAAA0A0A0A0A0A0A0A4A0Q4A0xIA5ikA0Q4A0A4A0A4A0Q0A0Q8A0w4A0hIA1xQAzw4A0A4A0A0Azw4A0A4A0A0Azw8Azw8Azw4AzxAA0Q4Azw3///8I0BQT0h4Z1CT6/vrV99fy/PK38rpi4mqO6pNE3E0v2DnP9tHE9Mem7qqC54go1zP2/fad7aJ75oFP3lfe+N/a+Nvv/O/r++zj+uTI9cqF6Isi1S3o+um98sCW65s920au77Jc4GQ22UBq43GiLjBXAAAAG3RSTlMA68X64EkqBlW6pJljNhwT9e/Sy7Ksi3trQDhS7vz/AAAEfElEQVRo3rzWWQKDIAwE0CQgoFC1m13m/vfsAdSKQnw3yMx8hHbzLry6Vm6WjWF7k7Z7BedJl3s/LRbZ59uRjiF1jL+4SwNV5sPDIIN5hJqpX+IV2a7xQnV8WuzUfqhcIzhAmtKQ7zjoXhL4EFEgHp54YhThREf0gmLSHxgVowLeOzI/oZLJl8esH7ezqMg6yvRlVMXfzFmNqGzMmlgwqM6EjHsNFJhms98RKsaNnh1DCTv6o7dQY3ta5QWKxNOaCaqm1UFDWbNSMEMZL9csUCe0IOEEiWYGxgl4/odFnCLO/tgfr3W2kzAQhQFYA0owMcYtav4zTEs3lhawVfbF938qO2QooPQMw0W/u7n6M5M5Cyryd+t9RkWeKy7hvZuKSokvqQ9U6ONqr4kKNe2/tAj7q26aOTO32/uJcKl7uxoW/jyhQ+3BEhxzLTceYdTqz+i/1McFHhu7vRJGfptOc0PY2+2cLzCQHpXrCdh60eOhBl70RZyOhKXag56HxlzeLIZiPR3vwIq/yORTws7dlXINjuiQlvWCzmFa0B8Xry1g5Xq7w4M1JM2VxUnxVNaEtAnsqO3+HZzYIW0JpbikhJLqUzKFlfc8+BWcBWkOtgJ9/MZWj7QVrLzmwXUwREY78ijJEVC6pDkt2Kjn/RKcERUC5KYJaX3kQir4sNIw/K0B7Q020/Xs4LjcDBPKJR1vMAksg28NjXpuLOEgFBAyCsOoZdeu38BJieWuIUZFdSfeMMKZ3gx9KyFG24ecZHRkPDq3dzXBaXPXjUXgnHj8EGdoGvbLTyrlicilkxbinF3zCRyPyozFyCl9CwmTJ75/YEgl0pbKvTy5bphNMZVYbhxiuMI4n2pgjcv2HZd2MjohAK/2y5zZ7TQIBUE4atLWqjEaE01mu4dS+oMgrQoWi619/6cyRn4CIpO0aeW75eLAsjtndpcdvJA6LONJimvwEWavE5txHhJ2MOvHR/UZndeZX2RCNACQqcmKhZqN1ExdJJ2NZCgAJ/340kUZk+S6BaEue7WIgwcM3FQyfUDD/AEpp1MwHKkSIZScVZILericR8XvIAJyDsrC/iUewhkSyeyD41eUc+0L54lcEvcAR9/KVWyEY5NrsYcqvKhWsPYNdS+1PgStCDWehRIQ69NFCk1se7wcpZ5LE6EsiNnLFIRZL3upAKDTyWbr6KcwIqIf34aeYuTVU5QYCsGhhv4BlM1cUWEizbi8helgJ4Jm16topNPQphJ01lTDxOaeNDTmFB3+fS4zmv29RvPGlXqiKQiXZPjCmFu7DWPOrsm4iTJd1yY0444O2Dhx8l76uz+mhNArRor74G+D0Sx6cR+9iapn81b5pnuIRYhJLDaWuDjQJiQOiJu/+v9B+ZFXA21Yhhx1/dOOhdcRV3xtWWp+dW8HRAAAIAgD+7e2gwI3zLFfLONywnUm1bNwQoBj0ACKndzwkJGXVTEhmY/OcbGgh0eyQaiewPLRr5Y5d8BuGWVvwvuCXaFv0LgsKb0TzmY76h+tNmvZg5lOvA8OU9y6bDob0foAAAAASUVORK5CYII=',
						name: '微信',
					},
					{
						img_url: '		data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAIAAABsNpe/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMjgzMDhGREVFQUIxMUU2OUE4QjgyRUYwMDgxQTc4QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMjgzMDhGRUVFQUIxMUU2OUE4QjgyRUYwMDgxQTc4QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQyODMwOEZCRUVBQjExRTY5QThCODJFRjAwODFBNzhBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQyODMwOEZDRUVBQjExRTY5QThCODJFRjAwODFBNzhBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+i3VM1AAACXJJREFU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',
						name: '支付宝'
					}
				],
				inx: '',
				minutes: 15,
				seconds: 0
			}
		},
		methods: {
			an(a){
				this.type=a
			},
			go() {
				this.$router.go(-1)
			},
			fn() {
				this.type = true
				// alert('当前环境无法支付,请打开官方APP进行付款')
				setTimeout(() => {
					location.href = "#/fujin/dingdan"
				}, 1000)

			},
			fnc(i) {
				this.inx = i
			},
			num: function(n) {
				return n < 10 ? '0' + n : '' + n
			},
			add: function() {
				var _this = this
				var time = window.setInterval(function() {
					if(_this.seconds === 0 && _this.minutes !== 0) {
						_this.seconds = 59
						_this.minutes -= 1
					} else if(_this.minutes === 0 && _this.seconds === 0) {
						_this.seconds = 0
						window.clearInterval(time)
					} else {
						_this.seconds -= 1
					}
				}, 1000)
			}
		},
		mounted() {
			// this.add()
				this.an()
			this.add()
			this.type = true
		},
		watch: {
			second: {
				handler(newVal) {
					this.num(newVal)
				}
			},
			minute: {
				handler(newVal) {
					this.num(newVal)
				}
			}
		},
		computed: {
			second: function() {
				return this.num(this.seconds)
			},
			minute: function() {
				return this.num(this.minutes)
			}
		}
	}
</script>
<style>
	.btnn {
		background-color: #4cd964;
		font-size: .7rem;
		color: #fff;
		text-align: center;
		margin: 0 .7rem;
		line-height: 1.8rem;
		border-radius: .2rem;
		margin-top: .5rem;
		font-weight: 700;
	}
	
	.icon-wx {
		width: 2rem;
		float: left;
		height: 2rem;
		background-size: 1.9rem 2rem;
		margin-right: .3rem;
		background-repeat: no-repeat;
	}
	
	.wen {
		color: #666;
		float: left;
		font-size: .7rem;
		height: .8rem;
	}
	
	.icon-zfb {
		width: 2rem;
		float: left;
		height: 2rem;
		background-size: 100% 100%;
		margin-right: .2rem;
		background-repeat: no-repeat;
	}
	
	.zfb {
		margin-top: 0.7rem;
		padding: 0 .7rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	.sj {
		width: 16rem;
		height: 5.75rem;
		text-align: center;
	}
	
	.zffs {
		background-color: #f1f1f1;
		padding: 0 .7rem;
		font-size: .7rem;
		color: #666;
		line-height: 1.8rem;
	}
	
	.zf {
		font-size: .6rem;
		color: #666;
		margin-top: 1rem;
	}
	
	.f_oi {
		color: #4cd964;
	}
</style>