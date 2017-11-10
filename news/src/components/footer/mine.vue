<template>
	<main class='main'>
		<p class="top">会员中心</p>
		<div class="wrap">
			<div class="img">
				<img src="../../assets/29.png"/>
			</div>
			<ul>
				<li>省流量</li>
				<li>夜间模式</li>
			</ul>
		</div>
		<div class="big">
			<ul>
				<li>
					<ol>
						<li><p>我的收藏</p></li>
						<li><p>邀请好友</p></li>
					</ol>
				</li>
				<li>
					<ol>
						<li><p>意见反馈</p></li>
						<li><p>隐私策略</p></li>
						<li><p>关于我们</p></li>
					</ol>
				</li>
				<li>
					<ol>
						<li><p>清除缓存</p></li>
						<li><p>重置应用</p></li>
					</ol>
				</li>
			</ul>
			
			<router-link to='/quit'><button>退出</button></router-link>
			
			
		</div>
		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:''
			}
		},
		
	}
</script>

<style scoped="">
	.main{
		background: #eee;
		padding-bottom: 110px;
	}
	.top{
		width:100%;
		background: #42b2fc;
		padding:0 20px;
		text-align: center;
		font-size: 20px;
		color:#fff;
		line-height: 60px;
		border-bottom: 1px solid #fff;
		box-sizing: border-box;
		font-family: "微软雅黑";
		position: fixed;
	}
	.wrap{
		width:100%;
		height: 220px;
		padding:0 20px;
		box-sizing: border-box;
		background-image: url(../../assets/bg.jpg);
		background-size:100% 100% ;
		overflow: hidden;
		padding-top:61px;
	}
	.wrap>.img{
		margin:auto;
		margin-top:30px;
		text-align: center;
		width:100px;
		height:100px;
		border:5px solid #a0d7fc;
		border-radius: 50%;
		box-sizing: border-box;
	}
	.wrap>.img img{
		width:100%;
		border-radius: 50%;
	}
	.wrap>ul{
		width:100%;
		margin-top:20px;
		overflow: hidden;
	}
	.wrap>ul>li{
		float:left;
		width:50%;
		text-align: center;
		color:#fff;
		letter-spacing: 2px;
		line-height: 30px;
		font-size: 18px;
	}
	.wrap>ul>li:nth-of-type(1){
		background: url(../../assets/liuliang.png)no-repeat 10px;
	}
	.wrap>ul>li:nth-of-type(2){
		background: url(../../assets/yejian.png)no-repeat 10px;
		background-size:15%;
	}
	.big{
		width:100%;
		margin-top:-1px;
	}
	.big>ul{
		margin-bottom: 15px;
	}
	.big>ul>li{
		padding:0 20px;
		box-sizing: border-box;
		margin-bottom: 10px;
		background: #fff;
	}
	.big>ul>li>ol>li{
		border-bottom: 1px solid #eee;
	}
	.big>ul>li:nth-of-type(1)>ol>li:nth-of-type(1){
		background: url(../../assets/stars.png) no-repeat 0;
	}
	.big>ul>li:nth-of-type(1)>ol>li:nth-of-type(2){
		background: url(../../assets/friends.png) no-repeat 0;
	}
	.big>ul>li:nth-of-type(2)>ol>li:nth-of-type(1){
		background: url(../../assets/bis.png) no-repeat 0;
	}
	.big>ul>li:nth-of-type(2)>ol>li:nth-of-type(2){
		background: url(../../assets/privacys.png) no-repeat 0;
	}
	.big>ul>li:nth-of-type(2)>ol>li:nth-of-type(3){
		background: url(../../assets/uss.png) no-repeat 0;
	}
	.big>ul>li:nth-of-type(3)>ol>li:nth-of-type(1){
		background: url(../../assets/cleans.png) no-repeat 0;
	}
	.big>ul>li:nth-of-type(3)>ol>li:nth-of-type(2){
		background: url(../../assets/resets.png) no-repeat 0;
	}
	.big>ul>li>ol>li>p{
		font-size: 16px;
		padding-left: 25px;
		box-sizing: border-box;
		line-height: 40px;
	}
	button{
		width:100%;
		background: #fff;
		border:none;
		outline: none;
		line-height: 40px;
		font-size: 20px;
		color:red;
		letter-spacing: 4px;
	}
</style>