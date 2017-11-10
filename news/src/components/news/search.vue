<template>
	<main>
		
		<div class="wrap">
			<p class="top"><span @click="back"><img src="../../assets/back.png" width="20px"/></span>搜索</p>
	
			<div class="ipt">
				<input type="text" placeholder="大家都在搜" v-model="msg" @keyup="get"/>
				
			</div>
		</div>

		
		<ul class="searul">
			<li v-for="v in list">
				<h2>{{v.title}}</h2>
				<img :src="v.image"/>
				<p>时间：{{v.time}}</p>
			</li>
			<li>已经到底了┐(‘～`；)┌ </li>
		</ul>
			
			
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:'',
				list:[]
			}
		},
		methods:{
			back(){
				this.$router.push("/headline")
			},
			get(){
				this.$http.jsonp("http://sinanews.sina.cn/interface/type_of_search.d.html?callback",{
					params:{
						keyword:this.msg
					},jsonp:"callback"
				}).then(function(res){
					console.log(res.body);
					console.log(res.body.data);
					this.list=res.body.data.feed1
				})
			}
		},
		
	}
	//http://news.so.com/ns?q=%E5%95%8A&src=360portal&_re=0
	//http://imzjh.com/api/search/%E5%95%8A
	//http://sinanews.sina.cn/interface/type_of_search.d.html?callback=initFeed&keyword=%E6%98%8E%E6%98%9F&page=1&type=siftWb&size=20&newpage=0&chwm=&imei=&token=&did=&from=&oldchw
	//https://sug.so.360.cn/suggest?word=%E5%95%8A&encodein=utf-8&encodeout=utf-8&pq=&callback=__jsonp0__&t=2515893
</script>

<style scoped="">
	.wrap{
		width:100%;
		background: #fff;
		position: fixed;
		z-index: 222;
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
	.clearfix{
		content: '';
		display: block;
		clear: both;
	}
	.ipt{
		width:100%;
		border:5px solid #eee;
		box-sizing: border-box;
	}
	.ipt input{
		width:100%;
		height:30px;
		border:none;
		outline: none;
		border-radius: 30px;
		padding-left: 40px;
		box-sizing: border-box;
		font-size: 16px;
		background: #fff url(../../assets/search.png)no-repeat 15px;
		background-size: 5%;
	}
	.searul{
		padding:86px 20px;
	}
	.searul li{
		overflow: hidden;
		padding:20px 0;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
	}
	.searul li:nth-last-of-type(1){
		border:none;
		text-align: center;
	}
	.searul li img{
		display: block;
		width:100%;
		
	}
	.searul li h2{
		float:left;
		width:100%;
		overflow: hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
		padding:10px 0;
		box-sizing: border-box;
		font-size: 18px;
	}
	.searul li p{
		color:#999;
		font-size: 14px;
		padding-top:10px;
		text-align: right;
	}
</style>