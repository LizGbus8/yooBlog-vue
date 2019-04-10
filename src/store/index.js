import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import articleList from './modules/article.list'
import tab from './modules/tab'
import articleDetail from './modules/article.detail'
import talk from './modules/talk'
import state from './state'
import mutations from "./mutations";
import actions from "./actions";
import reply from "./modules/reply";

//1.使用VUEX
Vue.use(Vuex);
//2.导出store对象
export default new Vuex.Store({
  mutations,
  actions,
	getters,
  state,
  modules: {
    articleList,
    tab,
    articleDetail,
    talk,
    reply
  }
})
