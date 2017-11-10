<template>
	
	<div class="wrap">
		<p class="top"><span @click="back"><img src="../../assets/back.png" width="20px"/></span>注册</p>
		<div class="login">
			<input type="text" placeholder="请输入电话号码或邮箱"/>
			<input type="text" placeholder="请输入验证码"/>
		</div>
		<p>OR</p>
		<div class="loginpic">
			<ul>
				<li><img src="../../assets/qq.png"/></li>
				<li><img src="../../assets/sina.png"/></li>
				<li><img src="../../assets/wechat.png"/></li>
			</ul>
		</div>
		<button>注册</button>
	</div>

		
	
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped="">
	body,html{
		height:100%;
	}
	.wrap{
		width:100%;
		height: 100%;
		background-image: -webkit-linear-gradient(top,#42b2fc,#a0d7fc);
		position: absolute;
		top:0;
		left:0;
		z-index: 99;
	}
	.top{
		width:100%;
		background: #42b2fc;
		font-size: 20px;
		color:#fff;
		text-align: center;
		padding:10px 10px;
		overflow: hidden;
		box-sizing: border-box;
		font-family: "微软雅黑";
	}
	.top>span{
		display: inline-block;
		float:left;
	}
	.login{
		width:100%;
		margin-top:30px;
		text-align:center;
	}
	.login input{
		width:70%;
		line-height: 50px;
		background: none;
		border:none;
		border-bottom: 1px solid #fff;
		outline: none;
		color: #fff;
	}
	
	.wrap p{
		text-align: center;
		color:#fff;
		margin-top:20px;
	}
	.loginpic ul{
		overflow: hidden;
		width:180px;
		margin:10px auto;
		
	}
	.loginpic ul li{
		float:left;
		text-align: center;
		margin-left: 20px;
	}
	.loginpic ul li:nth-of-type(1){
		margin-left: 0;
	}
	.loginpic ul li img{
		display: block;
		width:40px;
	}
	button{
		width:100%;
		outline: none;
		border: none;
		background: none;
		background:#42b2fc ;
		line-height: 40px;
		color:#fff;
		position: absolute;
		bottom:0;
		left:0;
		font-size: 18px;
		letter-spacing: 4px;
	}
</style>