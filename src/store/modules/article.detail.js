import {
  getArticleDetail,
  getComments
} from '@/api';

import {
  ARTICLE_DETAIL,
  COMMENTS
} from '../mutation-types'

const state = {
  article:{},
  comments:{}
};

const actions = {
  async reqArticle({commit}, params) {
    const result = await getArticleDetail(params);
    commit(ARTICLE_DETAIL, {article: result.data});
  },
  async reqComments({commit}, params) {
    const result = await getComments(params);
    commit(COMMENTS, {comments: result.data});
  },
};

const mutations = {
  [ARTICLE_DETAIL](state, action){
    state.article = action.article;
  },
  [COMMENTS](state, action){
    state.comments = action.comments;
  }
};

export default {
  state,
  actions,
  mutations
}
