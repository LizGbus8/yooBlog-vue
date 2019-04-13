import {
  getArticleDetail,
  getComments
} from '@/api';

import {
  ARTICLE_DETAIL,
  COMMENTS
} from '../mutation-types'
import {addArticleComment} from "../../api";

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
  async reqArticleComment({commit}, object) {
    const result = await addArticleComment(object.params);
    //评论添加成功
    if (result.code == 0) {
      //评论数增1
      state.article.reply++;
      //加上添加的评论
      state.comments.unshift(result.data)
    }
    object.callback && object.callback(result);
  },
  async updateArticleComment({commit}, param) {
    console.log(param)
    let reply = param.data;
    state.comments.forEach((comment) => {
      if (comment.cid == reply.commentsId) {
        comment.replies.push(reply);
      }
    })

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
