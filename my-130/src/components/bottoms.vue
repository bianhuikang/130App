<template>
	<div class="bottom">
		<ul>
			<li>客户端</li>
			<li>帮助</li>
			<li>反馈</li>
			<li>触屏版</li>
			<li>电脑版</li>
		</ul>
		<div>130阅读版权所有&copy;2017.11.21</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	@function px2rem($px, $base-font-size: 75px) {
	    @return ($px / $base-font-size) * 2rem;
	}
	$mc:#379AFF;
	$fontcolor:#BCBCBC;
	$shuc:#FAF7F5;
	.bottom{
		font-size: px2rem(13px);
		color:$fontcolor;
		background: #F5F5F5;
		border: 1px #F5F5F5 solid;
		ul{
			display: flex;
			width: 80%;
			justify-content: space-around;
			margin:px2rem(20px) auto;
		}
		>div{
			text-align: center;
			margin: px2rem(20px) 0px;
		}
	}
</style>