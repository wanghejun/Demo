$(document).ready(function(){
	/*.right_open鼠标点击*/
	var i=true;
	$('.right_open').click(function(){
		if(i){
			$(this).css('background','#282b2d');
			$('.right_open i').css({
				"background":"url('./img/topBar.png') no-repeat -34px 0",
			});
			$('.right_open span').stop().fadeOut();
			$('.open_hov').stop().slideDown("slow");
			i=false;
		}else{
			$('.right_open').css('background','#cf1132');
			$('.right_open i').css({
				"background":"url('./img/topBar.png') no-repeat",
			});
			$('.right_open span').stop().fadeIn();
			$('.open_hov').stop().slideUp("slow");
		i=true;
		};
	})
	$('.top_colse').click(
		function (){
				$('.right_open').css('background','#cf1132');
				$('.right_open i').css({
					"background":"url('./img/topBar.png') no-repeat",
				});
				$('.right_open span').fadeIn();
				$('.open_hov').slideUp("slow");
			}
		);
	

	/*.right_open鼠标点击End*/
	/*轮播区块*/
			var index=0;
			var times=setInterval(run,5000);/*定时器*/
			function run(){
				index++;
				index=index==5?0:index;
				$('.section>img').eq(index).stop().fadeIn().siblings('img').stop().fadeOut();
				$('.imglist a').eq(index).stop().css('background','red').siblings('a').css('background','white');
				$('.top_section div').eq(index).stop().fadeIn().siblings('div').stop().fadeOut();
				$('.left_h>div').eq(index).stop().fadeIn().siblings('div').stop().fadeOut();
				$('.right_h>div').eq(index).stop().fadeIn().siblings('div').stop().fadeOut();
			}
			
			$('.imglist a').hover(function(){
				clearInterval(times);
				index=$(this).index()-1;
				index++;
				index=index==5?0:index;
				$('.section img').eq(index).stop().fadeIn().siblings('img').stop().fadeOut();
				$('.imglist a').eq(index).stop().css('background','red').siblings('a').css('background','white');
				$('.top_section div').eq(index).stop().fadeIn().siblings('div').stop().fadeOut();
				$('.left_h>div').eq(index).stop().fadeIn().siblings('div').stop().fadeOut();
				$('.right_h>div').eq(index).stop().fadeIn().siblings('div').stop().fadeOut();
			},function(){
				times=setInterval(run,5000);
			});
			/*轮播区块 End*/
			/*.center_nav鼠标点击*/
			$(".left_nav li").click(function(){
				index=$(this).index();
				$(".center_nav img").eq(index).fadeIn().siblings().fadeOut();
				}
			);
			/*.center_nav鼠标点击 End*/
			$(".left").click(function () { 
				index=index==5?0:index; 
				$('.section>img').eq(index-1).stop().fadeIn().siblings('img').stop().fadeOut();
			});
			$(".btn_s").click(function () {  
				$(".game_bot_show2").slideToggle("slow");
			})
		});
	
		