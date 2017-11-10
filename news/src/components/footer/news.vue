<template>
	<main>
		<div class="top clearfix">
			<router-link to='/search'><input type="text" placeholder="大家都在搜"/></router-link>
			<nav class="clearfix">
				<ul class="clearfix">
					<li><router-link to='/headline'>头条</router-link></li>
					<li><router-link to='/finance'>财经</router-link></li>
					<li><router-link to='/enterta'>娱乐</router-link></li>
					<li><router-link to='/fasion'>时尚</router-link></li>
					<li><router-link to='/sport'>体育</router-link></li>
					<li><router-link to='/health'>健康</router-link></li>
					<!--<li><router-link to='/plus'><img src="../../assets/plus.png" width="24px"/></router-link></li>-->
				</ul>
			</nav>
		</div>
		<!--路由嵌套，要写router-view-->
		<router-view></router-view>
		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				list:[],
				value:""
			}
		},
		mounted(){
//			//网易新闻接口http://3g.163.com/touch/jsonp/sy/recommend/0-9.html
//http://c.m.163.com/nc/article/list/T1348648756099/0-20.html
//https://api.tianapi.com/wxnew/?key=8d6e3228d25298f13af4fc40ce6c9679&num=10
//			this.$http.jsonp("http://3g.163.com/touch/jsonp/sy/recommend/0-20.html",{
//							params:{
//									
//							},jsonp:"callback"
//						}).then(function(res){
//							console.log(res);
//
//							
//						})
//						
//				
			 	
						
	}
		
		
		
	}
</script>

<style scoped="">
	body,html,main{
		width:100%;
	}
	.top{
		width:100%;
		background: #42b2fc;
		padding:0 20px;
		padding-top:15px;
		overflow: hidden;
		box-sizing: border-box;
		font-family: "微软雅黑";
		
	}
	.clearfix{
		content: '';
		display: block;
		clear: both;
	}
	.top input{
		width:100%;
		height:40px;
		border:none;
		outline: none;
		border-radius: 20px;
		padding-left: 50px;
		box-sizing: border-box;
		font-size: 16px;
		background: #fff url(../../assets/search.png)no-repeat 15px;
		background-size: 6%;
	}
	
	nav ul li{
		float:left;
		width:16%;
		text-align: center;
		box-sizing: border-box;
	}
	
	
	nav ul li:nth-last-of-type(1) img{
		position: absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
		margin:auto;
	}
	nav ul li a{
		text-decoration: none;
		display: block;
		color:#e5f6fd;
		line-height: 40px;
		font-size: 18px;
		text-align: center;
	}
	.router-link-active{
		color:#fff;
		border-bottom: 3px solid #fff;
		box-sizing: border-box;
	}
	
	/*router-link-active*/
</style>