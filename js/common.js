var menuObj = {
	data: menuData
};
var tabOneObj = {
	data: tabData[0]
}


var tmpOne = doT.template($("#LevelOne").text());
$("#menu").html(tmpOne(menuObj));

var tmpTwo = doT.template($("#opManual").text());

var firstmenu = $(".menu-first>li>a");
$("#tabOne").html(tmpTwo(tabOneObj));
firstmenu.each(function(i){
	firstmenu.eq(i).click(function(){
		tabOneObj.data = tabData[i];
		$("#tabOne").html(tmpTwo(tabOneObj));
		
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

/*原生js实现动态生成的a标签锚点*/
//var menusecTagA = document.getElementsByClassName("menusec-a");
//for (var s = 0; s < menusecTagA.length; s ++) {
//	var target = "";
//	var tagId = menusecTagA[s].id;
//	target = tagId.substr(0,1)*10 + tagId.substr(4);
//	menusecTagA[s].onclick(function(){
//		document.getElementsById(target).scrollIntoView();
//	})
//}



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
	$("#11").addClass("in");	
	
	$("#1sub0").click(function(){
		
	})
})


	





