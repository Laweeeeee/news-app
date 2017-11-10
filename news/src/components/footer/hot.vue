<template>
	<main>
		<p class="top">热门推荐</p>
		<ul class="hotul">
			<li v-for="v in list">
				<h2>{{v.title}}</h2>
				<img :src="v.img"/>
				<ol>
					<li>{{v.ptime | time}}</li>
					<li>来源：{{v.source}}</li>
				</ol>
			</li>
			<li><p>已经到底了┓( ´∀` )┏</p></li>
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
			this.$http.get("hot.json").then(function(res){
				console.log(res);
				console.log(res.body.recommend);
				this.list=res.body.recommend
			})
		},
		filters:{
			time(n){
				n=n.split(' ');
				return n[0];
			}
		}
	}
</script>

<style scoped="">
	body,html{
		width:100%;
		
	}
	.top{
		width:100%;
		background: #42b2fc;
		padding:0 20px;
		text-align: center;
		font-size: 20px;
		color:#fff;
		line-height: 60px;
		box-sizing: border-box;
		font-family: "微软雅黑";
		position: fixed;
		z-index: 444;
	}
	.hotul{
		width:100%;
		padding:0 20px;
		padding-bottom: 100px;
		box-sizing: border-box;
		padding-top:61px;
	}
	.hotul>li{
		margin-top:20px;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
		padding-bottom: 10px;
		overflow: hidden;
	}
	.hotul>li h2{
		font-size: 18px;
		padding-bottom: 20px;
	}
	.hotul>li img{
		width:100%
	}
	.hotul>li ol{
		float: right;
	}
	.hotul>li ol>li{
		float: left;
		margin-left: 5px;
	}
</style>