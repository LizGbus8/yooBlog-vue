import {
  getAllTab
} from '@/api';

import {
  TAB_ALL
} from '../mutation-types'

const state = {
  tabs: []
}

const actions = {
  async reqTabs({commit},callback) {
    const result = await getAllTab();
    commit(TAB_ALL, {tabs: result.data});
    callback && callback();
  }
}

const mutations = {
  [TAB_ALL](state, action){
    state.tabs = action.tabs;
  }
}

export default {
  state,
  actions,
  mutations
}
