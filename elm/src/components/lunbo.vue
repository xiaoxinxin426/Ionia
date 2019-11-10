<template>
	<div style="margin-top: 1rem;">
		<div>
			<mt-swipe :auto="0" class="z_mt-swipe">
				<mt-swipe-item>
					<div class="z_lb_1">

						<div class="z_lb_2" v-for="i in fruit" :key="i.i">
							<router-link :to="{name: 'filter',params: {id:i.id,title:i.title,jwd:$store.state.names}}">
								<li>
									<div class="z_lb_img">
										<img :src="'https://fuss10.elemecdn.com/'+i.image_url">
									</div>
									<p class="z_lb_p">{{i.title}}</p>
								</li>
							</router-link>
						</div>

					</div>
				</mt-swipe-item>
				<mt-swipe-item>
					<div class="z_lb_1">
						<div class="z_lb_2" v-for="i in fruit_2" :key="i.i">
							<router-link :to="{name: 'filter',params: {id:i.id,title:i.title,jwd:$store.state.names}}">
								<li>
									<div class="z_lb_img">
										<img :src="'https://fuss10.elemecdn.com/'+i.image_url">
									</div>
									<p class="z_lb_p">{{i.title}}</p>
								</li>
							</router-link>
						</div>

					</div>
				</mt-swipe-item>
			</mt-swipe>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				fruit: '',
				fruit_2: ''
			}
		},
		created() {
			this.axios
				.get(
					"http://elm.cangdu.org/v2/index_entry?geohash=31.249601,121.455704&group_type=1&flags[]=F", {}
				)
				.then(data => {
					// console.log(data.data);
					this.fruit = data.data.splice(0, 8);
					this.fruit_2 = data.data.splice(0, 8);
					console.log(this.fruit)
					console.log(this.fruit_2);
				});
		}
	};
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style: none;
	}
	
	.z_mt-swipe {
		width: 100%;
		height: 9rem;
		background: #FFFFFF;
	}
	
	.z_lb_1 {
		width: 100%;
		height: 15rem;
		/* background: blue; */
		overflow: hidden;
	}
	
	.z_lb_2 {
		height: 4rem;
		width: 4rem;
		/* border: solid #ccc 1px; */
		float: left;
		margin-bottom: .5rem;
	}
	
	.z_lb_2 li {
		float: left;
		height: 4rem;
		width: 4rem;
	}
	
	.z_lb_img {
		width: 2.5rem;
		height: 2.5rem;
		margin: 0 auto;
	}
	
	.z_lb_img img {
		width: 100%;
		height: 100%;
	}
	
	.z_lb_p {
		font-size: .5rem;
		text-align: center;
		line-height: 1rem;
		height: 1rem;
		/* background: red; */
	}
</style>