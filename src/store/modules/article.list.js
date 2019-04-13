import {
  getArticle
} from '@/api';

import {
  ARTICLE_LIST
} from '../mutation-types'

const state = {
  total: 0,
  items: [],
  loading:true
}

const actions = {
  async reqArticles({commit}, params) {
    state.loading=true;
    const result = await getArticle(params);
    commit(ARTICLE_LIST, {items: result.data.records, total: result.data.total,loading: false});
  }
};

const mutations = {
  [ARTICLE_LIST](state, action){
    state.items = action.items;
    state.total = action.total;
    state.loading = action.loading;
  }
};

export default {
  state,
  actions,
  mutations
}
