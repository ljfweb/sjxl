$(function(){
	$("#oul li").each(function(indext){
		//导航鼠标移入移出事件
		/*$("#oul li").eq(indext).hover(function(){
			$(this).removeClass("navLiLeave");
			$(this).addClass("navLiOver");
		},function(){
			$(this).removeClass("navLiOver");
			$(this).addClass("navLiLeave");
		});*/
		//导航鼠标点击事件
		$("#oul li").eq(indext).click(function(){
			//alert(this);
			$("#oul li").eq(indext).css("animation","sectionContentUnfold1 2s").css("background-color","#cccccc").css("color","black");
			$(".sectionContent").eq(indext).css("display","block").css("animation","sectionContentUnfold1 2s");
			for (var i = 0; i < $("#oul li").length; i++) {
				if(i != indext){
					$("#oul li").eq(i).css("background-color","black").css("color","white");
					$(".sectionContent").eq(i).hide();
				}
			}
		});
	});
	//主要内容左侧导航
	//alert($(".sectionLeft li").length);
	//alert($(".sectionRightContent dl").length)
	$(".sectionLeft li").each(function(i){
		/*$(".sectionLeft li").eq(i).hover(function(){
			$(this).addClass("sectionLeftOver");
			$(this).removeClass("sectionLeftOut");
		},function(){
			$(this).removeClass("sectionLeftOver");
			$(this).addClass("sectionLeftOut");
		});*/
		$(".sectionLeft li").eq(i).click(function(){
			$(".sectionRightContent dl").eq(i).css("display","block");
			$(".sectionLeft li").eq(i).css({
				"background":"black",
				"color":"white"
			});
			for (var j= 0; j < $(".sectionLeft li").length; j++) {
				if(j != i){
					$(".sectionRightContent dl").eq(j).css("display","none");
					$(".sectionLeft li").eq(j).css({
						"background":"#cccccc",
						"color":"black"
					});
				}
			}
		});
	});
	//应用广泛之分页
	$("#OsectionRightContent4_span1").click(function(){
		$("#OsectionRightContent4_p1").css("display","block");
		$("#OsectionRightContent4_p2").css("display","none");
		$("#OsectionRightContent4_span2").css("background","gray").css("color","#CCCCCC");
		$(this).css("background","green").css("color","black");	
	});
	$("#OsectionRightContent4_span2").click(function(){
		$("#OsectionRightContent4_p1").css("display","none");
		$("#OsectionRightContent4_p2").css("display","block");
		$("#OsectionRightContent4_span1").css("background","gray").css("color","#CCCCCC");
		$(this).css("background","green").css("color","black");	
	});
	//问答点击展开和收缩
	var question = $(".question_as");
	var answer = $(".answer");
	question.each(function(i){
		question.eq(i).click(function(){
			answer.eq(i).animate({
				height:"100px"
			}).css("display","block");
			for (var j = 0; j < question.length; j++) {
				if(i!=j){
					answer.eq(j).animate({
						height:"0px"
					},function(){
						$(this).css("display","none");
					});
					
				}
			}
		});
	})	
	//问答分布切换
	$(".pageNum").each(function(i){
		$(".pageNum").eq(i).click(function(){
			$(".page").eq(i).css({
				"display":"block"
			});
			$(this).css({
				"background":"white",
				"color":"black"
			});
			for (var j = 0; j < $(".pageNum").length; j++) {
				if( i != j){
					$(".page").eq(j).css("display","none");
					$(".pageNum").eq(j).css({
						"background":"black",
						"color":"white"
					});
				}
			}
		});
	});
	
})