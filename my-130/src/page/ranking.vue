<template>
	<div>
		<headertaps></headertaps>
		<div>
			<router-link to="{path:'/rankings/'+index}" tag="div" v-for="(x,index) in $store.state.xuanhuan" class="ranking" :key = "index.id">
				<div><img v-lazy="x.coverUrl"/></div>
				<div>
					<b>{{x.title}}</b>
					<div>{{x.catName2}}</div>
					<p>阅读量：{{x.viewCount}}</p>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import headertaps from '@/components/headertaps'
	export default {
	  components:{headertaps},
	  mounted(){
	  	this.$ajax.get("http://120.76.205.241:8000/book/easyread163?kw=%E7%8E%84%E5%B9%BB&pageToken=1&apikey=jJybHxVKZVuxmoAzRQpZA8HE7iZohVSeW4iz8T3WxMyGdmXbxEqSAdJwQB9pDC6g").then(res => {
			if(res.data.retcode=="000000"){
				console.log(res.data.data)
				this.metropolis=res.data.data
				this.$store.state.xuanhuan=res.data.data
			}
		})
	  }
	}
</script>

<style lang="scss" scoped="scoped">
	@function px2rem($px, $base-font-size: 75px) {
	    @return ($px / $base-font-size) * 2rem;
	}
	$mc:#379AFF;
	$fontcolor:#BCBCBC;
	.ranking{
		display: flex;
		img{
			width: px2rem(80px);
			height: px2rem(120px);
			margin: 0px px2rem(10px);
		}
		>div{
			margin: px2rem(10px) 0px;
			font-size: px2rem(13px);
			>div{
				margin: px2rem(10px) 0px;
			}
		}
	}
</style>