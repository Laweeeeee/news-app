<template>
	<main>
		<div class="banner">
			<ul>
				<li><img src="../../assets/banner1.jpg"/></li>
				<li><img src="../../assets/banner2.jpg"/></li>
				<li><img src="../../assets/banner3.jpg"/></li>
				<li><img src="../../assets/banner1.jpg"/></li>
			</ul>
			<ol>
				<li class="lbg"></li>
				<li></li>
				<li></li>
			</ol>
		</div>
		<ul class="headlineul">
			<li v-for="v in list">
				<div>
					<h2>{{v.title}}</h2>
					<ol>
						<li>{{v.tcount}}人浏览</li>
						<li>{{v.ptime | time}}</li>
						<li>来源：{{v.source}}</li>
					</ol>
				</div>
				<img :src="v.picInfo[0].url" alt="" />
			</li>
			<li><p>已经到底了┓( ´∀` )┏</p></li>
			<!--<li><button @click="get">按钮</button></li>-->
		</ul>
		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.$http.jsonp("http://3g.163.com/touch/jsonp/sy/recommend/0-20.html",{
				params:{
					
				},jsonp:'callback'
			}).then(function(res){
				console.log(res);
				
				console.log(res.body.news);
				this.list=res.body.news
			})
			
			
		},
		filters:{
			time(n){
				n=n.split(' ');
				return n[0];
			}
		},
		methods:{
			get(){
				this.$http.jsonp("http://3g.163.com/touch/article.html?docid=D283A01Q00038FO9",{
					params:{
						
					},jsonp:"callback"
				}).then(function(res){
					console.log(res)
				})
			}
		}
	}
	
	//http://3g.163.com/touch/article.html?docid=D283A01Q00038FO9
</script>

<style>
	body,html,main{
		width:100%;
	}
	.banner{
		width:100%;
		height: 0;
		padding-bottom: 67%;
		overflow: hidden;
		position: relative;
	}
	.banner>ul{
		width:400%;
		overflow: hidden;
		position: absolute;
		left:0;
		top:0;
	}
	.banner>ul>li{
		width:25%;
		float:left;
	}
	.banner>ul>li img{
		display: block;
		width:100%;
	}
	.banner>ol{
		overflow: hidden;
		position: absolute;
		bottom: 5px;
		left:50%;
		transform: translateX(-50%);
	}
	.banner>ol>li{
		float:left;
		width:10px;
		height:10px;
		border:1px solid #fff;
		box-sizing: border-box;
		border-radius: 50%;
		margin-left: 10px;
	}
	.banner>ol>.lbg{
		background: rgba(255,255,255,.8);
	}
	
</style>