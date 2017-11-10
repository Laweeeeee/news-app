<template>
	<main>
		<ul class="fv">
			<li>
				<p @click="aa"></p>
				<router-link to='/news'>
					<!--<img src="../../assets/bnews.png"/>-->
					
				</router-link>
			</li>
			<li>
				<router-link to='/hot'>
					<!--<img src="../../assets/remen1.png"/>-->
					
				</router-link>
			</li>
			<li>
				<router-link to='/comment'>
					<!--<img src="../../assets/comment.png"/>-->
					
				</router-link>
			</li>
			<li>
				<router-link to='/mine'>
					<!--<img src="../../assets/wode1.png"/>-->
					
				</router-link>
			</li>
		</ul>
		
	</main>
</template>

<script>
	export default{
		methods:{
			aa(){
				this.$router.push('/headline')
			}
		}
	}
</script>

<style scoped="">
	
	body,html{
		width:100%;
		
	}
	
	.fv{
		width:100%;
		position: fixed;
		bottom:0;
		left:0;
		background: #fff;
	}
	
	.fv>li{
		float:left;
		list-style: none;
		width:25%;
		height:49px;
		text-align: center;
		cursor: pointer;
		
	}
	.fv>li>p{
		position: absolute;
		left:0;
		top:0;
		width:25%;
		height:49px;
		/*background:rgba(0,0,255,.5);*/
	}
	.fv>li a{
		display: block;
		width:100%;
		height:49px;
		text-decoration: none;
		color:#000;
		
	}
	.fv>li:nth-of-type(1){
		background: url(../../assets/newsbgs.png)no-repeat;
		background-position: 50% -49px ;
	}
	.fv>li:nth-of-type(2){
		background: url(../../assets/remenbgs.png)no-repeat;
		background-position:  50% 0;
	}
	.fv>li:nth-of-type(3){
		background: url(../../assets/commentbgs.png)no-repeat;
		background-position:  50% 0;
	}
	.fv>li:nth-of-type(4){
		background: url(../../assets/wodebgs.png)no-repeat;
		background-position:  50% 0;
	}
</style>