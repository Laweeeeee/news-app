<template>
	<main>
		<p class="top">
			评论
		</p>
		<div class="wrap">
			<p>专家推荐</p>
			<ul>
				<li v-for="v in list">
					<img :src="v.img"/>
					<p>{{v.title}}</p>
				</li>
			</ul>
		</div>
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
			this.$http.get("comment.json").then(function(res){
				console.log(res);
				console.log(res.body.comment);
				this.list=res.body.comment;
			})
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
		z-index: 333;
	}
	.wrap{
		width:100%;
		padding:0 20px;
		padding-bottom: 100px;
		box-sizing: border-box;
		padding-top:61px;
	}
	.wrap>p{
		margin-bottom: 20px;
		border-bottom: 1px solid #ccc;
		padding:10px 0;
		box-sizing: border-box;
		color: #999;
	}
	.wrap>ul{
		overflow: hidden;
		width:100%;
		box-sizing: border-box;
	}
	.wrap>ul>li{
		position: relative;
		padding:10px 0;
		margin-bottom: 20px;
	}
	.wrap>ul>li img{
		width:100%;
	}
	.wrap>ul>li p{
		width:100%;
		text-align: center;
		position: absolute;
		left:0;
		bottom:0;
		color:#fff;
		padding:5px 0;
		background: rgba(0,0,0,.5);
	}
</style>