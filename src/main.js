// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/font/iconfont.css';
import VueClipboard from 'vue-clipboard2'

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(VueClipboard)

Vue.prototype.$http = axios;

Vue.prototype.$http.interceptors.response.use(response => {
  switch (response.data.code) {
    case 999:
      router.push({name: 'err_404', params: {code:response.data.msg,msg: response.data.msg}});break;
  }
  return response;
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 404:
        console.log(404)
        //router.push({name:'error-404'});
        // error.message = '请求出错(404)'
        break;

      case 500:
        console.log(500)
        //router.push({ name:'error-500'});
        //  error.message = '服务器错误(500)';
        break;

      default: error.message = `连接出错(${error.response.status})!`;
    }
  }
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
