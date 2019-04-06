<template>
  <nav class="menu">
    <template v-for="item in list">
      <!-- 一级菜单循环 -->
      <router-link :to="item.path" :key="item.path">
          <span class="menu-name">{{item.meta}}</span>
      </router-link>
    </template>
  </nav>
</template>
<script>
    export default {
      name: "Navbar",
      data(){
        return {
          list: [
            {
              meta: '首页',
              path: '/home'
            },
            {
              meta: '归档',
              path: '/record'
            },
            {
              meta: '搜啥',
              path: '/'
            },
            {
              meta: '实验基地',
              path: '/a'
            },
            {
              meta: '留言',
              path: '/talk'
            }
          ]
        }
      }
    }
</script>

<style scoped lang="stylus">
  a
    text-decoration none;
    color: #999;
    span
      &:hover
        color $theme;
        text-decoration none;
        Times serif;
        border-bottom 2px solid $theme
  .router-link-exact-active
    color $theme;
    font-weight bold!important;
    text-decoration none;
    Times serif;
    span
      border-bottom 2px solid $theme
  .menu
    flex 1;
    .menu-name
      height 100%
      padding 17px 20px;
      cursor pointer;
      text-align right
    .el-icon-caret-bottom
      transform rotate(0deg);
      transition transform .3s;
    .icon-rorate-v
      transform rotate(180deg);
      .submenu
        position relative;
        .submenu-list
          position absolute;
          top 100%;
          min-width 160px;
          background rgb(247, 247, 247);
          .submenu-item
            width 100%;
            height 40px;
</style>
