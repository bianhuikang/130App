import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/mans',component:  resolve => require(['@/page/mans'], resolve)},
    {path: '/nv',component:  resolve => require(['@/page/nv'], resolve)},
    {path: '/classify',component:  resolve => require(['@/page/classify'], resolve)},
    {path: '/ranking',component:  resolve => require(['@/page/ranking'], resolve)},
    //搜索
    {path: '/seek',component:  resolve => require(['@/page/seek'], resolve)},
    //登录
    {path: '/register',component:  resolve => require(['@/page/register'], resolve)},
    {path:'*',redirect:'/mans'},
    //详情
    {path:'/particulars/:idx',component:  resolve => require(['@/components/particulars'], resolve)},
    {path:'/particulars1/:idx',component:  resolve => require(['@/components/particulars1'], resolve)},
    {path:'/seekxiang/:idx',component:  resolve => require(['@/components/seekxiang'], resolve)},
    {path:'/rankings/:idx',component:  resolve => require(['@/components/rankings'], resolve)},
    //加入书架
    {path:'/bookrack',component:  resolve => require(['@/page/register'], resolve)},
    //章节
//  {path:'/sections',component:Sections},
		{path:'/sections',component:  resolve => require(['@/components/sections'], resolve)},
  ]
})
