<template>
  <div class="op">
    <div class="console">
      <a class="bt-console" @click="onClick">Cool Stuff</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "User",
    methods: {
      onClick() {

      }
    }
  }
</script>

<style scoped lang="stylus">
  .op
    .console
      font-size 13px;

      .bt-console
        display inline-block;
        padding 0 12px;
        cursor pointer;
        height 34px;
        line-height 34px;
        font-weight 500;
        border-radius 5px;
        color $theme;
        border 1.2px dashed $theme
        transition all .2s linear;

        &:hover
          background: $theme;
          color white;
</style>
