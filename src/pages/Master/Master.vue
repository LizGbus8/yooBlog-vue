<template>
  <div class="wrap">
    <div class="header">
      <h2>--友情链接--</h2>
      <p>这个圈的人不多，但都很nice！！<img src="http://pics.sc.chinaz.com/Files/pic/icons128/6837/d11.png"></p>
      <p>超喜欢里面的人，个个都是人才，博客又好看！！<img src="http://pics.sc.chinaz.com/Files/pic/icons128/6837/d10.png"></p>
    </div>
    <hr/>
    <div class="row">
      <div class="col">
        <el-card class="master">
          <div class="title">
            <img src="https://img.smohan.net/link/2845c47614c43f099d0f5da358689f22.png">
            <h3 class="name">yooblog</h3>
          </div>
          <h4 class="saying">90后双鱼座普通逗比男青年，目前专注于前端与PHP技术的学习。</h4>
        </el-card>
        <el-card class="master">
          <div class="title">
            <img src="https://img.smohan.net/link/2845c47614c43f099d0f5da358689f22.png">
            <h3 class="name">yooblog</h3>
          </div>
          <h4 class="saying">优秀个人博客丶一个站在Java后端设计之路的男青年个人博客网站</h4>
        </el-card>
        <el-card class="master">
          <div class="title">
            <img src="https://img.smohan.net/link/2845c47614c43f099d0f5da358689f22.png">
            <h3 class="name">yooblog</h3>
          </div>
          <h4 class="saying">优秀个人博客丶一个站在Java后端设计之路的男青年个人博客网站</h4>
        </el-card>
        <el-card class="master">
          <div class="title">
            <img src="https://img.smohan.net/link/2845c47614c43f099d0f5da358689f22.png">
            <h3 class="name">yooblog</h3>
          </div>
          <h4 class="saying">优秀个人博客丶一个站在Java后端设计之路的男青年个人博客网站</h4>
        </el-card>
        <el-card class="master">
          <div class="title">
            <img src="https://img.smohan.net/link/2845c47614c43f099d0f5da358689f22.png">
            <h3 class="name">yooblog</h3>
          </div>
          <h4 class="saying">优秀个人博客丶一个站在Java后端设计之路的男青年个人博客网站</h4>
        </el-card>
        <el-card class="master">
          <div class="title">
            <img src="https://img.smohan.net/link/2845c47614c43f099d0f5da358689f22.png">
            <h3 class="name">yooblog</h3>
          </div>
          <h4 class="saying">优秀个人博客丶一个站在Java后端设计之路的男青年个人博客网站</h4>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Master"
  }
</script>

<style scoped lang="stylus">
  .wrap
    .header
      margin-top 50px
      text-align center
      color $fontColor2
      p
        margin 0
      img
        width 30px
        height 30px
    .row
      display flex
      width 100%
      .col
        margin 5px
        display flex
        flex-wrap wrap
        .master
          display flex
          width 24%
          height 140px
          margin 5px
          .title
            display flex
            img
              width 28px
              height 28px
            h3
              margin 5px 0 5px 8px
          .saying
              margin-top 8px
  hr
    height 3px;
    background-color rgb(204, 204, 204);
    background-image repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 4px, transparent 4px, transparent 8px);
    margin 16px 0;
    border-width initial;
    border-style none;
    border-color initial;
    border-image initial;
</style>
