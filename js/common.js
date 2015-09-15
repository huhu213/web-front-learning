var menuObj = {
	menu: menuData
}
var tabOneObj = {
	data: tabData[0]
}
var tabTwoObj = {
	data: caseData
}

var tmpOne = doT.template($("#levelOne").text());
$("#menu").html(tmpOne(menuObj));

var tmpTwo = doT.template($("#opManual").text());
$("#opOne").html(tmpTwo(tabOneObj));

var tmpThree = doT.template($("#appCase").text());
$("#tabTwo").html(tmpThree(tabTwoObj));

var firstmenu = $(".menu-first>li>a");

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



$().ready(function(){
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
	
})


	





