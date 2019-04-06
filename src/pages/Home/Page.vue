<template>
  <div class="page">
      <PageBlogList></PageBlogList>
  </div>
</template>

<script>

  import PageBlogList from "./PageBlogList";
  export default {
    name: 'Page',
    components: {
      PageBlogList
    },
    data () {
      return {
        carouselList: [
          {src: require('@/assets/image/B01/a1.png')},
          {src: require('@/assets/image/B01/a2.png')}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .page
    flex 1;
    padding 0 15px;
    .carousel
      width 100%;
      border-radius 8px;
      overflow hidden;
</style>
