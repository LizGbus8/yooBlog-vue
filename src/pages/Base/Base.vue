<template>
  <div class="wrap">
    <div class="base-item">
      <div class="show" @click="toPage('/utils')">
        <img src="http://pics.sc.chinaz.com/Files/pic/icons128/6850/o3.png">
        <h2>工具</h2>
      </div>
    </div>
    <div class="base-item">
      <div class="show">
        <img src="http://pics.sc.chinaz.com/Files/pic/icons128/6850/o2.png">
        <h2>组件</h2>
      </div>
    </div>
    <div class="base-item">
      <div class="show" @click="toPage('/album')">
        <img src="http://pics.sc.chinaz.com/Files/pic/icons128/6850/o12.png">
        <h2>相册</h2>
      </div>
    </div>
    <div class="base-item">
      <div class="show" @click="toPage('/favorites')">
        <img src="http://pics.sc.chinaz.com/Files/pic/icons128/6850/o13.png">
        <h2>收藏</h2>
      </div>
    </div>
    <div class="base-item">
      <div class="show">
        <img src="http://pics.sc.chinaz.com/Files/pic/icons128/6850/o15.png">
        <h2>プライバシー</h2>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Base",
      methods:{
        toPage(path){
          this.$router.push(path);
        }
      }
    }
</script>

<style scoped lang="stylus">
  .wrap
    display flex
    justify-content space-around
    .base-item
      width 15%
      margin 260px 0 260px 0
      cursor pointer
      .show
        text-align center
        background-color: #fff;
        color $fontColor2
        &:hover
          img
            width 100px
            height 100px
        img
          transition: all .5s ease;
          width 88px
          height 88px
        h2
          font-weight 200
          margin 0
</style>
