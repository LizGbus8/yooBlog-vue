import {addReply2Comment, addReply2Reply} from "../../api";

const state = {

};

const actions = {
  async reqReply2Comment({commit}, object) {
    const result = await addReply2Comment(object.params);

    object.callback && object.callback(result);
  },
  async reqReply2Reply({commit}, object) {
    const result = await addReply2Reply(object.params);
    object.callback && object.callback(result);
  }
};

const mutations = {

};

export default {
  state,
  actions,
  mutations
}
