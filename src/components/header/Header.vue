<template>
  <div class="header">
    <div class="nav">
      <p class="logo">
        <span class="LLL">LLL</span>
        <span class="yh">yh</span>
      </p>
      <Navbar></Navbar>
      <Op></Op>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/header/Navbar';
  import Op from '@/components/header/Op';

  export default {
    name: "Header",
    components: {
      Navbar,
      Op,
    },

    methods: {
    }
  }
</script>

<style scoped lang="stylus">
  .header
    border-top 3px solid $theme
    box-shadow 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
    height 57px;

    .nav
      margin auto;
      padding 0 20px;
      display flex;
      justify-content center;
      align-items center;
      max-width 1280px;
      height 100%;
      font-size 16px;

      .logo
        padding-right 190px;
        font-size 0;
        cursor pointer;

        .LLL, .yh
          font-size 24px;

        .LLL
          color $fontColor2;

        .yh
          color $theme;
</style>
