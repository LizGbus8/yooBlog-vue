import {
  getArticle
} from '@/api';

import {
  ARTICLE_LIST
} from '../mutation-types'

const state = {
  total: 0,
  items: []
}

const actions = {
  async reqArticles({commit}, params) {
    const result = await getArticle(params);
    commit(ARTICLE_LIST, {items: result.data.records, total: result.data.total});
  }
};

const mutations = {
  [ARTICLE_LIST](state, action){
    state.items = action.items;
    state.total = action.total;
  }
};

export default {
  state,
  actions,
  mutations
}
