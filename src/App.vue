<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/header/Header'
  import Sidebar from './components/sidebar/Sidebar'
export default {
  name: 'App',
  components:{
    Header,
    Sidebar
  }
}
</script>

<style scoped lang="stylus">
#app
  background-color $bgColor;
  height 100%;
  font-family 'Avenir', Helvetica, Arial, sans-serif;
  font-size $fontSize1;
  color $fontColor1;
  -webkit-font-smoothing antialiased;
  -moz-osx-font-smoothing grayscale;
</style>
