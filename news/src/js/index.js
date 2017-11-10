//footer部分
//var fv=document.getElementsByClassName('fv')[0];
//var lis=fv.getElementsByTagName('li');
//for(var i=0;i<lis.length;i++){
//	lis[i].onclick=function(){
//		for(var i=0;i<lis.length;i++){
//			lis[i].style.backgroundPosition="50% 0px";
//		}
//		this.style.backgroundPosition="50% -98px";
//	}
//}

$(function(){
	$(".fv>li").click(function(){
		$(this).css("background-position","50% -48px").siblings(".fv>li").css("background-position","50% 0px")
	})
	
	
	
	
	
	//轮播图
	var timer;
	var num=0;
	var n=0;
	timer=setInterval(function(){
		num++;
		n++;
		if(num==4){
			setTimeout(function(){
				$(".banner>ul").css({"left":0+"%"})
				
			},10)
			
			num=0;
			n=0;
		}else{
			$(".banner>ul").animate({"left":-100*num+"%"})

		}
		if(n==3){
			n=0;
			$(".banner>ol>li").eq(n).addClass("lbg").siblings("li").removeClass("lbg")
			
		}else{
			$(".banner>ol>li").eq(n).addClass("lbg").siblings("li").removeClass("lbg")
			
		}
		
	},3000)
	

	
})




