import {ARTICLE_DETAIL, TALKS} from "../mutation-types";
import {addTalk, getTalks} from "../../api";

const state = {
  talks:null
};

const actions = {
  async reqTalks({commit}, params) {
    const result = await getTalks(params);
    commit(TALKS, {talks: result.data});
  },
  async reqTalk({commit}, object) {
    const result = await addTalk(object.params);
    //记录添加成功，更新留言列表，注意：严格模式下不能直接修改state
    if (result.code == 0){
      //头部加入
      state.talks.unshift(result.data);
      //尾部删除
      state.talks.pop();
    }
    object.callback && object.callback(result);
  }
};

const mutations = {
  [TALKS](state, action){
    state.talks = action.talks;
  }
};

export default {
  state,
  actions,
  mutations
}
