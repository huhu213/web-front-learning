var menuObj = {
	menu: menuData
}
var videoMenuObj = {
	menu: videoData
}

var tabOneObj = {
	data: tabData[0]
}
var tabTwoObj = {
	data: caseData
}

var videoContent = {
	data: videourl
}


var tmpOne = doT.template($("#levelOne").text());
$("#menu").html(tmpOne(menuObj));

var tmpTwo = doT.template($("#opManual").text());
$("#opOne").html(tmpTwo(tabOneObj));

var tmpThree = doT.template($("#appCase").text());
$("#tabTwo").html(tmpThree(tabTwoObj));

var tmpFour = doT.template($("#levelTwo").text());
$("#videoMenu").html(tmpFour(videoMenuObj));

var tmpFive = doT.template($("#opVideo").text());
$("#opTwo").html(tmpFive(videoContent));

var firstmenu = $("#menu-first>li>a");
firstmenu.each(function(i){
	firstmenu.eq(i).click(function(){
		tabOneObj.data = tabData[i];
		$("#opOne").html(tmpTwo(tabOneObj));
        
		
		var secondmenu = $(".menu-second");
		secondmenu.each(function(j){
			if(secondmenu.eq(j).id == (i+11)){
				secondmenu.eq(j).addClass("in");
			}
			else{
				secondmenu.eq(j).removeClass("in");
			}
		})
	})
});

var videolist = $(".videomenufirst>li");
var videomenu = $(".videomenufirst>li>a");


videomenu.each(function(i){
	videomenu.eq(i).click(function(){
		var secondmenu = $(".videomenusecond");	
		secondmenu.each(function(j){
			if(secondmenu.eq(j).id == (i+31)){
				secondmenu.eq(j).addClass("in");
			}
			else{
				secondmenu.eq(j).removeClass("in");
			}
		})	
		
		var videoSecond = videolist.eq(i).find(".menusec-a");
		if(videoSecond.length == 0){			
			videourl.title = videoData[i].title;
			videourl.path = videoData[i].video;
			$("#opTwo").html(tmpFive(videoContent));
		}
		else{
			videoSecond.each(function(s){
				videoSecond.eq(s).click(function(){
					videourl.title = videoData[i].subtitle[s].title;
					videourl.path = videoData[i].subtitle[s].video;
					$("#opTwo").html(tmpFive(videoContent));
				})
			})
		}
	})
});



$().ready(function(){
//	选项卡刷新
	var hash = location.hash;
	var headTabs = $(".headTab li a");
	var tabs = $(".headTab li");
	if(hash == '#One'){
		tabs.removeClass("active");
		$(".tab-pane").removeClass("active");
		headTabs.css("color", "#C1F0FF");
		headTabs.eq(0).css("color", "#FFFFFF");
		tabs.eq(0).addClass("active");
		$("#tabOne").addClass("active");
		$("#manual").addClass("active");
	}
	else if(hash == "#Two"){
		$(".tab-pane").removeClass("active");
		headTabs.css("color", "#C1F0FF");
		headTabs.eq(1).css("color", "#FFFFFF");
		tabs.removeClass("active");
		tabs.eq(1).addClass("active");
		$("#tabTwo").addClass("active");
	}
	else if(hash == "#Three"){
		$(".tab-pane").removeClass("active");
		headTabs.css("color", "#C1F0FF");
		headTabs.eq(2).css("color", "#FFFFFF");
		tabs.removeClass("active");
		tabs.eq(3).addClass("active");
		$("#tabThree").addClass("active");
	}
	
	headTabs.each(function(i){
		headTabs.eq(i).click(function(){
			headTabs.css({
				"color": "#C1F0FF",
				"background": "#007DA8"
			});
			headTabs.eq(i).css("color", "#FFFFFF");
		})
	})
	
	
	var bodyheight = window.screen.height;
	$("body").css("height", bodyheight+100);
	var  conWidth = $("#container").width();
	var left = $("#logoBox").width();
	var sidebarWidth = $("#menu").width();
	$("#headnav").css("width", conWidth);
	$("#headtab").css("margin-left", 2*left);
	$("#content").css("width", conWidth);
	$(".opManualContent").css({
		"padding-left": sidebarWidth+60
	});
	$("#tabTitle").css("width", conWidth);
	$("#11").addClass("in");
	
	$(".subTab").css("width", conWidth);
	$(".tabTitle").css("background", "#32B6CD");
	
	
	$(".caseContent").each(function(i){
		$(".caseContent").eq(i).mouseover(function(){
			$(".viewMore").eq(i).css("color", "#0072A7");
			$(".caseContent").eq(i).addClass("caseContentShadow");
		})
		$(".caseContent").eq(i).mouseleave(function(){
			$(".viewMore").eq(i).css("color", "#777777");
			$(".caseContent").eq(i).removeClass("caseContentShadow");
		})
	})
	
	$(".menusec-a").each(function(i){
		$(".menusec-a").eq(i).click(function(){
			$(".menusec-a").removeClass("menu-second-selected");
			$(".menusec-a").eq(i).toggleClass("menu-second-selected");
		})
	})	
	
})


	





