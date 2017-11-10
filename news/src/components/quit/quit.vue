<template>
	<div class="big">
		<div class="main">
		
			<!--<a href="#" @click="msg='login'">登陆</a>
			<a href="#" @click="msg='register'">注册</a>
			<component :is="msg"></component>-->
			<div class="pics">
				
				<ul>
					<li v-for="v in list">
						<h2>{{v.title}}</h2>
						<img :src="v.src"/>
					</li>
				</ul>
				<ol>
					<li class="active"></li>
					<li></li>
					<li></li>
					<li></li>
					
				</ol>
			
			</div>
			<div class="btns">
				<router-link to='/login'><button class="active">登陆</button></router-link>
				<router-link to='/register'><button>注册</button></router-link>
			</div>
		</div>
	</div>
	
</template>



<script>
	import login from "./login.vue"
	export default{
		data(){
			return{
				msg:"login",
				list:[
					{
						title:"全新新闻客户端",
						src:"src/assets/login1.jpg"
					},
					{
						title:"更多资讯",
						src:"src/assets/login2.jpg"
					},
					{
						title:"更多趣事",
						src:"src/assets/login3.jpg"
					},
					{
						title:"看看新闻app,发现更多",
						src:"src/assets/login4.jpg"
					}
				
				]
			}
		},
//		components:{
//			//组件嵌套
//			"login":login
////			"register":{
////				template:"<h1>这是注册</h1>"
////			},
////			
//		}

		mounted(){
			var timer;
			var i=0;
			timer=setInterval(function(){
				
				$(".main .pics ul li").eq(i).css("opacity","1").siblings("li").css("opacity","0");
				$(".main .pics ol li").eq(i).addClass("active").siblings("li").removeClass("active");
				if(i>=3){
					i=3;
					$(".main .pics ul li").eq(i).css("opacity","1").siblings("li").css("opacity","0");
					$(".main .pics ol li").eq(i).addClass("active").siblings("li").removeClass("active");
					
				}
				i++;
			},2000)
			
		}
	}
</script>

<style scoped="">
	body,html{
		height: 100%;
	}
	
	.main{
		width:100%;
		height:100%;
		position: absolute;
		top:0;
		left:0;
		z-index: 99;
		background-image: -webkit-linear-gradient(top,#42b2fc,#a0d7fc);
	}
	.main .pics{
		width:60%;
		height:0;
		padding-bottom: 60%;
		text-align: center;
		overflow: hidden;
		position: absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
		margin:auto;
	}
	.main .pics ul{
		width:100%;
		position: absolute;
		top:0;
		bottom: 0;
		overflow: hidden;
	}
	.main .pics ul li{
		width:100%;
		position: absolute;
		top:0;
		left:0;
		opacity: 0;
		transition: all 1s;
	}
	.main .pics ul li:nth-of-type(1){
		opacity: 1;
		
	}
	.main .pics ul li h2{
		font-size: 20px;
		color: #fff;
		font-weight: bold;
		padding-bottom: 20px;
	}
	.main .pics ul li img{
		width:100%;
	}
	.main .pics ol{
		position: absolute;
		bottom: 0;
		left:50%;
		transform: translateX(-50%);
	}
	.main .pics ol li{
		width:10px;
		height:10px;
		border: 1px solid #fff;
		box-sizing: border-box;
		border-radius: 50%;
		float:left;
		margin-left: 5px;
	}
	.active{
		background: rgba(255,255,255,.8);
	}
	.btns{
		position: absolute;
		bottom: 0;
		left:50%;
		transform: translateX(-50%);
		padding-bottom: 20px;
	}
	.btns button{
		width:60px;
		height: 30px;
		outline: none;
		border: 1px solid #fff;
		border-radius: 15px;
		color:#42b2fc;
	}
	.btns a:nth-of-type(2) button{
		margin-left: 10px;
		background: none;
	}
	.active{
		background: rgba(255,255,255,.8);
	}
</style>