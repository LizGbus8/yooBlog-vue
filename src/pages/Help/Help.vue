<template>
  <div class="wrap">
    <div class="header">
      <h2>--博客说明--</h2>
      <p>这个圈的人不多，但都很nice！！<img src="http://pics.sc.chinaz.com/Files/pic/icons128/6837/d11.png"></p>
      <p>超喜欢里面的人，个个都是人才，博客又好看！！<img src="http://pics.sc.chinaz.com/Files/pic/icons128/6837/d10.png"></p>
    </div>
    <hr width="45%"><span class="datetime">2019-04-03</span><hr width="45%">
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
    .datetime
      padding 0 16px 0 16px

  hr
    height 3px;
    background-color rgb(204, 204, 204);
    background-image repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 4px, transparent 4px, transparent 8px);
    margin 20px 0;
    border-width initial;
    border-style none;
    border-color initial;
    border-image initial;
    vertical-align:middle;
    display:inline-block;
</style>
