<template>
  <div class="main">
    <Header></Header>
    <PageWrap></PageWrap>
    <Menu></Menu>
    <!--<Reply></Reply>-->

  </div>
</template>

<script>
  import Header from '@/components/header/Header';
  import PageWrap from '@/components/pagewrap/PageWrap';
  import Reply from '@/components/reply/reply';
  import Menu from '@/components/menu/Menu';
  export default {
    name: "Home",
    components:{
      Header,
      PageWrap,
      Reply,
      Menu
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus">
  .main
    min-width 1280px;
    height 100%;
</style>
