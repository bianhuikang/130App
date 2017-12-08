<template>
	<div>
		<div class="seek-box">
			<div>
				<i class="icon iconfont icon-zuojiantou"></i>
				<div>
					<div class="inner-left"></div>
					<input type="text" v-model="seek" placeholder="请搜索书名或作者"/>
					<!--<seekxiang ></seekxiang>-->
					<div class="inner-r icon iconfont icon-sousuo2" @click="seeks()"></div>
				</div>
				<p></p>
			</div>
		</div>
		<!--循环获取内容-->
		<div class="m-book-list">
			<router-link :to="{path:'/seekxiang/'+index}" tag="div" v-for="(x,index) in seekss" class="" :key = "index.id" class="seek-a">
				<img v-lazy="x.coverUrl" alt=""/>
				<div>
					<b>{{x.title}}</b>
					<div class="book-name">作者：{{x.writers[0].name}}</div>
					<div>阅读次数：{{x.viewCount}}</div>
				</div>
				
			</router-link>
		</div>
		
	</div>
</template>

<script>
	import Event from '../router/event'
	export default{
		data(){
			return{
				seek:'',
				seekss:[]
			}
		},
		mounted(){
			$(".icon-zuojiantou").click(function () {
				window.history.go(-1);
			})
//			seeks:function () {
//				var aa=$("input").val();
//				console.log(aa)
//				console.log(123)
//			}
		},
		methods:{
			seeks:function () {
				var _this=this
				this.$ajax.get("http://120.76.205.241:8000/book/easyread163?kw="+this.seek+"&apikey=jJybHxVKZVuxmoAzRQpZA8HE7iZohVSeW4iz8T3WxMyGdmXbxEqSAdJwQB9pDC6g").then(res => {
					if(res.data.retcode=="000000"){
						console.log(res.data.data)
						_this.seekss=res.data.data
					}
				})
				this.$store.state.inputval=$("input").val();
//				Event.$emit("data",value)
				
			}
		}
	}
</script>

<style lang="scss">
	@function px2rem($px, $base-font-size: 75px) {
	    @return ($px / $base-font-size) * 2rem;
	}
	$mc:#379AFF;
	$fontcolor:#BCBCBC;
	.seek-box{
		width:100%;
		height: px2rem(40px);
		background: $mc;
		line-height: px2rem(40px) ;
		font-size: px2rem(14px);
		>div{
			width: 90%;
			margin:0 auto;
			display: flex;justify-content: space-between;
			>div{
				display: flex;
				margin-top: px2rem(10px);
			}
			input{
				width: px2rem(220px);
				height: px2rem(19px);
				border: 1px white solid;
				font-size: px2rem(12px);
			}
		}
	}
	.inner-left{
   		width:px2rem(21px);
        height:px2rem(21px);
        /* 水平半径 = width/2, 垂直半径 = height + padding */
        border-radius:10px 0  0 10px/10px  0  0 10px;
        background-color:white;
	}
	.inner-r{
   		width:px2rem(21px);
        height:px2rem(21px);
        /* 水平半径 = width/2, 垂直半径 = height + padding */
        border-radius: 0 10px 10px 0/ 0 10px  10px 0;
        background-color:white;
        line-height: px2rem(18px);
	}
	.m-book-list{
		width: auto;
		margin: px2rem(10px) px2rem(8px);
		.seek-a{
			img{
				width: px2rem(80px);
				height: px2rem(110px);
				margin: px2rem(15px) 0px;
			}
			display: flex;
			>div{
				b{font-size: px2rem(15px);}
				margin: px2rem(15px) px2rem(15px);
			}
			.book-name{
				margin: px2rem(10px) 0px;
			}
		}
	}
</style>