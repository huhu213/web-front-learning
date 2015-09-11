var basePath = "http://192.168.111.29:8020/HelpCenter";
var menuData = [

		{
			title: '个人中心',
			thumbnail: basePath + '/img/sidebarIcon/userZone.png',
			menuId: 1,
			menu: [
			{
				title: '个人设置'
			},
			{
				title: '班级管理'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			}]
		},
		{
			title: '资源',
			thumbnail: basePath + '/img/sidebarIcon/resource.png',
			menuId: 2,
			menu: [
			{
				title: '个人设置'
			},
			{
				title: '班级管理'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			}]	
		},
		{
			title: '备授课',
			thumbnail: basePath + '/img/sidebarIcon/lessonPrepare.png',
			menuId: 3,
			menu: [
			{
				title: '个人设置'
			},
			{
				title: '班级管理'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			}]
		},
		{
			title: '在线作业',
			thumbnail: basePath + '/img/sidebarIcon/onlineWork.png',
			menuId: 4,
			menu: [
			{
				title: '个人设置'
			},
			{
				title: '班级管理'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			}]
		},
		{
			title: '测试反馈',
			thumbnail: basePath + '/img/sidebarIcon/test.png',
			menuId: 5,
			menu: [
			{
				title: '个人设置'
			},
			{
				title: '班级管理'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			}]
		},
		{
			title: '错题统计',
			thumbnail: basePath + '/img/sidebarIcon/error.png',
			menuId: 6,
			menu: [
			{
				title: '个人设置'
			},
			{
				title: '班级管理'
			},
			{
				title: '个人设置3'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			}]
		},
		{
			title: '互动讨论',
			thumbnail: basePath + '/img/sidebarIcon/discuss.png',
			menuId: 7,
			menu: [
			{
				title: '个人设置'
			},
			{
				title: '班级管理'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置4'
			},
			{
				title: '个人设置'
			}]
		},
		{
			title: '网络学案',
			thumbnail: basePath + '/img/sidebarIcon/onlineCase.png',
			menuId: 8,
			menu: [
			{
				title: '个人设置'
			},
			{
				title: '班级管理'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置2'
			},
			{
				title: '个人设置'
			}]
		},
		{
			title: '课堂控制',
			thumbnail: basePath + '/img/sidebarIcon/courseControl.png',
			menuId: 9,
			menu: [
			{
				title: '个人设置'
			},
			{
				title: '班级管理'
			},
			{
				title: '个人设置1'
			},
			{
				title: '个人设置'
			},
			{
				title: '个人设置'
			}]
		}	
]

var imgBasePath = "http://192.168.111.29:8020/HelpCenter/img/tabImg/";
var tabData = [
{
	title: '个人中心',
	intro: '个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能',
	img: [imgBasePath +"zone.png"],
	firList: [{
		id: 101,
		title: '1.个人设置',
		intro: '个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能',
		img: [imgBasePath +"set.png"],
		seclist: [{
			title: '（1）个人设置',
			steps: ['个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能'],
			img: []
		}]
	},
	{
		id: 102,
		title: '2.班级管理',
		intro: '个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能',
		img: [imgBasePath +"classManage1.png"],
		seclist: [{
			title: '（2）班级管理',
			steps: ['个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能'],
			img: [imgBasePath +"classManage2.png"]
		}]
	},
	{
		id: 103,
		title: '3.应用模块定制',
		intro: '个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能',
		img: [imgBasePath +"moduleDesign.png"],
		seclist: [{
			title: '（3）应用模块定制',
			steps: ['个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能'],
			img: []
		}]
	}]
},
{
	title: '资源',
	intro: '个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能',
	img: [imgBasePath +"set.png"],
	firList: [{
		id: 201,
		title: '1.资源',
		intro: '个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能',
		img: [imgBasePath +"moduleDesign.png"],
		seclist: [{
			title: '(1)资源',
			steps: ['个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能'],
			img: [imgBasePath +"moduleDesign.png"]
		}]
	},
	{
		id: 202,
		title: '3.应用模块定制',
		intro: '个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能',
		img: [imgBasePath +"moduleDesign.png"],
		seclist: [{
			title: '（3）应用模块定制',
			steps: ['个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能'],
			img: []
		}]
	}]
},
{
	title: '备授课',
	intro: '个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能',
	img: [imgBasePath +"set.png"],
	firList: [{
		id: 301,
		title: '1.备授课',
		intro: '个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能',
		img: [imgBasePath +"set.png"],
		seclist: [{
			title: '(1)备授课',
			steps: ['个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能'],
			img: [imgBasePath +"moduleDesign.png"]
		}]
	},
	{
		id: 302,
		title: '3.应用模块定制',
		intro: '个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能',
		img: [imgBasePath +"moduleDesign.png"],
		seclist: [{
			title: '（3）应用模块定制',
			steps: ['个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能','个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能'],
			img: []
		}]
	}]
}]
