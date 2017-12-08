<template>
	<div>
		<!--头部-->
		<div class="seek-box">
			<div>
				<i class="icon iconfont icon-zuojiantou"></i>
				<div class="deng">手机号快速登录</div>
				<p></p>
			</div>
		</div>
		<div class="input-text">
			<input type="text" placeholder="请输入手机号"/>
			<div @click="addStu()">
				获取验证码
			</div>
		</div>
		<!--登录方式-->
		<div class="reg">
			<div>———— 可用以下账号登录 ————</div>
			<div>
				<div><i class="icon iconfont icon-weixin"></i><div>微信</div></div>
				<div><i class="icon iconfont icon-qq"></i><div>QQ</div></div>
			</div>
		</div>
		<bottoms class="aa"></bottoms>
	</div>
</template>

<script>
	import bottoms from '../components/bottoms'
	export default{
		mounted(){
			$(".icon-zuojiantou").click(function () {
				window.history.go(-1);
			})
		},
		components:{
			bottoms
		},
		methods:{
			//添加
		  	 addStu(){
		  	 	var Num=""; 
				for(var i=0;i<6;i++){ 
					Num+=Math.floor(Math.random()*10);
				} 
				console.log(Num)
		  	 	alert("验证码："+Num)
			 	this.$ajax.get("http://127.0.0.1:4000/add",{params:{name:Num,age:1000}}).then(function(res){
			 		
			 		  var data = res.data;
			 		  console.log(data)
			 		 
			 	})
		  	 },
		  	 //删除
		  	 delStu(){
		  	 	this.$ajax.post("http://127.0.0.1:4000/del",{name:"傻子",age:1000},{emulateJSON: true}).then(function(res){
			 		
			 		  var data = res.data;
			 		  console.log(data)
			 		 
			 	})
		  	 	
		  	 },
		  	 //查询
		  	 selectStu(){
		  	 	this.$ajax.post("http://127.0.0.1:4000/find",{name:"傻子"},{emulateJSON: true}).then(function(res){
			 		
			 		  var data = res.data;
			 		  console.log(data)
			 		 
			 	})
		  	 },
		  	 //更新
		  	 updateStu(){
		  	 	this.$ajax.post("http://127.0.0.1:4000/update",{oldV:{"name":"傻子"},newV:{"name":"李梅","age":25}},{emulateJSON: true}).then(function(res){
			 		
			 		  var data = res.data;
			 		  console.log(data)
			 		 
			 	})
		  	 }
		}
	}
</script>

<style lang="scss" scoped="scoped">

	@function px2rem($px, $base-font-size: 75px) {
	    @return ($px / $base-font-size) * 2rem;
	}
	$mc:#379AFF;
	$fontcolor:#BCBCBC;
	.seek-box{
		background: $mc;
		width: 100%;
		height: px2rem(40px);
		font-size: px2rem(15px);
		color: white;
		>div{
			display: flex;
			width: 90%;
			text-align: center;
			line-height:px2rem(40px) ;
			justify-content: space-between;
			margin:0 auto;
		}
	}
	.input-text{
		width: auto;
		margin: px2rem(25px) px2rem(10px);
		font-size: px2rem(15px);
		input{
			width: 100%;
			height: px2rem(35px);
			background:#F5F5F5;
			border: 1px solid #F5F5F5;
			border-radius:px2rem(5px) ;
		}
		>div{
			width: 100%;
			height: px2rem(35px);
			background: $mc;
			color: white;
			border-radius:px2rem(5px) ;
			margin: px2rem(10px) 0px;
			text-align: center;
			line-height: px2rem(35px);
		}
	}
	.reg{
		width: auto;
		margin: px2rem(20px) px2rem(10px);
		margin-bottom:px2rem(300px);
		>div:nth-of-type(1){
			color: $fontcolor;
			width: 100%;
			text-align: center;
			font-size: px2rem(12px);
		}
		>div:nth-of-type(2){
			display: flex;
			width: px2rem(200px);
			justify-content: space-around;
			text-align: center;
			margin:px2rem(30px) auto;
			.icon-weixin{
				font-size: px2rem(30px);
				color: green;
			}
			.icon-qq{
				font-size: px2rem(30px);
				color:blue;
			}
		}
	}
</style>