<template>
  <div class="sidebar">
    <el-card class="profile-intro">
      <div align="center"><img class="avatar_pic" src="@/assets/image/img123.png"></div>
      <h2 style="text-align: center">哟</h2>
      <p>这雨量，不及我眼里一份！常即日暮他们都没有说清楚JS的基本类型有哪些。而且往往错误的说了一些C语言的数据类型</p>
      <div class="link">
        <div class="item">
          <img class="icon" src="@/assets/github.png">
          <a target="_blank" rel="noreferrer noopener" href="https://github.com/gershonv">
            github
          </a>
        </div>
        <div class="item">
          <img class="icon" src="@/assets/神经.png">
          <a target="_blank" rel="noreferrer noopener" href="https://juejin.im/user/5acac6c4f265da2378408f92">
            juejin
          </a>
        </div>
      </div>
    </el-card>
    <div class="technology-class">
      <p class="title">技术频道</p>
      <ul class="list">
        <li
          v-for="(item, index) in technologyClass"
          :key="index"
          :class="item.id === activeItem ? 'item active-item' : 'item'">
          <div class="category" @click="handleClick('click', item)">
            <span class="icon-box"><img :src="item.icon" class="icon"></span>
            <span class="name">{{item.name}}</span>
          </div>
          <ul v-show="item.showContent" class="tab-box">
            <li
              v-for="(item1, index1) in item.children"
              :key="index1"
              @click="changeArticleList(item1.tid)"
              :class="item1.tid === activeTab ? 'tab-active' : 'tab'">
              <a>{{item1.description}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapActions} from "vuex";
  import {getAllTab} from "../../api";

  export default {
    name: "Sidebar",
    data() {
      return {
        activeItem: null,
        activeTab: null,
        currentPage:1, //当前页
        size:10,    //每页的数据
        technologyClass: [
          {id: 1, name: '前端', icon: require('@/assets/image/B01/7.png'),  showContent: false},
          {id: 2, name: '后端', icon: require('@/assets/image/B01/4.png'),  showContent: false},
          {id: 3, name: '工具', icon: require('@/assets/image/B01/9.png'),  showContent: false},
          {id: 4, name: '程序员', icon: require('@/assets/image/B01/8.png'),  showContent: false},
          {id: 5, name: 'Yoo说说', icon: require('@/assets/image/sunny.png'),  showContent: false}
        ]
      }
    },
    created() {
      this.initData();
    },
    methods: {
      ...mapActions([
        'reqArticles'
      ]),
      initData() {
        //不用vuex，直接调用接口
        getAllTab().then((res)=>{
          window.localStorage.setItem('tabs', JSON.stringify(res.data));
          this.technologyClass.forEach(v=>{
            v.children = res.data.filter(e=>e.catId == v.id);
          });
        });

      },
      //处理点击
      handleClick(op, item) {
        this.activeItem = item.id;
        item.showContent = !item.showContent;
      },
      //改变文章列表
      changeArticleList(tId){
        this.activeTab = tId;
        this.reqArticles({tId: tId, currentPage: this.currentPage, size: this.size});
      }
    }
  }
</script>

<style scoped lang="stylus">
  .sidebar
    padding 0 15px;
    width 230px;
    .profile-intro
      background-color #fafafe
      display flex;
      justify-content: center;
      align-items: center
      margin-top 8px;
      .avatar_pic
        width 100px;
        height 100px;
        border-radius 50%;
      .link
        display flex;
        justify-content: space-around;
        .item
          padding 3px;
          .icon
            width 16px;
            height 16px;
            padding-right 5px
          li
            list-style none
          a
            text-decoration none;
            color #666666
    .technology-class
      .title
        position relative;
        margin 10px 0;
        padding-left 10px;
        text-align left;
      .list
        padding-left 0px;
        .item
          display flex
          flex-direction column
          .category
            .icon-box
              display inline-block;
              width 35px;
              text-align center;
              .icon
                height 16px;
                widows 16px;
            .name
              cursor pointer
              flex 1;
              text-align left;
              vertical-align center
          .tab-box
            list-style disc
            font-size 13px
            .tab
              padding-top 5px
              cursor pointer
              &:hover
                color $theme
            .tab-active
              padding-top 5px
              cursor pointer
              color $theme

    .item
      display flex;
      padding 10px 0;
      border-radius 4px;


    .active-item
      display flex;
      padding 10px 0;
      border-radius 4px;


</style>
