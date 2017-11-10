<template>
	<main>
		<ul class="headlineul">
			<li v-for="v in list">
				<div>
					<h2>{{v.title}}</h2>
					<ol>
						<li>{{v.replyCount}}人浏览</li>
						<li>{{v.mtime | time}}</li>
						<li>来源：{{v.source}}</li>
					</ol>
				</div>
				<img :src="v.imgsrc" alt="" />
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
			this.$http.get("finance.json").then(function(res){
				console.log(res);
				console.log(res.body.T1348648756099);
				this.list=res.body.T1348648756099
				
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

<!--<style scoped="">
	body,html,main{
		width:100%;
	}
	.headlineul{
		width:100%;
		padding:0 20px;
		box-sizing: border-box;
		padding-bottom: 100px;
	}
	.headlineul>li{
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
		padding:20px 0;
		margin:2px 0;
		overflow: hidden;
	}
	.headlineul>li:nth-last-of-type(1){
		border: none;
	}
	.headlineul>li h2{
		font-size: 22px;
	}
	.headlineul>li div{
		width:70%;
		float:left;
	}
	.headlineul>li img{
		width:30%;
		float:left;
	}
	.headlineul>li div ol{
		overflow: hidden;
		padding-top:10px;
		box-sizing: border-box;
	}
	.headlineul>li div ol li{
		float:left;
		font-size: 12px;
		color:#999;
		padding-left: 10px;
		box-sizing: border-box;
		
	}
</style>-->