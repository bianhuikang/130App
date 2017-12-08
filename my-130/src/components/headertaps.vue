<template>
	<div>
		<header>
			<div class="logo"><img src="../../build/logo.png"/></div>
			<div class="logo-ri">
				<router-link to="/seek" tag="div"><i class="icon iconfont icon-sousuo2"></i><div class="">搜索</div></router-link>
				<router-link to="/register" tag="div"><i class="icon iconfont icon-wode"></i><div class="">登录</div></router-link>
			</div>
		</header>
		<!--选项分页-->
		<div class="menu">
			<div>
				<router-link to="/mans" active-class="act" class="item" tag="li">
					<i class="icon iconfont icon-nan" style="font-size: 20px;"></i>
					<span>男生</span>
				</router-link>
				<router-link to="/nv" active-class="act" class="item" tag="li">
					<i class="icon iconfont icon-nv"></i>
					<span>女生</span>
				</router-link>
				<router-link to="/classify" active-class="act" class="item" tag="li">
					<i class="icon iconfont icon-leimupinleifenleileibie"></i>
					<span>分类</span>
				</router-link>
				<router-link to="/ranking" active-class="act" class="item" tag="li">
					<i class="icon iconfont icon-paihang"></i>
					<span>排行</span>
				</router-link>
			</div>
			<div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	@import url("../../static/scss/style.css");
	@function px2rem($px, $base-font-size: 75px) {
	    @return ($px / $base-font-size) * 2rem;
	}
	$mc:#379AFF;
	$fontcolor:#BCBCBC;
	header{
		width: 100%;
		height: px2rem(40px);
		display: flex;justify-content: space-between;
		border-bottom: 1px #f3f3f3 solid;
		.logo{
			img{width: px2rem(100px);height: px2rem(40px);}
		}
		.logo-ri{
			display: flex;
			>div{
				width: px2rem(60px);line-height: px2rem(40px);
				display: flex;justify-content: space-around;
				color:$fontcolor ;
				.icon-sousuo2{
					color: $mc;
				}
				.icon-wode{
					color:$mc;
				}
			}
		}
	}
	.menu{
		width: 100%;
		height: px2rem(50px);
		>div:nth-of-type(1){
			display: flex;justify-content: space-around;
			line-height: px2rem(30px);
		}
		a{text-decoration: none;color: #000000;}
		.item{
			display: flex;
			flex-direction:column;
			text-align: center;
			i{height: px2rem(20px);}
			.icon-nan{color:#3DBDEF;}
			.icon-nv{color: #EF73A2;}
			.icon-leimupinleifenleileibie{color: #1296DB;}
			.icon-paihang{color: #F4EA2A;}
			&.act{
				color:$mc;
			}
		}
		
	}
</style>