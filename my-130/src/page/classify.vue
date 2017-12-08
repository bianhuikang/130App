<template>
	<!--根元素-->
	<div>
		<!--头部理由-->
		<headertaps></headertaps>
		<!--分类-->
		<div class="classify">
			<!--分类
			{{$store.state.count}}
			 <div>
		        <button @click="$store.commit('add')">+</button>
		        <button @click="$store.commit('reduce')">-</button>
		    </div>-->
		    <b>男生小说</b>
		    <div>
		    	<div style="color:#379AFF ;">都市生活</div>
		    	<div>官场职场</div>
		    	<div style="color:#379AFF ;">玄幻仙侠</div>
		    	<div>悬疑探险</div>
		    	<div>军事谍战</div>
		    	<div>科幻奇幻</div>
		    	<div>同人网游</div>
		    	<div>灵异恐怖</div>
		    	<div>历史传奇</div>
		    	<div>短篇小说</div>
		    </div>
		</div>
		
		<div class="classify">
		    <b>女生小说</b>
		    <div>
		    	<div>都是言情</div>
		    	<div>穿越架空</div>
		    	<div style="color:#379AFF ;">宫斗宅斗</div>
		    	<div>古风古韵</div>
		    	<div>种田重生</div>
		    	<div>浪漫青春</div>
		    	<div>同人网游</div>
		    	<div>仙侠幻情</div>
		    	<div>历史传奇</div>
		    	<div>倩女幽魂</div>
		    	<div>浪漫青春</div>
		    </div>
		</div>
		
		<div class="classify">
		    <b>图书书库</b>
		    <div>
		    	<div style="color:#379AFF ;">都市生活</div>
		    	<div>官场职场</div>
		    	<div style="color:#379AFF ;">玄幻仙侠</div>
		    	<div>悬疑探险</div>
		    	<div>军事谍战</div>
		    	<div>科幻奇幻</div>
		    	<div>同人网游</div>
		    	<div>灵异恐怖</div>
		    	<div>历史传奇</div>
		    	<div>短篇小说</div>
		    </div>
		</div>
	</div>
</template>

<script>
	import headertaps from '@/components/headertaps'
	
	import store from '../router/store'
	export default {
		data(){
			return{
				mlistbox:[]
			}
		},
	  components:{headertaps},
	  computed:{
	  },
	  mounted() {
//			this.$ajax.get("http://120.76.205.241:8000/book/easyread163?kw=%E9%87%8D%E7%A3%85%E6%8E%A8%E8%8D%90&apikey=jJybHxVKZVuxmoAzRQpZA8HE7iZohVSeW4iz8T3WxMyGdmXbxEqSAdJwQB9pDC6g").then(res => {
//				if(res.data.retcode=="000000"){
//					this.$store.state.res=res.data.data
//					console.log(this.$store.state.res)
//				}
//			})
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@function px2rem($px, $base-font-size: 75px) {
	    @return ($px / $base-font-size) * 2rem;
	}
	$mc:#379AFF;
	$fontcolor:#BCBCBC;
	.classify{
		width: 100%;
		margin-top: px2rem(10px);
		b{
			font-size: px2rem(15px);
			color: $mc;
			margin: px2rem(10px) px2rem(10px);
			border-left:2px $mc solid ;
			padding:0px px2rem(4px);
			
		}
		>div{
			display: flex;
			flex-wrap: wrap;
			>div{
				width:25%;
				text-align: center;
				line-height: px2rem(30px);
				border-radius:px2rem(5px);
				height: px2rem(30px);
				margin-left: px2rem(25px);
				margin-top: px2rem(10px);
				background:#F5F5F5;
			}
		}
	}
</style>