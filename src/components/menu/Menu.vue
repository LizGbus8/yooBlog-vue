<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div class='wrap'>
    <input type='checkbox' id='checking' style='display:none;' />
    <button class='blob' @click="menuClick('reply')"><i class="iconfont">&#xe644;</i></button>
    <button class='blob'><i class="iconfont" style="font-size: 22px">&#xe8e5;</i></button>
    <button class='blob'>&#x2699;1</button>
    <button class='blob'>&#x2764;</button>
    <button class='blob' title="关于我" @click="toPage('/about')"><i class="iconfont">&#xe67d;3</i></button>
    <button class='blob' title="分享"
            v-clipboard:copy="message"
            v-clipboard:success="onCopy"><i class="iconfont">&#xe617;4</i></button>
    <button class='blob'><i class="iconfont" style="font-size: 22px">&#xe605;5</i></button>
    <button class='blob' title="帮助" @click="toPage('/help')"><i class="iconfont">&#xe66e;6</i></button>
    <label class='blob' for='checking'>
      <span class='bar'></span>
      <span class='bar'></span>
      <span class='bar'></span>
    </label>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    data(){
      return {
        message:"这个博客网站做得还不错！！赶紧来看看吧！！www.yooblog.com"
      }
    },
    methods: {
      menuClick: function (option) {
        //重复点击
        if (option == this.$store.state.component.name) {
          this.$store.dispatch("setComponent", {})
        } else {
          let path = this.$route.fullPath;
          let placeholder;
          let params;
          //主页和留言页面
          const talkPath = ['/home', '/talk', '/record', '/base'];
          if (path.indexOf('/home') != -1 || path.indexOf('/talk') != -1 || path.indexOf('/record') != -1 || path.indexOf('/base') != -1) {
            placeholder = "给我留言吧(￣▽￣)~*";
            params = {
              'name': option,//Layout显示的组件
              'action': 'reqTalk',//添加留言API
              'placeholder': placeholder,//文本框提示
              'submitDesc': '留言'//提交按钮文字
            };
          //文章详情页面
          } else if (path.indexOf('/detail') != -1) {
            placeholder = "快给文章评论吧(￣▽￣)~*";
            params = {
              'name': option,//Layout显示的组件
              'action': 'reqArticleComment',//添加留言API
              'placeholder': placeholder,//文本框提示
              'submitDesc': '评论',//提交按钮文字
              'id': path.substring(path.lastIndexOf('/') + 1,path.length)
            };
          }
          this.$store.dispatch("setComponent", params)
        }
      },
      toPage(path){
        this.$router.replace(path)
      },
      onCopy(){
        //提示
        this.$message({
          type:'success',
          center:true,
          message: '已经复制到剪贴板，赶紧复制分享吧！\\(^ 0^)/'
        });
      },
      onError(){
        //提示
        this.$message({
          type:'error',
          center:true,
          message: '复制失败咯，重试一下！！\\(^ 0^)/'
        });
      }
    }
  }
</script>

<style scoped lang="stylus">
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 18px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .bar {
    display: block;
    width: 30px;
    height: 4px;
    margin: 5px auto;
    background-color: #fff;
    border-radius: 2px;
    transition: all 0.4s linear 0.1s;
    -webkit-transition: all 0.4s linear 0.1s;
    -moz-transition: all 0.4s linear 0.1s;
    -o-transition: all 0.4s linear 0.1s;
    -ms-transition: all 0.4s linear 0.1s;
  }
  .bar:first-child {
    margin-top: 15px;
  }
  .wrap {
    position: fixed;
    top: 85%;
    left: 90%;
    margin: auto;
    width: 150px;
    height: 100px;
  }
  .wrap .blob {
    display: block;
    cursor: pointer;
    border: none;
    outline: none;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 30;
    background-color: #F44336;
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
    -webkit-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
    -moz-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
    -o-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
    -ms-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
  }
  .wrap .blob[for="checking"] {
    z-index: 30;
    font-size: 60px;
    text-align: center;
    color: #fff;
    transition: transform 0.5s ease-in-out 0.2s;
    -webkit-transition: -webkit-transform 0.5s ease-in-out 0.2s;
    -moz-transition: transform 0.5s ease-in-out 0.2s;
    -o-transition: transform 0.5s ease-in-out 0.2s;
    -ms-transition: transform 0.5s ease-in-out 0.2s;
  }
  .wrap .blob:not([for="checking"]) {
    width: 35px;
    height: 35px;
    top: 5px;
    left: 5px;
    font-size: 22px;
    padding 3px;
    vertical-align middle
    text-align center
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
  }
  .wrap .blob:not([for="checking"]):hover {
    color: $theme;
    animation: harlem 0.5s linear forwards;
    -webkit-animation: harlem 0.5s linear forwards;
    -moz-animation: harlem 0.5s linear forwards;
    -o-animation: harlem 0.5s linear forwards;
    -ms-animation: harlem 0.5s linear forwards;
  }
  .wrap > #checking:checked ~ .blob:nth-child(2) {
    margin-left: -85px;
    margin-top: -10px;
    background-color: #fff;
  }
  .wrap > #checking:checked ~ .blob:nth-child(3) {
    margin-top: -145px;
    margin-left: -65px;
    background-color: #fff;
  }
  .wrap > #checking:checked ~ .blob:nth-child(4) {
    margin-top: -160px;
    margin-left: -10px;
    background-color: #fff;
  }
  .wrap > #checking:checked ~ .blob:nth-child(5) {
    margin-top: -85px;
    margin-left: -10px;
    background-color: #fff;
  }
  .wrap > #checking:checked ~ .blob:nth-child(6) {
    margin-top: -63px;
    margin-left: -63px;
    background-color: #fff;
  }
  .wrap > #checking:checked ~ .blob:nth-child(7) {
    margin-top: -65px;
    margin-left: -145px;
    background-color: #fff;
  }
  .wrap > #checking:checked ~ .blob:nth-child(8) {
    margin-top: -112px;
    margin-left: -112px;
    background-color: #fff;
  }
  .wrap > #checking:checked ~ .blob:nth-child(9) {
    margin-top: -10px;
    margin-left: -160px;
    background-color: #fff;
  }
  .wrap > #checking:checked ~ .blob[for="checking"] > .bar:nth-child(1) {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    margin-top: 25px;
  }
  .wrap > #checking:checked ~ .blob[for="checking"] > .bar:nth-child(2) {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    margin-top: -8.5px;
  }
  .wrap > #checking:checked ~ .blob[for="checking"] > .bar:nth-child(3) {
    opacity: 0;
  }

  @keyframes harlem {
    0% {
      transform: translate(0);
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      -o-transform: translate(0);
      -ms-transform: translate(0);
    }
    25% {
      transform: translate(5px, 5px);
      -webkit-transform: translate(5px, 5px);
      -moz-transform: translate(5px, 5px);
      -o-transform: translate(5px, 5px);
      -ms-transform: translate(5px, 5px);
    }
    50% {
      transform: translate(-5px, -5px);
      -webkit-transform: translate(-5px, -5px);
      -moz-transform: translate(-5px, -5px);
      -o-transform: translate(-5px, -5px);
      -ms-transform: translate(-5px, -5px);
    }
    75% {
      transform: translate(2px, 2px);
      -webkit-transform: translate(2px, 2px);
      -moz-transform: translate(2px, 2px);
      -o-transform: translate(2px, 2px);
      -ms-transform: translate(2px, 2px);
    }
    100% {
      transform: translate(0);
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      -o-transform: translate(0);
      -ms-transform: translate(0);
    }
  }
  @-webkit-keyframes harlem {
    0% {
      transform: translate(0);
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      -o-transform: translate(0);
      -ms-transform: translate(0);
    }
    25% {
      transform: translate(5px, 5px);
      -webkit-transform: translate(5px, 5px);
      -moz-transform: translate(5px, 5px);
      -o-transform: translate(5px, 5px);
      -ms-transform: translate(5px, 5px);
    }
    50% {
      transform: translate(-5px, -5px);
      -webkit-transform: translate(-5px, -5px);
      -moz-transform: translate(-5px, -5px);
      -o-transform: translate(-5px, -5px);
      -ms-transform: translate(-5px, -5px);
    }
    75% {
      transform: translate(2px, 2px);
      -webkit-transform: translate(2px, 2px);
      -moz-transform: translate(2px, 2px);
      -o-transform: translate(2px, 2px);
      -ms-transform: translate(2px, 2px);
    }
    100% {
      transform: translate(0);
      -webkit-transform: translate(0);
      -moz-transform: translate(0);
      -o-transform: translate(0);
      -ms-transform: translate(0);
    }
  }
  .writingshit {
    width: 60%;
    margin: 50px auto;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 0 10px 2px #000;
    -webkit-box-shadow: 0 0 10px 2px #000;
    -moz-box-shadow: 0 0 10px 2px #000;
    -o-box-shadow: 0 0 10px 2px #000;
    -ms-box-shadow: 0 0 10px 2px #000;
  }
  .writingshit .wow {
    padding: 30px;
  }
  .writingshit .wow p {
    padding: 0 30px;
  }
</style>
