import ajax from './ajax'

const BASE_URL = 'http://localhost:8000';

//请求最近文章
export const getArticle = (params) => ajax(BASE_URL + '/articles', params);

//所有标签
export const getAllTab = () => ajax(BASE_URL + '/tabs');

//文章详情
export const getArticleDetail = (params) => ajax(BASE_URL + '/article/'+params);

//文章评论
export const getComments = (params) => ajax(BASE_URL + '/comments', params);

//留言列表
export const getTalks = (params) => ajax(BASE_URL + '/talks',params);

//添加留言
export const addTalk = (params) => ajax(BASE_URL + '/talk', params,'POST');

//添加评论回复
export const addReply2Comment = (params) => ajax(BASE_URL + '/reply/comment', params,'POST');

//添加子回复回复
export const addReply2Reply = (params) => ajax(BASE_URL + '/reply/reply', params,'POST');
