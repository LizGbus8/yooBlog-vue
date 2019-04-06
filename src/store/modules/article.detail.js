import {
  getArticleDetail
} from '@/api';

import {
  ARTICLE_DETAIL
} from '../mutation-types'

const state = {
  article:{}
};

const actions = {
  async reqArticle({commit}, params) {
    const result = await getArticleDetail(params);
    commit(ARTICLE_DETAIL, {article: result.data});
  }
};

const mutations = {
  [ARTICLE_DETAIL](state, action){
    state.article = action.article;
  }
};

export default {
  state,
  actions,
  mutations
}
