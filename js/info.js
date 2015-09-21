var basePath = "http://192.168.111.29:8020/HelpCenter";
var menuData = [{
			title: '个人空间',
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
				title: '应用模块定制'
			},
			{
				title: '教学事务'
			},
			{
				title: '工具下载'
			}]
		},
		{
			title: '资源',
			thumbnail: basePath + '/img/sidebarIcon/resource.png',
			menuId: 2,
			menu: [
			{
				title: '浏览、收藏、下载资源'
			},
			{
				title: '上传资源'
			},
			{
				title: '管理我的资源'
			}]	
		},
		{
			title: '备授课',
			thumbnail: basePath + '/img/sidebarIcon/lessonPrepare.png',
			menuId: 3,
			menu: [
			{
				title: '添加、管理教学目录'
			},
			{
				title: '新建备课夹'
			},
			{
				title: '管理备课夹内容'
			}]
		},
		{
			title: '在线作业',
			thumbnail: basePath + '/img/sidebarIcon/onlineWork.png',
			menuId: 4,
			menu: [
			{
				title: '作业简介'
			},
			{
				title: '新建作业'
			},
			{
				title: '发布作业'
			},
			{
				title: '批改作业'
			},
			{
				title: '作业统计'
			},
			{
				title: '作业管理'
			},
			{
				title: '应用示例'
			}]
		},
		{
			title: '测试反馈',
			thumbnail: basePath + '/img/sidebarIcon/test.png',
			menuId: 5,
			menu: []
		},
		{
			title: '错题统计',
			thumbnail: basePath + '/img/sidebarIcon/error.png',
			menuId: 6,
			menu: []
		},
		{
			title: '互动讨论',
			thumbnail: basePath + '/img/sidebarIcon/discuss.png',
			menuId: 7,
			menu: [
			{
				title: '互动讨论简介'
			},
			{
				title: '进入讨论'
			},
			{
				title: '新建讨论'
			},
			{
				title: '讨论管理'
			},
			{
				title: '回帖评价'
			},
			{
				title: '作品讲评'
			},
			{
				title: '优秀作品展示'
			},
			{
				title: '论坛跳转'
			},
			{
				title: '应用示例'
			}]
		},
		{
			title: '网络学案',
			thumbnail: basePath + '/img/sidebarIcon/onlineCase.png',
			menuId: 8,
			menu: [
			{
				title: '新建学案'
			},
			{
				title: '管理学案'
			},
			{
				title: '应用示例'
			}]
		},
		{
			title: '课堂控制',
			thumbnail: basePath + '/img/sidebarIcon/courseControl.png',
			menuId: 9,
			menu: [
			{
				title: '教师登录'
			},
			{
				title: '连接学生端'
			},
			{
				title: '屏幕广播'
			},
			{
				title: '学生演示'
			},
			{
				title: '黑屏安静'
			},
			{
				title: '应用示例'
			}]
		}]

var imgBasePath = "http://192.168.111.29:8020/HelpCenter/img/tabImg/";
var filesPath = "http://192.168.111.29:8020/HelpCenter/files/";
var tabData = [
{
	title: '个人空间',
	intro: '个人空间提供了个人设置、班级管理、应用模块定制、浏览处理教学事务等功能。',
	img: [imgBasePath +"1_1.png"],
	firList: [{
		id: 101,
		title: '1.个人设置',
		intro: '支持教师对个人信息的维护和管理，比如年级、任教学科等（如下图）。',
		img: [imgBasePath +"1_1.png"],
		seclist: [{
			title: '',
			steps: [],
			img: []
		}]
	},
	{
		id: 102,
		title: '2.班级管理',
		intro: '点击“我的班级”后的“管理”功能（如下图），即可进入班级管理页面，支持教师加入班级成为任课教师、对班级学生进行管理和分组、创建选修班等。',
		img: [imgBasePath +"1_2_1.png"],
		seclist: [{
			title: '（1）成为某班任课教师',
			steps: [{
				intro: '在全校班级列表中，选择所教授的班级，点击班级后面的“是否为该班教师”复选框；',
				img: [],
				cases: '',
				caseurls: ''
			},
			{
				intro: '在弹出的对话框中，选择任教科目，点击确定即可成为该班的任课教师；',
				img: [],
				cases: '',
				caseurls: ''
			},
			{
				intro: '选择其他任课班级，重复上面步骤即可。',
				img: [imgBasePath +"1_2_1_3.png"],
				cases: '',
				caseurls: ''
			}]
		},
		{
			title: '（2）我的班级学生管理',
			steps: [{
				intro: '选择学生用户名右侧的复选框，可将学生的加班申请进行审核或将非本班学生移出；',
				img: [],
				cases: '',
				caseurls: ''
			},
			{
				intro: '当学生忘记密码时，可将学生的密码恢复为初始密码“000000”。',
				img: [imgBasePath +"1_2_2_2.png"],
				cases: '',
				caseurls: ''
			},
			{
				intro: '教师还可根据教学需要，创建选修班级，点击右上角的“新建选修班”按钮，编辑编辑基本信息即可。',
				img: [imgBasePath +"1_2_2_3.png"],
				cases: '',
				caseurls: ''
			}]
			
		},
		{
			title: '（3）学生分组',
			steps: [{
				intro: '支持学科教师对学生进行分组管理，首先在左上角的下拉框中选择班级，点击“新建小组”，输入小组名称，选择小组成员即可。',
				img: [],
				cases: '',
				caseurls: ''
			},
			{
				intro: '支持教师对小组进行管理，包括选择小组长，添加或删除小组成员，解散小组。',
				img: [imgBasePath +"1_2_3_2_1.png", imgBasePath +"1_2_3_2_2.png"],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 103,
		title: '3.应用模块定制',
		intro: '在个人空间页面，为用户提供了备授课、互动讨论、在线作业和测试反馈模块的快捷入口。教师还可根据个人需求，定制所需功能的快捷入口，方便快速进入使用。',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '点击平台首页面右上方“定制”按钮，选择应用模块，保存即可。',
				img: [imgBasePath +"1_3_1.png"],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 104,
		title: '4.教学事务',
		intro: '师生的应用数据，系统会自动记录，包括待处理任务、教学动态和轨迹等，教师可浏览并完成待处理事宜。',
		img: [imgBasePath +"1_4.png"],
		seclist: []
	},
	{
		id: 105,
		title: '5.工具下载',
		intro: '教师初次使用平台时，需下载安装工具插件，保证系统的正常使用。',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '点击平台首页左下“必备工具下载”，点击“通用工具”，运行、安装（或点击保存）工具包即可。',
				img: [imgBasePath +"1_5_1.png"],
				cases: '',
				caseurls: ''
			}]
		}]
	}]
},
{
	title: '资源',
	intro: '“资源中心”提供了大量优质教学资源，包括动画、微课、教学素材等，教师可根据教学需要自行选择使用。同时，平台还支持教师上传、下载、收藏、共享资源等，对个人资源进行管理。',
	img: [imgBasePath +"2.png"],
	firList: [{
		id: 201,
		title: '1.浏览、收藏、下载资源',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [
			{
				intro: '点击基础资源，选择教材目录，即可浏览本节目录下的资源',
				img: [],
				cases: '',
				caseurls: ''
			},
			{
				intro: '在浏览资源的过程中，可以对所选中的资源进行“收藏”、“下载”等操作（也可进入本条资源页面后进行收藏、下载等操作）。',
			    img: [imgBasePath +"2_1_2_1.png", imgBasePath +"2_1_2_2.png"],
				cases: '',
				caseurls: ''
			},
			{
				intro: '为更进一步方便浏览，资源中心提供按资源类型、资源格式等多种方式浏览资源。',
				img:[imgBasePath +"2_1_3_1.png", imgBasePath +"2_1_3_2.png"],
				cases: '',
				caseurls: ''
			},
			{
				intro: '共享资源的操作可参照基础资源操作。',
				img: [],
				cases: '',
				caseurls: ''
			}]
			
		}]
	},
	{
		id: 202,
		title: '2.上传资源',
		intro: '',
		img: [],
		seclist: [{
			title: '',
		    steps: [{
		    	intro: '点击“我的空间”，点击页面“添加”按钮，点击本地资源、添加，选择资源所在目录即可完成上传。',
		    	img: [imgBasePath +"2_2_1.png"],
				cases: '',
				caseurls: ''
		    },
		    {
		    	intro: '在我的空间，点击页面“添加”，点击网络资源，输入资源名称、网址，选择资源类型、教学目录，点击确定即可。',
		    	img: [imgBasePath +"2_2_2.png"],
				cases: '',
				caseurls: ''
		    }]
		}]
	},
	{
		id: 203,
		title: '3.管理我的资源',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
		    	intro: '在我的空间，点击添加目录，可自建目录管理我的资源。',
		    	img: [imgBasePath +"2_3_1_1.png", imgBasePath +"2_3_1_2.png"],
				cases: '',
				caseurls: ''
		    },
		    {
		    	intro: '也可点击导入系统目录，管理资源。',
		    	img: [imgBasePath +"2_3_2.png"],
				cases: '',
				caseurls: ''
		    },
		    {
		    	intro: '点击管理目录，可对资源目录进行删除、复制、重命名等操作。',
		    	img: [imgBasePath +"2_3_3.png"],
				cases: '',
				caseurls: ''
		    },
		    {
		    	intro: '在我的空间，点击页面我的上传、我的收藏、我的共享等按钮，可快速查看相应的资源，并可对某一资源进行下载、编辑、删除、转移等操作。',
		    	img: [imgBasePath +"2_3_4.png"],
				cases: '',
				caseurls: ''
		    }]
		}]
	}]
},
{
	title: '备授课',
	intro: '此模块，主要为教师的教学服务，涵盖教师教学从课前、课中到课后的所有教学环节。在此模块下，首先要建立自己的“教学目录”、“新建备课夹”，目的是使我们备授课中生成、收藏的资源等规范而有序，从而方便后期的使用、检索与共享，更高效的服务于教学。',
	img: [],
	firList: [{
		id: 301,
		title: '1.添加、管理教学目录',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [
			{
				intro: '点击教学平台首页备授课，进入备授课页面。点击“添加目录”，进入添加页面。',
				img: [imgBasePath +"3_1_1.png"],
				cases: '',
				caseurls: ''
			},
			{
				intro: '点击自建目录，在文本框中输入目录名称，点击确定完成新建。',
			    img: [imgBasePath +"3_1_2.png"],
				cases: '',
				caseurls: ''
			},
			{
				intro: '点击进入“导入教材目录”页面，点击选择课本、章节，点击确定完成导入。',
				img:[imgBasePath +"3_1_3.png"],
				cases: '',
				caseurls: ''
			},
			{
				intro: '教学目录添加完成后，点击选择左侧教学目录中的具体章节，点击管理目录，对教学目录进行重命名、剪切、粘贴和删除等操作。',
				img: [imgBasePath +"3_1_4.png"],
				cases: '',
				caseurls: ''
			}]
			
		}]
	},
	{
		id: 302,
		title: '2.新建备课夹',
		intro: '',
		img: [],
		seclist: [{
			title: '',
		    steps: [{
		    	intro: '点击选择左侧教学目录中的具体章节，点击右上方新建备课夹。',
		    	img: [imgBasePath +"3_2_1.png"],
				cases: '',
				caseurls: ''
		    },
		    {
		    	intro: '在弹出的对话框中输入备课夹名称（默认为章节名称），点击确定完成新建。',
		    	img: [imgBasePath +"3_2_2.png"],
				cases: '',
				caseurls: ''
		    },
		    {
		    	intro: '在备课页面点击已建备课夹右侧的“重命名”、“删除”按钮，对备课夹进行管理。',
		    	img: [imgBasePath +"3_2_3.png"],
				cases: '',
				caseurls: ''
		    }]
		}]
	},
	{
		id: 303,
		title: '3.管理备课夹内容',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
		    	intro: '在备授课页面，点击左侧教学目录下的某一备课夹，即可查看本备课夹内教学设计、作业、测试、资源等内容。',
		    	img: [],
				cases: '',
				caseurls: ''
		    },
		    {
		    	intro: '点击进入备课夹某条内容后面的相应工具图标，即可对此内容进行推送、编辑、删除等操作。',
		    	img: [imgBasePath +"3_3_2.png"],
				cases: '',
				caseurls: ''
		    }]
		}]
	}]
},
{
	title: '在线作业',
	intro: '',
	img: [],
	firList: [{
		id: 401,
		title: '1.作业简介',
		intro: '在线作业模块实现对作业的统一管理，支持教师创建数字化作业、为学生进行作业个性化指导、科学统计学生的作答情况，支持学生及时诊断自身学习情况，支持教师及时掌握学生学习情况，有针对性地进行教学。',
		img: [imgBasePath +"4_1.png"],
		seclist: []
	},
	{
		id: 402,
		title: '2.新建作业',
		intro: '',
		img: [],
		seclist: [{
			title: '（1）数据准备',
			steps: [{
				intro: '在新建作业之前，教师需准备作业word文档，根据需要可准备相应音频附件和参考答案word文档。注意：作业和答案要分开，存储在两个文档中。',
				img: [],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '书本上的题目，可直接拍照，将照片插入到word中即可。',
				img: [],
				cases: '',
				caseurls: ''
			}]
		},
		{
			title: '（2）添加作业文件',
			steps: [{
				intro: '点击“在线作业”右侧的图标 （如下图），进入作业新建页面；',
				img: [imgBasePath +"4_2_2_2.png"],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '上传已有作业word文档、音频附件、参考答案word文档等，选择所属章节；',
				img: [imgBasePath +"4_2_2_3.png"],
				cases: '',
				caseurls: ''
			},
			{
				intro: '带“*”号为必填项，其中作业名称允许二次修改；若教师上传了参考答案，可设置答案的显示时间。',
				img: [],
				cases: '',
				caseurls: ''
			}]
		},
		{
			title: '（3）编辑答题卡',
			steps: [{
				intro: '选择答题卡类型，共提供三种模板供教师选择，默认为全部是小题模板；',
				img: [],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '选择答题卡模板后，输入小题个数、分值，设置小题题型（单选、多选和主观题，点击下拉框选择）、选择题选项数量和正确答案（方框内勾选）等；',
				img: [imgBasePath +"4_2_3_2.png"],
				cases: '',
				caseurls: ''
			},
			{
				intro: '注：学生提交作业后，系统根据教师设置的答案，对选择题进行自动评阅。',
				img: [],
				cases: '',
				caseurls: ''
			}]
		},
		{
			title: '（4）设置题目属性',
			steps: [{
				intro: '点击左侧“添加”按钮可为学生添加分层作业提示；',
				img: [],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '在选择题后的方框内勾选，即要求学生提交客观题答题思路（如下图）；',
				img: [],
				cases: '',
				caseurls: ''
			},
			{
				intro: '作业新建完成后，可预览、保存、发布作业文档，发布后作业自动保存。',
				img: [imgBasePath +"4_2_4_3.png"],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 403,
		title: '3.发布作业',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '点击作业名称后的发布按钮，进入作业发布页面；',
				img: [],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '选择作业发布方式（按班、按组、按人），选择发布对象，点击发布即可（如下图）。',
				img: [imgBasePath + '4_3_2_1.png', imgBasePath + '4_3_2_2.png'],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 404,
		title: '4.批改作业',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '在作业列表中，点击作业名称后的“批改”，进入作业批改页面（如下图）；',
				img: [imgBasePath + '4_4_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '客观题系统已自动批改，主观题查看学生的答案，判断正误（选择对/半对/错），给出得分，还可点击推荐为优秀答题；文本方式作答的内容，教师还可以点击上方“插入点评”按钮输入评语。',
				img: [],
				cases: '',
				caseurls: ''
			},
			{
				intro: '批改完成后，“保存”和“提交”批改结果；',
				img: [],
				cases: '',
				caseurls: ''
			},
			{
				intro: '教师可点击左上方名单，选择学生姓名跳转批改页面。',
				img: [imgBasePath + '4_4_4.png'],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 405,
		title: '5.作业统计',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '在作业列表中，点击作业名称后的“统计”，进入作业统计页面；',
				img: [],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '首先呈现的是班级统计，点击班级名称后的“ ”箭头展开或收起班级统计列表，点击学生姓名可查看学生作业/测试完成详情，并可以点击左上方“导出”按钮将统计数据导出成Excel表格；若作业是按组发布的，还可以选择查看方式（按人/按组查看）。',
				img: [imgBasePath + '4_5_2.png'],
				cases: '',
				caseurls: ''
			},
			{
				intro: '点击选择逐题统计，点击右侧下拉框选择班级，下方会显示每一道题的统计饼图、学生详细作答情况和错误率排行等；点击左上方“导出”按钮可将统计数据导出成Excel表格（如下图）。',
				img: [imgBasePath + '4_5_3.png'],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 406,
		title: '6.作业管理',
		intro: '点击在线作业的图标或“在线作业”字样，进入在线作业列表，对作业进行管理。',
		img: [imgBasePath + '4_6.png'],
		seclist: [{
			title: '（1）	编辑和删除作业',
			steps: [{
				intro: '点击作业名称后的更多按钮，可对作业进行二次编辑和删除；',
				img: [imgBasePath + '4_6_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '已经发布的作业，点击“管理发布”，选择发布对象，取消发布后才能进行二次编辑和删除',
				img: [],
				cases: '',
				caseurls: ''
			}]
		},
		{
			title: '（2）	共享作业',
			steps: [{
				intro: '共享作业的查看与取消',
				img: [imgBasePath + '4_6_2_1.png', imgBasePath + '4_6_2_2.png', imgBasePath + '4_6_2_3.png'],
				cases: '',
				caseurls: ''	
			}]
		}]
	},
	{
		id: 407,
		title: '7.应用示例',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '示例一',
				img: [],
				cases: '应用示例一'	,
				caseurls: filesPath + '在线作业1.pdf'
			}]
		},{
			title: '',
			steps: [{
				intro: '示例二',
				img: [],
				cases: '应用示例二'	,
				caseurls: filesPath + '在线作业2.pdf'
			}]
		}]
	}]
},
{
	title: '测试反馈',
	intro: '测试反馈模块的基本操作步骤与在线作业相同，不同点在于：在线测试需要设定作答时间、在设置题目属性中不能添加思路及提示。',
	img: [imgBasePath + '5.png'],
	firList: []
},
{
	title: '错题统计',
	intro: '此模块通过选择班级、学科、时间等操作，可以让教师们了解到某个班或某个学生，近一段时间在某一知识点上所反映出的问题，为教师了解班级、了解学生学生、改变教学方法提供了可能。',
	img: [imgBasePath + '6.png'],
	firList: [{
		id: 601,
		title: '',
		intro: '点击上图中的某一位学生，教师可以看到此学生近期、某一学科出现的错误情况，从而为教师个别化指导提供了依据。',
		img: [imgBasePath + '6_1.png'],
		seclist: []
	}]
},
{
	title: '互动讨论',
	intro: '',
	img: [],
	firList: [{
		id: 701,
		title: '1.互动讨论简介',
		intro: '互动讨论板块为教师、学生搭建了一个沟通平台，他们通过发表主题、回复主题、展示学生作品等方式进行交流。',
		img: [],
		seclist: [{
			title: '（1）论坛结构',
			steps: [{
				intro: '论坛结构如下图所示，论坛〉学校〉班级〉栏目〉论题〉主题，如果您想在某个班级内组织讨论，就需加入该班级所在的学校，然后再加入该班，如何加入学校、班级可参考班级管理。',
				img: [imgBasePath + '7_1_1.png'],
				cases: '',
				caseurls: ''
				
			}]
		},
		{
			title: '（2）操作流程图',
			steps: [{
				intro: '下图简单地描述了教师基本操作流程。',
				img: [imgBasePath +"7_1_2_1.png"],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '下图简单地描述了教师基本操作流程。',
				img: [imgBasePath +"7_1_2_2.png"],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 702,
		title: '2.进入讨论',
		intro: '教师可以通过以下方式进入班级讨论主页面：',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '点击主页面上导航条上的“论坛”或点击“互动讨论”图标，可进入互动讨论主页；',
				img: [imgBasePath + '7_2_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '点击班级名称后的进入，即可进入该班级的讨论主页；',
				img: [imgBasePath + '7_2_2.png'],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 703,
		title: '3.新建讨论',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '新建栏目：点击班级讨论区页面上方“+栏目”新建栏目，建议以所教学科来命名。',
				img: [imgBasePath + '7_3_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '新建论题：选择或新建完栏目后，点击右上方新建论题按钮，编辑论题信息并提交（如下图）。',
				img: [imgBasePath + '7_3_2.png'],
				cases: '',
				caseurls: ''
			},
			{
				intro: '论题创建完成后，即可进入论题主页（如下图）。',
				img: [imgBasePath + '7_3_3.png'],
				cases: '',
				caseurls: ''
			},
			{
				intro: '新建主题：在论题主页，点击右上方“发表主题”按钮，进入发表主题页面（如下图），支持普通主题和小组讨论两种主题方式。',
				img: [imgBasePath + '7_3_4.png'],
				cases: '',
				caseurls: ''
			},
			{
				intro: '新建投票：在论题主页，点击右上方“发起投票”按钮，输入投票信息（如下图）。',
				img: [imgBasePath + '7_3_5.png'],
				cases: '',
				caseurls: ''
			},
			{
				intro: '栏目、论题的新建也可通过以下步骤完成：点击平台首页“在线作业”右侧的图标 （如下图），进入选择论题页面；',
				img: [imgBasePath + '7_3_6.png'],
				cases: '',
				caseurls: ''
			},
			{
				intro: '点击新建栏目、新建论题，输入相应名称，点击确定（如下图），即可进入“发表主题”页面。',
				img: [imgBasePath + '7_3_7.png'],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 704,
		title: '4.讨论管理',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '栏目管理：对自己创建的栏目可进行删除、编辑等管理操作（如下图）。',
				img: [],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '论题管理：对于创建的论题可进行编辑、删除、置顶操作（如下图）。',
				img: [imgBasePath + '7_4_1.png'],
				cases: '',
				caseurls: ''
			},
			{
				intro: '论题统计：点击论题名称进入论题主页，可查看论题参与情况统计。',
				img: [imgBasePath + '7_4_2.png'],
				cases: '',
				caseurls: ''
			},
			{
				intro: '主题管理：点击主题名称进入主题页面，可对主题进行锁定、置顶、精华等操作。',
				img: [imgBasePath + '7_4_4.png'],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 705,
		title: '5.回帖评价',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '进入主题页面，浏览学生回帖内容，对学生的回帖进行评论、盖印章、送鲜花、送鸡蛋等操作，与学生进行互动（如下图）。（注：印章和删除功能只有教师和教师指定的论题版主才有此权限）',
				img: [imgBasePath + '7_5_1_1.png', imgBasePath + '7_5_1_2.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '点击右下方删除按钮可删除不符合回帖要求的学生发帖。',
				img: [],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 706,
		title: '6.作品讲评',
		intro: '点击主题讨论页面左上方“讲评”按钮，进入学生作品讲评页面，点击页面右上角的“批注”按钮，选注学生回帖内容及相关批注按钮进行讲评。可将讲评内容进行保存，讲评完成后退出即可。（注：此功能教师也可用于课上集中点评讲解）',
		img: [imgBasePath + '7_6.png'],
		seclist: []
	},
	{
		id: 707,
		title: '7.优秀作品展示',
		intro: '点击主题讨论页面左上方“作品展示”按钮，展示学生优秀作品，默认按得鲜花数前10名的作品；教师可修改评选标准。',
		img: [imgBasePath + '7_7_1.png', imgBasePath + '7_7_2.png'],
		seclist: []
	},
	{
		id: 708,
		title: '8.论坛跳转',
		intro: '点击互动讨论页面按钮，点击下拉框选择省份、城市、区县、学校、班级，即可快速跳转至对应的班级讨论页面，可实现跨校跨区交流。',
		img: [imgBasePath + '7_8.png'],
		seclist: []
	},
	{
		id: 709,
		title: '9.应用示例',
		intro: '互动讨论板块为教师、学生搭建了一个沟通平台，师生通过发表主题、回复主题进行交流。互动讨论模块为学生进行自主、探究、合作学习，建立了实时互动的网络平台。学生可以与其他同学及老师参与讨论，实现生生、师生之间的互动交流。学生还可以对他人论题进行评论等，增加了学习的成绩感，激发学生的学习积极性。同时，伴随师生、生生互动交流产生的动态资源，成为学生学习的宝贵财富和知识积累。',
		img: [imgBasePath + '7_9_1.png', imgBasePath + '7_9_2.png'],
		seclist: [{
			title: '',
			steps: [{
				intro: '示例一',
				img: [],
				cases: '应用示例一'	,
				caseurls: filesPath + '互动讨论1.pdf'
			},{
				intro: '示例二',
				img: [],
				cases: '应用示例二'	,
				caseurls: filesPath + '互动讨论2.pdf'
			},{
				intro: '示例三',
				img: [],
				cases: '应用示例三'	,
				caseurls: filesPath + '互动讨论3.pdf'
			}]
		}]
	}]
},
{
	title: '网络学案',
	intro: '',
	img: [],
	firList: [{
		id: 801,
		title: '1.新建学案',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '点击教学平台首页面“网络学案”右侧的图标',
				img: [imgBasePath + '8_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '进入页面，输入学案名称、所属章节，在编辑区内输入文字，点击编辑工具可插入资源、作业、测试、讨论、填空题、问答题、投票等。',
				img: [imgBasePath + '8_2.png'],
				cases: '',
				caseurls: ''
			}]
		},
		{
			title: '（1）插入资源',
			steps: [{
				intro: '点击图标',
				img: [imgBasePath + '8_2_1_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '选择资源所在目录，点击插入即可',
				img: [imgBasePath + '8_2_1_2.png'],
				cases: '',
				caseurls: ''
			}]
		},
		{
			title: '（2）插入测试',
			steps: [{
				intro: '点击图标',
				img: [imgBasePath + '8_2_2_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '选择测试，点击插入即可',
				img: [imgBasePath + '8_2_2_2.png'],
				cases: '',
				caseurls: ''
			}]
		},
		{
			title: '（3）插入作业',
			steps: [{
				intro: '参照如何插入测试即可',
				img: [],
				cases: '',
				caseurls: ''
				
			}]
		},
		{
			title: '（4）插入讨论',
			steps: [{
				intro: '点击图标',
				img: [imgBasePath + '8_2_4_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '新建讨论相关操作详见（十）互动讨论',
				img: [imgBasePath + '8_2_4_2.png'],
				cases: '',
				caseurls: ''
			},
			{
				intro: '也可插入既有主题讨论。',
				img: [imgBasePath + '8_2_4_3.png'],
				cases: '',
				caseurls: ''
			}]
		},
		{
			title: '（5）插入问题',
			steps: [{
				intro: '点击 图标',
				img: [imgBasePath + '8_2_5_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '点击填空题按钮，插入填空，完成内容编辑后，点击插入即可',
				img: [imgBasePath + '8_2_5_2.png'],
				cases: '',
				caseurls: ''
			},
			{
				intro: '点击问答题按钮，完成内容编辑后，点击插入即可',
				img: [imgBasePath + '8_2_5_3.png'],
				cases: '',
				caseurls: ''
			}]
		},
		{
			title: '（6）插入投票',
			steps: [{
				intro: '点击图标',
				img: [imgBasePath + '8_2_6_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '选择资源所在目录，点击插入即可',
				img: [imgBasePath + '8_2_6_2.png'],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 802,
		title: '2.管理学案',
		intro: '学案的发布、编辑、删除、共享等操作，可参照“5.6作业管理”',
		img: [],
		seclist: []
	},
	{
		id: 803,
		title: '3.应用示例',
		intro: '示例课前导学案',
		img: [],
		seclist: [{
				title: '',
				steps: [{
					intro: '示例',
					img: [],
					cases: '示例课前导学案',
					caseurls: filesPath + '网络学案.pdf'	
				}]
			}]
	}]
},
{
	title: '课堂控制',
	intro: '利用课堂控制交互软件，可以实现屏幕广播、学生演示、监控学生平板等操作。',
	img: [],
	firList: [{
		id: 901,
		title: '1.教师登录',
		intro: '点击电脑桌面图标，打开系统登录页面，点击创建账户。输入教师姓名（用户名）、登录密码，点击登录。',
		img: [imgBasePath + '9_1.png'],
		seclist: []
	},
	{
		id: 902,
		title: '2.连接学生端',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '步骤1：组织学生点击打开“电子书包”客户端“课堂互动”模块，首次登录需点击“设置名称”输入学生姓名，并点击选择上方出现的“教师”申请加入教师所教授的班级。',
				img: [imgBasePath + '9_2_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '步骤2：学生端申请加入教师所教授的班级后，教师端会自动弹出等待连接列表，点击全部接受完成教师端和学生端的连接。',
				img: [imgBasePath + '9_2_2.png'],
				cases: '',
				caseurls: ''
			},
			{
				intro: '步骤3：教师首次登录后点击右上方“自动连接”，在同一无线网络环境中，学生再次登录时会自动连接到班级中。',
				img: [imgBasePath + '9_2_3.png'],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 903,
		title: '3.屏幕广播',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '步骤：单击左上方“屏幕广播”按钮，可将教师端教学内容广播至学生端，再次点击“屏幕广播”按钮取消广播。',
				img: [imgBasePath + '9_3_1.png'],
				cases: '',
				caseurls: ''
				
			},
			{
				intro: '还可使用浮动工具栏进行辅助操作；',
				img: [imgBasePath + '9_3_2.png'],
				cases: '',
				caseurls: ''
			}]
		}]
	},
	{
		id: 904,
		title: '4.学生演示',
		intro: '在“所有成员”列表页面中选择一个要演示的学生，单击左上方“学生演示”按钮，并选择接收演示的范围。',
		img: [imgBasePath + '9_4.png'],
		seclist: []
	},
	{
		id: 905,
		title: '5.黑屏安静',
		intro: '点击右上方“黑屏安静”按钮，学生端弹出黑屏提示，单击“取消黑屏安静”按钮可取消。',
		img: [imgBasePath + '9_5.png'],
		seclist: []
	},
	{
		id: 906,
		title: '6.应用示例',
		intro: '',
		img: [],
		seclist: [{
			title: '',
			steps: [{
				intro: '示例',
				img: [],
				cases: '示例1：调屏展示',
				caseurls: filesPath + '课堂控制1.pdf'
			},
			{
				intro: '示例',
				img: [],
				cases: '示例2：抢答竞赛',
				caseurls: filesPath + '课堂控制2.pdf'
			}]
		}]
	}]
}]

var caseData = [{
	title: '广州市番禺区智慧教育项目',
	info: '广州市番禺区目前用户规模已达到1.3万多人，业内规模最大!教学应用覆盖高中、初中、小学三个学段、各个学科，真正实现常态化教学！',
	img: basePath + '/img/caseImg/1.png',
	caseUrl: 'http://ys.tfedu.net/navigation/%E5%BA%94%E7%94%A8%E6%A1%88%E4%BE%8B/html/py/py.html'
},
{
	title: '北京市朝阳区“电子书包”项目',
	info: '朝阳区教科院附中，团结湖三中、中国旅游学院附中等八所中学于2014年9月开始联合开展“电子书包双课堂”教学研究。不到一年时间，已初见成效！',
	img: basePath + '/img/caseImg/2.png',
	caseUrl: 'http://ys.tfedu.net/navigation/%E5%BA%94%E7%94%A8%E6%A1%88%E4%BE%8B/html/skt.html'
},
{
	title: '清华附中“未来课堂与创新人才培养模式实践研究项目”',
	info: '华大学附属中学与同方知好乐联合开展“未来课堂与创新人才培养模式实践研究项目”。',
	img: basePath + '/img/caseImg/3.png',
	caseUrl: 'http://ys.tfedu.net/navigation/%E5%BA%94%E7%94%A8%E6%A1%88%E4%BE%8B/html/qhfz.html'
},
{
	title: '河南焦作23中“双课堂”教学实践研究项目',
	info: '河南焦作23中从2012年开始开展网络化双课堂教学实验，打造出了自己独具特色的 二∙五∙一”高效课堂模式，影响深远。',
	img: basePath + '/img/caseImg/4.png',
	caseUrl: 'http://ys.tfedu.net/navigation/应用案例/html/hnjz.html'
},
{
	title: '清华附中人人通项目：',
	info: '潘天俊老师使用人人通平台开展翻转课堂教学，取得了比对照班高17分的好成绩。',
	img: basePath + '/img/caseImg/5.png',
	caseUrl: 'http://ys.tfedu.net/navigation/应用案例/html/qhfzrrt.html'
},
{
	title: '北京四中人人通项目： ',
	info: '北京四中所有的语文老师都在自发地使用知好乐人人通平台进行教学。',
	img: basePath + '/img/caseImg/6.png',
	caseUrl: 'http://ys.tfedu.net/navigation/应用案例/html/bjszrrt.html'
},
{
	title: '北京五中人人通项目：',
	info: '北京五中的王屏萍老师用双课堂的教学理念，以知好乐的人人通平台为工具培养出高考语文状元和第三名。',
	img: basePath + '/img/caseImg/7.png',
	caseUrl: 'http://ys.tfedu.net/navigation/应用案例/ppt-slider/index.html'
}]

var videoBasePath = "http://192.168.111.8/";
var videoData = [{
	title: '整体介绍',
	thumbnail : basePath + '/img/sidebarIcon/intro.png',
	menuId: 1,
	video: videoBasePath + 'index/help/video/1.mp4',
	subtitle: []
},
{
	title: '个人空间',
	thumbnail : basePath + '/img/sidebarIcon/userZone.png',
	menuId: 2,
	video: videoBasePath + 'index/help/video/2.mp4',
	subtitle: []
},
{
	title: '资源',
	thumbnail : basePath + '/img/sidebarIcon/resource.png',
	menuId: 3,
	video: videoBasePath + 'index/help/video/3.mp4',
	subtitle: []
},
{
	title: '教学',
	thumbnail : basePath + '/img/sidebarIcon/lessonPrepare.png',
	menuId: 4,
	video: videoBasePath + 'index/help/video/4.mp4',
	subtitle: []
},
{
	title: '在线作业',
	thumbnail : basePath + '/img/sidebarIcon/onlineWork.png',
	menuId: 5,
	video: '',
	subtitle: [{
		title: '如何新建、发布及检索',
		video: videoBasePath + 'index/help/video/7.mp4'
	},
	{
		title: '如何编辑、批改、统计、管理发布',
		video: videoBasePath + 'index/help/video/8.mp4',
	}]
},
{
	title: '测试反馈',
	thumbnail : basePath + '/img/sidebarIcon/test.png',
	menuId: 6,
	video: videoBasePath + 'index/help/video/9.mp4',
	subtitle: []
},
{
	title: '互动讨论',
	video: '',
	thumbnail : basePath + '/img/sidebarIcon/discuss.png',
	menuId: 7,
	subtitle: [{
		title: '如何新建栏目/论题',
		video: videoBasePath + 'index/help/video/10.mp4'
	},
	{
		title: '如何新建及管理主题',
		video: videoBasePath + 'index/help/video/11.mp4',
	}]
},
{
	title: '网络学案',
	video: '',
	thumbnail : basePath + '/img/sidebarIcon/onlineCase.png',
	menuId: 8,
	subtitle: [{
		title: '如何新建',
		video: videoBasePath + 'index/help/video/5.mp4'
	},
	{
		title: '如何管理',
		video: videoBasePath + 'index/help/video/6.mp4',
	}]
},
{
	title: '课堂控制',
	thumbnail : basePath + '/img/sidebarIcon/courseControl.png',
	menuId: 9,
	video: videoBasePath + 'index/help/video/12.mp4',
	subtitle: []
}]

var videourl = {
	title: '整体介绍',
	path: videoBasePath + 'index/help/video/1.mp4'
}
