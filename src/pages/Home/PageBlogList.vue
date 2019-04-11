<template>
  <div>
    <Console></Console>
    <ul class="page-blog-list">
      <li class="blog-item" v-for="(item, index) in articleList.items" :key="index" @click="toDetail(item.aid)">
        <div class="article">
          <div class="content">
            <div class="tag">
              <span style="color: #999;">来自标签「{{tabDesc(item.tid)}}」</span>
            </div>
            <p class="title">{{item.title}}</p>
            <p class="body">{{item.content}}</p>
          </div>
          <div class="img" :style="`background-image: url(${require('@/assets/image/B01/b1.png')})`">
          </div>
        </div>
        <div class="info">
            <span class="bottom">
              <span class="praise">
                <span class="wrap"><i class="iconfont">&#xe693;</i></span>
                <span v-if="item.starCount > 0">
                  <span class="unit">x</span>
                  <span class="praisenums">{{item.starCount}}</span>
                </span>
                <span class="dot">·</span>
                <span class="votes-word">赞</span>
              </span>

              <span class="author">{{item.author}}</span>
              <span class="dot" style="padding: 0 5px">·</span>
              <span class="release-time">{{item.createdTime | formatDate}}</span>
          </span>
        </div>
      </li>
    </ul>
    <div class="paging" v-if="articleList.total > 10">
      <el-pagination
        @current-change="currentChange"
        :page-size="10"
        layout="prev, pager, next"
        :total="articleList.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import Console from "../../components/console/Console";
  import {mapActions, mapState} from "vuex";
  import {LATELY} from "../../api/contants.js";
  import {formatDate} from "@/filters"

  export default {
    name: "PageBlogList",
    components: {Console},
    data() {
      return {
        currentPage: 1, //当前页
        size: 10,    //每页的数据
      }
    },
    created() {
      this.initData();
    },
    computed: {
      ...mapState({
        articleList: ({articleList}) => articleList,
        tab: ({tab}) => tab
      }),
      tabDesc() {
        return function (tabId) {
          return this.$store.state.tab.tabs.filter(e=>e.tid == tabId)[0].description;
        }
      }
    },
    mounted() {
    },
    methods: {
      ...mapActions([
        'reqArticles',
      ]),
      initData() {
        this.reqArticles({tId: LATELY, currentPage: this.currentPage, size: this.size});
      },
      toDetail(aid) {
        this.$router.push({
          path: `/detail/${aid}`,
        })
      },
      currentChange(currentPage) {
        //TODO 分页
      }
    }
  }
</script>

<style scoped lang="stylus">
  .page-blog-list
    font-size $fontSize3;
    padding-left 0px

    li
      list-style none
      transition all .2s linear;

      &:hover
        border-radius 5px;
        background: #f8f8f7

    .blog-item
      margin 20px 0;

      .article
        cursor pointer;
        display flex;

        .content
          margin 5px;
          margin-bottom 0px;

          .tag
            margin-bottom 5px;

          .title
            margin-bottom 10px;
            margin-top 0px
            font-size $fontSize2;
            color $fontColor2;

          .body
            width 573px;
            height 36px;
            color #888;
            line-height 1.5;
            display -webkit-box;
            overflow hidden;
            -webkit-line-clamp 2;
            -webkit-box-orient vertical;

        .img
          margin-top 39px;
          margin-left 15px;
          margin-right 5px;
          width 100px;
          height 75px;
          border-radius 4px;
          background-size cover;
          background-position center;

      .info
        display flex;
        align-items center;

        .bottom
          margin 5px;
          margin-top 0px;

        .praise
          cursor pointer;

          .wrap
            display inline-block;
            width 24px;
            height 24px;
            border-radius 50%;
            background rgba(218, 133, 133, .2);
            text-align center;
            line-height 24px;

            .iconfont
              font-size: 14px;
              font-weight: bold;
              color: $theme;

          &:hover
            .iconfont
              color #ffffff
              transform all;
              transition .3s;

            .wrap
              transition: .3s;
              background: $theme;

            .votes-word
              color: $theme;

        .author
          margin-left: 20px;
          cursor: pointer;
          color: #666;

          &:hover
            transform all;
            transition .3s;

            .wrap
              transition: .3s;
              background: $theme;

            .votes-word
              color: $theme;
              text-decoration: underline;

        .votes-word,
        .release-time
          color: #999;

        .unit
          padding: 0 5px;

        .unit,
        .praisenums
          font-weight: 400;
          color: $theme;

  .paging
    display flex;
    justify-content center;

  .iconfont
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

</style>
