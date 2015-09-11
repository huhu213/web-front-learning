var menuObj = {
	data: menuData
};
var tabOneObj = {
	data: tabData[0]
}


var tmpOne = doT.template($("#LevelOne").text());
$("#menu").html(tmpOne(menuObj));

var tmpTwo = doT.template($("#opManual").text());

var firstmenu = $(".menu-first>li");
$("#tabOne").html(tmpTwo(tabOneObj));
firstmenu.each(function(i){
	firstmenu.eq(i).click(function(){
		tabOneObj.data = tabData[i];
		$("#tabOne").html(tmpTwo(tabOneObj));
	})
});


$().ready(function(){
	var  conWidth = $("#container").width();
	var left = $("#logoBox").width();
	var sidebarWidth = $("#menu").width();
	$("#headnav").css("width", conWidth);
	$("#headtab").css("margin-left", 2*left);
	$("#content").css({
		"width": conWidth-sidebarWidth-60,
		"margin-left": sidebarWidth+60
	});
	$("#tabTitle").css("width", conWidth);
	
})


	





