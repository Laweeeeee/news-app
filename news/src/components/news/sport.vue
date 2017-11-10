<template>
	<main>
		<ul class="headlineul">
			<li v-for="v in list">
				<div>
					<h2>{{v.title}}</h2>
					<ol>
						
						<li>{{v.ctime | time}}</li>
						<li>来源：{{v.description}}</li>
					</ol>
				</div>
				<img :src="v.picUrl" alt="" />
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
			this.$http.get("sport.json").then(function(res){
				console.log(res);
				console.log(res.body.output.newslist);
				this.list=res.body.output.newslist
				
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
	
</style>