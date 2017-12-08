<template>
	<div>
		<!--头部-->
		<div class="title">
			<i class="icon iconfont icon-zuojiantou" @click="getback()"></i>
			<div>书籍详情</div>
			<div>&nbsp;</div>
		</div>
		<!--书籍介绍-->
		<div class="m-book-info">
			<div class="info">
				<div><img v-lazy="seller.coverUrl"/></div>
				<div>
					<b>{{seller.catName2}}</b>
					<p v-for="x in seller.writers">作者：{{x.name}}</p>
					<p>分类：{{seller.catPathKey}}</p>
					<p>阅读量：{{seller.viewCount}}</p>
				</div>
			</div>
			<!--button-->
			<div class="info-button">
				<!--留接口-------------------------------------------------->
				<router-link to="/sections" tag="div">立即阅读</router-link>
				<router-link to="/bookrack" tag="div">下载完本</router-link>
			</div>
			<!--书架-->
			<router-link to="/bookrack" tag="div" class="info-bookrack" >
				<!--留接口-------------------------------------------------->
				<i class="icon iconfont icon-xiaoshuo"> 加入书架</i>
			</router-link>
		</div>
		<!--内容简介-->
		<div class="m-book-detail">
			<div>
				<b>内容简介</b>
				<p>{{seller.abstract}}</p>
			</div>
		</div>
		<!--目录-->
		<div class="m-book-directory">
			<div>
				<b>目录</b>
				<div class="directory-section">
					<!--留接口--------------------------------------------------------->
					<div v-for="y in seller.catalogs">{{y}}</div>
				</div>
				<!--留接口--------------------------------------------------------->
				<div class="more">更多目录 》</div>
			</div>
		</div>
		<bottoms></bottoms>
	</div>
</template>

<script>
	import Event from "../router/event"
	import bottoms from '@/components/bottoms'
	import LoginDiv from '@/page/seek'
	
//	import bookrack from '@/page/bookrack'
	
	import md5 from 'js-md5'
	let Base64 = require('js-base64').Base64
	
	
	export default{
		data(){
			return{
				seller:{
					type:Array
				}
				
			}

		},
		mounted(){
			let idx = this.$route.params.idx
			this.$ajax.get("http://120.76.205.241:8000/book/easyread163?kw="+this.$store.state.inputval+"&apikey=jJybHxVKZVuxmoAzRQpZA8HE7iZohVSeW4iz8T3WxMyGdmXbxEqSAdJwQB9pDC6g").then(res=>{
				let sellers=res.data.data
				this.seller = sellers[idx]
			})
		},
		methods: {
            getback() {
                window.history.go(-1);
            }
     	
        },
        components:{
        	bottoms
        }
	}
</script>

<style lang="scss" scoped="scoped">
	@function px2rem($px, $base-font-size: 75px) {
	    @return ($px / $base-font-size) * 2rem;
	}
	$mc:#379AFF;
	$fontcolor:#BCBCBC;
	$shuc:#FAF7F5;
	.title{
		width: 100%;height: px2rem(44px);
		background: $mc;
		display: flex;justify-content: space-between;
		line-height: px2rem(44px);
		color: white;
		i{margin-left: px2rem(10px);font-size:px2rem(12px);}
		>div{
			font-size: px2rem(16px);
		}
	}
	.m-book-info{
		width: auto;
		margin: px2rem(15px);
		.info{
			display: flex;
			img{width: px2rem(93px);height: px2rem(120px);margin-right: px2rem(10px);border: 1px $fontcolor solid;}
			>div:nth-of-type(2){
				margin-top: px2rem(10px);
				b{font-size: px2rem(16px);}
				p{margin: px2rem(5px) 0px;color: $fontcolor;font-size:px2rem(12px);}
			}
		}
		.info-button{
			display: flex;justify-content: space-between;
			margin: px2rem(10px) 0px;
			>div{
				padding: px2rem(6px) px2rem(47px);
				border-radius:px2rem(4px);
				font-size: px2rem(15px);
				box-sizing: border-box;
			}
			>div:nth-of-type(1){
				border: 1px $mc solid;
				color: white;
				background: $mc;
			}
			>div:nth-of-type(2){
				border: 1px $mc solid;
				color: $mc;
			}
		}
		.info-bookrack{
			width: 100%;
			font-size: px2rem(15px);
			text-align: center;
			height: px2rem(34px);
			line-height: px2rem(34px);
			border: 1px #E8E7E6 solid;
			background: #FAF7F5;
			color: #998C7F;
			i{margin-right: px2rem(6px);}
		}
		
	}
	.m-book-detail{
		background: $shuc;
		padding: px2rem(10px) 0px;
		border-bottom: 1px $fontcolor solid;
		>div{
			width: auto;
			margin: px2rem(15px);
			b{font-size: px2rem(15px);}
			p{margin: px2rem(10px) 0px;font-size:px2rem(13px);color:$fontcolor;text-indent:px2rem(24px)}
		}
		
	}
	.m-book-directory{
		background: $shuc;
		border: 1px $shuc solid;
		b{font-size: px2rem(15px);}
		>div{
			width: auto;
			margin: px2rem(15px);
		}
		.directory-section{
			margin: px2rem(10px);
			height: px2rem(173px);
			overflow: hidden;
			>div{
				margin: px2rem(2px) 0px;
				color: $fontcolor;
				font-size: px2rem(13px);
			}
			
		}
		.more{
			border: 1px $fontcolor solid;
			text-align:center;
			border-radius:px2rem(3px) ;
			padding: px2rem(5px);
			font-size: px2rem(12px);
		}
	}
</style>