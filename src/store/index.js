import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import articleList from './modules/article.list'
import tab from './modules/tab'
import articleDetail from './modules/article.detail'

//1.使用VUEX
Vue.use(Vuex);
//2.导出store对象
export default new Vuex.Store({
	actions,
	mutations,
	getters,
  modules: {
    articleList,
    tab,
    articleDetail
  },
})
