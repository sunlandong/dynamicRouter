import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'login',
      leaf:true,
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: '404',
      leaf:true,
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '主页',
      leaf:false,
      hidden:true,
      children: [
        { path: 'main', component: Main , name: 'dsds',leaf:true,hidden:true,}
      ]
    }
    //{ path: '/main', component: Main },
    // {
    //   path: '/',
    //   component: Home,
    //   name: '北马管理',
    //   iconCls: 'el-icon-message',//图标样式class
    //   children: [
    //     { path: '/main', component: Main, name: '主页', hidden: true },
    //     { path: '/table', component: Table, name: '作品审核' },
    //     { path: '/comment', component: Comment, name: '评论审核' },
    //     { path: '/choose', component: Choose, name: '追风作品评选' },
    //     { path: '/download', component: Download, name: '下载统计' },
    //   ]
    // },
  ]
})
