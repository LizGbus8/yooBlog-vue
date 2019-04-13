import {TALKS} from "../mutation-types";
import {addTalk, getTalks} from "../../api";

const state = {
  talks:[],
  loading:true,
  current: 0,//当前页
};

const actions = {
  async reqTalks({commit}, callback) {
    state.current++;
    const result = await getTalks({current: state.current});
    //成功返回
    if (result.code === 0 && result.data !== null) {
      commit(TALKS, {talks: state.talks.concat(result.data)});
      state.loading = false;
    }
    callback && callback(result);
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
  },
  async updateTalks({commit}, param) {
    let reply = param.data;
    state.talks.forEach((talk) => {
      if (talk.cid == reply.commentsId) {
        talk.replies.push(reply);
      }
    })
  },
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
