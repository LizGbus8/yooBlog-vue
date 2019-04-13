<template>
  <div class="layout">
    <div class="main">
      <div class="err">
        <p class="err_text">非常抱歉，您访<br>问的页面不存在{{this.$route.params.msg}}</p>
        <a href="" class="err_back">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "err_404.vue"
    }
</script>

<style scoped lang="stylus">
  body {
    color: #A1A2AF;
    font-family: "Microsoft YaHei", "Segoe UI", "Lucida Grande", Helvetica, Arial, sans-serif
  }

  .layout {
    width: 1190px;
    margin: 150px auto
  }

  .err {
    position: relative;
    width: 568px;
    height: 306px;
    margin: 100px auto 40px;
    background: url("../../assets/image/err.jpg") no-repeat 21px 18px;
    font-size: 14px
  }

  .err_text {
    position: absolute;
    top: 246px;
    left: 239px
  }

  .err_back {
    position: absolute;
    top: 257px;
    left: 353px;
    width: 154px;
    height: 38px;
    text-indent: -999px;
    overflow: hidden
  }
</style>
