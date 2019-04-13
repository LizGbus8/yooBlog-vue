import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout/Layout'
import Home from '@/pages/Home/Home'
import ArticleDetail from '@/pages/ArticleDetail/ArticleDetail'
import Talk from '@/pages/Talk/Talk'
import Record from '@/pages/Record/Record'
import ERR_404 from '@/components/error/err_404'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path: '/home',
          name: 'Home',
          component: Home,
        },
        {
          path: '/detail/:aid',
          name: 'ArticleDetail',
          component: ArticleDetail,
        },
        {
          path: '/record',
          name: 'Record',
          component: Record
        },
        {
          path: '/talk',
          name: 'Talk',
          component: Talk
        },
        {
          path: '*',
          name: 'err_404',
          component: ERR_404
        }
      ]
    }
  ]
})
