<template>
	<div>
		<headertaps></headertaps>
		<!--重磅推荐-->
		<div class="m-list-box">
			<div class="box-headline"><div><i class="icon iconfont icon-xiaoshuo"></i>重磅推荐</div><div>更多 ></div></div>
			<!--循环书籍-->
			<ul class="m-book-list">
				<router-link :to="{path:'/particulars/'+index}" v-for="(x,index) in mlistbox" class="m-list-min" tag="li" :key = "index.id" v-if="index<6">
					<div><img v-lazy="x.coverUrl" alt="" /></div>
					<div>
						<b class="m-list-box-catPathKey">{{x.catPathKey}}</b>
						<div class="m-list-box-name">{{x.writers[0].name}}</div>
					</div>
				</router-link>
			</ul>
		</div>
		<swiper :options="swiperOption" ref="mySwiper" class="my-swiper">
		    <!-- slides -->
		    <swiper-slide><img src="https://img2.cache.netease.com/news/2017/11/8/2017110820445388f75.jpg"/></swiper-slide>
		    <swiper-slide><img src="https://easyread.ph.126.net/zTmG6aX9NCFcZI5OFU-YLQ==/8796093022878224113.jpg"/></swiper-slide>
		</swiper>
		<!--都市生活-->
		<div class="m-metropolis">
			<div class="box-headline"><div><i class="icon iconfont icon-xiaoshuo"></i>都市言情</div><div>更多 ></div></div>
			<!--循环书籍-->
			<ul class="m-book-list">
				<router-link :to="{path:'/particulars1/'+index}" v-for="(x,index) in metropolis" class="m-list-min" tag="li" :key = "index.id" v-if="index<6">
					<div>
						<div class="m-list-box-catPathKey">[{{x.catName2}}]{{x.title}}</div>
						<div class="abstract">{{x.abstract}}</div>
					</div>
				</router-link>
			</ul>
		</div>
		<swiper :options="swiperOption" ref="mySwiper" class="my-swiper">
		    <!-- slides -->
		    <swiper-slide><img src="https://img5.cache.netease.com/news/2017/9/19/201709192050256cd33.jpg"/></swiper-slide>
		    <swiper-slide><img src="https://img2.cache.netease.com/news/2017/11/15/2017111520385729663.jpg"/></swiper-slide>
		</swiper>
		<!--成功励志-->
		<div class="m-metropolis">
			<div class="box-headline"><div><i class="icon iconfont icon-xiaoshuo"></i>成功励志</div><div>更多 ></div></div>
			<!--循环书籍-->
			<ul class="m-book-list">
				<router-link :to="{path:'/particulars2/'+index}" v-for="(x,index) in motivational" class="m-list-min" tag="li" :key = "index.id" v-if="index<6">
					<div>
						<div class="m-list-box-catPathKey">[{{x.catName2}}]{{x.title}}</div>
						<div class="abstract">{{x.abstract}}</div>
					</div>
				</router-link>
			</ul>
		</div>
		<!--底部-->
		<bottoms></bottoms>
	</div>
</template>

<script>
	//组件
	import headertaps from '@/components/headertaps'
	import bottoms from '@/components/bottoms'
	//swiper
	import VUe from 'vue'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	require('swiper/dist/css/swiper.css')
	export default {
	  components:{
	  	headertaps,
	  	bottoms
	  },
	  data(){
	  	return{
	  		mlistbox:[],
	  		metropolis:[],
	  		motivational:[],
	  		swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
	          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
	          notNextTick: true,
	          // swiper configs 所有的配置同swiper官方api配置
	          autoplay: 3000,
	          loop:true,
	          direction : 'horizontal',
	          grabCursor : true,
	          setWrapperSize :true,
	          autoHeight: true,
	          pagination : '.swiper-pagination',
	          paginationClickable :true,
	          mousewheelControl : true,
	          observeParents:true,
	          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
	        }
	  	}
	  },
		mounted() {
			this.$ajax.get("http://120.76.205.241:8000/book/easyread163?kw=%E9%87%8D%E7%A3%85%E6%8E%A8%E8%8D%90&apikey=jJybHxVKZVuxmoAzRQpZA8HE7iZohVSeW4iz8T3WxMyGdmXbxEqSAdJwQB9pDC6g").then(res => {
				if(res.data.retcode=="000000"){
					console.log(res.data.data)
					this.mlistbox=res.data.data
				}
			}),
			this.$ajax.get("http://120.76.205.241:8000/book/easyread163?catid=original_8_female&apikey=jJybHxVKZVuxmoAzRQpZA8HE7iZohVSeW4iz8T3WxMyGdmXbxEqSAdJwQB9pDC6g").then(res => {
				if(res.data.retcode=="000000"){
					console.log(res.data.data)
					this.metropolis=res.data.data
					this.$store.state.metropolis=res.data.data
				}
			}),
			this.$ajax.get("http://120.76.205.241:8000/book/easyread163?catid=original_11_male&apikey=jJybHxVKZVuxmoAzRQpZA8HE7iZohVSeW4iz8T3WxMyGdmXbxEqSAdJwQB9pDC6g").then(res => {
				if(res.data.retcode=="000000"){
					console.log(res.data.data)
					this.motivational=res.data.data
				}
			})
		}
	}
</script>

<style lang="scss">
	@function px2rem($px, $base-font-size: 75px) {
	    @return ($px / $base-font-size) * 2rem;
	}
	$mc:#379AFF;
	$fontcolor:#BCBCBC;
	.m-list-box{
		width: auto;
		margin: 0px px2rem(8px);
		/*height: px2rem(300px);
		overflow: hidden ;*/
		img{
			width: px2rem(70px);
			height: px2rem(95px);
			margin-right: px2rem(5px);
		}
		.box-headline{
			display: flex;justify-content: space-between;
			>div:nth-of-type(1){
				i{margin-right: px2rem(5px);color:$fontcolor;}
				color:$mc;
				font-size: px2rem(16px);
			}
			>div:nth-of-type(2){
				color: $fontcolor;
				line-height: px2rem(20px);
			}
		}
		.m-book-list{
			display: flex;flex-wrap:wrap;
			text-align: center;
			margin-top: px2rem(5px);
			li{
				width: 33%;margin-top: px2rem(5px);
				>div:nth-of-type(1){
					img{
						border-radius:5px ;
					}
				}
			}
			.m-list-box-name{color:$fontcolor ;}
			.m-list-box-catPathKey{font-size: px2rem(13px);}
			.m-list-box-name{font-size: px2rem(10px);margin-top:px2rem(2px);}
		}
	}
	/*swiper*/
	.my-swiper{
		height: px2rem(140px);
		margin: px2rem(10px) 0px;
		img{width: 100%;height: px2rem(140px);}
	}
	.m-metropolis{
		width: auto;
		margin: 0px px2rem(8px);
		.box-headline{
			display: flex;justify-content: space-between;
			margin: px2rem(8px) 0px;
			>div:nth-of-type(1){
				i{margin-right: px2rem(5px);color:$fontcolor;}
				color:$mc;
				font-size: px2rem(16px);
			}
			>div:nth-of-type(2){
				color: $fontcolor;
				line-height: px2rem(20px);
			}
		}
		.abstract{
			  display: inline-block;
			  width:100%;
			  overflow: hidden;
			  font-size: px2rem(12px);
			  height: px2rem(35px);
			  content: "...";
			  color: $fontcolor;
		}
		.m-list-box-catPathKey{
		  	font-size: px2rem(16px);
		  	margin: px2rem(5px) 0px;
		  	color: #8B8C87;
		}
		.m-list-min{
			border-top: 1px #f3f3f3 solid;
		}
	}
</style>