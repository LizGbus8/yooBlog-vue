<template>
  <div class="main">
    <Header></Header>
    <PageWrap></PageWrap>
    <Menu></Menu>
    <component :is="component"></component>
  </div>
</template>

<script>
  import Header from '@/components/header/Header';
  import PageWrap from '@/components/pagewrap/PageWrap';
  import Reply from '@/components/reply/Reply';
  import Menu from '@/components/menu/Menu';
  import Console from '@/components/console/Console';
  export default {
    name: "Home",
    components:{
      Header,
      PageWrap,
      Reply,
      Menu,
      Console
    },
    computed:{
      component(){
        console.log(this.$store)
        const name = this.$store.state.component.name;
        return this.obj[name];
      }
    },
    data () {
      return {
        index: 1,
        obj :{
          'reply': Reply
        }
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
