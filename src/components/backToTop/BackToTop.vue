<template>
  <div class="">
    <div class="back-to-top" v-if="show" @click="backToTop">
      <i class="iconfont" style="font-size: 26px">&#xe624;</i>
      <div style="font-size: 10px">{{this.ratio}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'backToTop',
    data () {
      return {
        show: false,
        timer: '',
        speed: 10,
        ratio:0
      }
    },
    mounted () {
      window.addEventListener('scroll', () => {
        this.show = this.getScrollTop() > document.documentElement.clientHeight
      }),
      window.addEventListener('scroll', () => {
        this.ratio = this.getScrollRatio()
      })
    },
    methods: {
      getScrollTop () {
        return document.documentElement.scrollTop || document.body.scrollTop
      },
      getScrollRatio () {
        return Number(document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100).toFixed(0) + '%';
      },
      backToTop () {
        let currentScroll = this.getScrollTop();
        if (currentScroll > 0) {
          window.scrollTo(0, currentScroll - this.speed);
          // 加速
          this.speed += 5;
          this.timer = requestAnimationFrame(() => {
            this.backToTop()
          })
        } else {
          this.speed = 10;
          cancelAnimationFrame(this.timer)
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .back-to-top
    position: fixed;
    right: 3px;
    bottom: 3px;
    color: #000;
    font-size: 22px;
    text-align: center;
    line-height: 1.25;
    background: #fff;
    cursor: pointer;
    z-index: 2;
    transition: all 0.5s ease 0s;
    &:hover
      background: #F3F3F3;
</style>
