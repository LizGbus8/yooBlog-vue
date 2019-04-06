import ajax from './ajax'

const BASE_URL = 'http://localhost:8000';

//请求最近文章
export const getArticle = (params) => ajax(BASE_URL + '/articles', params);

//所有标签
export const getAllTab = () => ajax(BASE_URL + '/tabs');

//所有标签
export const getArticleDetail = (param) => ajax(BASE_URL + '/article/'+param);
