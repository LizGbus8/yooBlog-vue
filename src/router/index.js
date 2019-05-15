import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout/Layout'
import Home from '@/pages/Home/Home'
import ArticleDetail from '@/pages/ArticleDetail/ArticleDetail'
import Talk from '@/pages/Talk/Talk'
import Record from '@/pages/Record/Record'
import ERR_404 from '@/components/error/err_404'
import Master from "../pages/Master/Master";
import Base from "../pages/Base/Base";
import Help from "../pages/Help/Help";
import About from "../pages/ABout/About";
import Utils from "../pages/Base/Utils";
import Album from "../pages/Base/Album";
import Favorites from "../pages/Base/Favorites";
import Detail from "../pages/Base/Detail";
import Terminal from "../components/dialog/Terminal";

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
          path: '/base',
          name: 'Base',
          component: Base
        },
        {
          path: 'album',
          name: 'Album',
          component: Album
        },
        {
          path: 'basedetail',
          name: 'Detail',
          component: Detail
        },
        {
          path: 'utils',
          name: 'Utils',
          component: Utils
        },
        {
          path: 'favorites',
          name: 'Favorites',
          component: Favorites
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
          path: '/master',
          name: 'Master',
          component: Master
        },
        {
          path: '/help',
          name: 'Help',
          component: Help
        },
        {
          path: '/about',
          name: 'About',
          component: About
        }
        ,
        {
          path: '/terminal',
          name: 'Terminal',
          component: Terminal
        }
      ]
    },
    {
      path: '*',
      name: 'err_404',
      component: ERR_404
    }
  ]
})
