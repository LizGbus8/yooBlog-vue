<template>
  <div class="mood">
    <section class="timeline" v-loading="this.$store.state.talk.loading">
      <h1>你今天有穿品如的衣服吗.</h1>
      <p class="leader">All cards must be the same height and width for space calculations on large screens.</p>
      <div class="card-wrap" v-if="talk.talks">
        <div class="card" v-for="(item) in talk.talks">
          <div class="head" :style="{backgroundColor:randomColor}">
            <div class="number-box">
              <span>{{item.floor}}</span>
            </div>
            <h2><span class="small">{{item.quoteTitle}}</span>{{item.quoteContent}}</h2>
          </div>
          <div class="body">
            <!--回复区域 begin-->
            <div class="comment-show">
              <div class="avatar_pic"><img :src="item.fromAvatar"></div>
              <div class="rep">
                <div class="item">
                  <div class="info">
                    <span class="content"><a href="#" class="name">{{item.fromName}} ： </a><div v-html="item.content"></div>
                    </span>
                  </div>
                  <div class="bottom">
                    <span class="date">{{item.createdTime | formatDate}}<i class="iconfont" style="padding-left: 5px">&#xe768;</i>{{item.address}}</span>
                    <span class="op" @click.stop="reply2Comment(item.cid, item.fromName)"><a class="reply-btn"><i class="iconfont" style="font-size: 12px">&#xe644;</i></a></span>
                  </div>
                </div>
                <div class="re-list">
                  <div class="re-item">
                    <div class="item" v-for="(item_reply) in item.replies">
                      <div class="info">
                        <a href="#" class="name">{{item_reply.fromName}}  </a>回复 <a href="#" class="name">{{item_reply.toName}} ： </a>
                        <span class="content" v-html="item_reply.content"></span>
                      </div>
                      <div class="bottom">
                        <span class="date">{{item_reply.createdTime | formatDate}}<i class="iconfont" style="padding-left: 5px">&#xe768;</i>{{item.address}}</span>
                        <span class="op" @click="reply2Reply(item_reply.rid,item_reply.fromName)"><a class="reply-btn"><i class="iconfont" style="font-size: 12px">&#xe644;</i></a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--回复区域 end-->
          </div>
        </div>
      </div>
      <div class="paging">
        <button class="btn-more" @click="more" v-show="this.hasMore">加载更多...</button>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapActions, mapState} from "vuex";

  export default {
    name: "Home",
    data() {
      return {
        hasMore: true,
        colors: ['#86b0ed','#7ed321','#e3af83','#e38395','#e383ca','#579dff']
      }
    },
    components: {},
    created(){
      this.initData();
    },
    computed:{
      ...mapState({
        talk: ({talk}) => talk
      }),
      randomColor(){
        return this.colors[Math.floor(Math.random() * this.colors.length + 1)-1];
      }
    },
    methods: {
      ...mapActions([
        'reqTalks',
        'updateTalks'
      ]),
      initData() {
        //current为0,说明没有初始化数据
        if (this.$store.state.talk.current === 0) {
          this.reqTalks((res) => {
            if (res.data === null || res.data.length < 10) {
              this.hasMore = false;
            }
          });
        }
      },
      more() {
        this.hasMore = false;//防止重复点击
        this.reqTalks((res) => {
          this.hasMore = true;//防止重复点击
          if (res.data === null || res.data.length < 10) {
            this.hasMore = false;
          }
        });
      },
      showReply(params) {
        //重复点击
        if (params.name == this.$store.state.component.name) {
          this.$store.dispatch("setComponent", {})
        } else {
          this.$store.dispatch("setComponent", params)
        }
      },
      reply2Comment(cid, name) {
        //1.组合参数
        let params = {
          name: 'reply',//Layout显示的组件
          action: 'reqReply2Comment',//添加留言API
          placeholder: '@'+ name,//文本框提示
          submitDesc: '回复',//提交按钮文字
          id: cid, //cid或者rid
          updateAction: this.updateTalks
        };
        //2.弹出回复框
        this.showReply(params);
      },
      reply2Reply(rid,name) {
        //1.组合参数
        let params = {
          name: 'reply',//Layout显示的组件
          action: 'reqReply2Reply',//添加留言API
          placeholder: '@'+ name,//文本框提示
          submitDesc: '回复',//提交按钮文字
          id: rid, //cid或者rid
          updateAction: this.updateTalks
        };
        //2.弹出回复框
        this.showReply(params);
      }
    },
    mounted() {
    }

  }
</script>


<style lang="stylus">
  .timeline .card-wrap::after {
    z-index: 1;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    border-left: 1px solid rgba(191, 191, 191, 0.4);
  }

  .timeline .card-wrap::after {
    border-left: 1px solid #bdbdbd;
  }
  .comment-show
    display flex;
    justify-content left
    flex-direction row
    line-height: 150%
    .avatar_pic
      width 55px;
      overflow: hidden;
      margin-top: 2px;
      img
        border-radius 50%
    .rep
      display flex;
      width 100%
      justify-content left
      flex-direction column
      margin-left 5px
      .item
        &:hover
          .reply-btn
            transition all .5s ease-in-out
            opacity 1;
        .info
          margin 5px;
          font-size: 13px;
          .name
            color: #339b53;
            text-decoration none;
          .content
            color: #333;
            width: 100%;
            img
              display: inline;
              height 20px
              width 20px
      .bottom
        display: inline-block;
        font-size: 13px;
        color: #8b8b8b;
        margin 5px;
        .date
          padding-right 20px
          font-size: 12px;
        .op
          cursor pointer
      .re-list
         .reply
          .input
            width 100%;
            overflow: hidden;
            margin 5px
            resize: none;
            line-height: 1.7;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 100%;
            padding: 10px 15px;
            border: 1px solid #c6c8ce;
            outline: none;
            background: #fff;
            border-radius: 3px;
            background-clip: padding-box;
            box-shadow: 0 0 8px rgba(182, 195, 214, .6) inset, 0 1px 1px #fff;
          .re-submit
            display: block;
            float: right;
            width: 70px;
            height: 30px;
            margin 0px 0px 5px 5px
            line-height: 30px;
            background-color: #339b53;
            text-align: center;
            color: #FFFFFF;
            text-decoration none
            font-size: 13px;
            border-radius: 5px;
        .re-item
          background-color #f8f8f7
          margin 5px
          .item
            display flex
            flex-direction column
            &:after
              content: '';
              display: block;
              right: 10%;
              height: 1px;
              width: 100%;
              background-color: white;
              margin: 0 auto;
            .info
              font-size: 13px;
              .name
                color: #339b53;
                text-decoration none;
              .content
                color: #333;
                width: 100%;
                img
                  display: inline;
                  height 20px
                  width 20px
          .bottom
            display: inline-block;
            font-size: 13px;
            color: #8b8b8b;
            margin 0px 5px 5px 5px;
            .date
              padding-right 20px
            .op
              cursor pointe
  .reply-btn
    opacity 0;
  .timeline
    padding: 100px 0;
    background: #f7f7f7;
    border-top: 1px solid rgba(191, 191, 191, 0.4);
    border-bottom: 1px solid rgba(191, 191, 191, 0.4);
    .paging
      display: flex;
      margin: 0 auto;
      justify-content center
      padding-top 10px;
      button
        width 150px;
        height 44px;
        background-color #f44539
        padding 0px
        border 1px solid #f44539
        color white
        border-radius 44px
        font-size 16px
        transition: all .36s ease-in-out;
        cursor pointer
        outline none

        &:hover
          width 160px
          background-color #f44539

        &:selection
          width 160px
          background-color #f44539
      .btn-more
        border-left-color: #ff9089;

  .timeline 
    h1
      text-align: center;
      font-size: 3rem;
      font-weight: 200;
      margin-bottom: 20px;
    .leader
      text-align: center;
      max-width: 90%;
      margin: auto;
      margin-bottom: 45px;
    .card-wrap
      position: relative;
      display: flex;
      flex-flow: column wrap;
      width: 1170px;
      margin: 0 auto;
      .card
        position: relative;
        display: block;
        margin: 0px auto 50px;
        z-index: 2;
        width: 800px;
        .head
          position: relative;
          display: flex;
          align-items: center;
          color: #fff;
          font-weight: 400;
          .number-box
            display: inline;
            float: left;
            margin: 15px;
            padding: 10px;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            background: rgba(0, 0, 0, 0.17);
          h2
            text-transform: uppercase;
            font-size: 1.3rem;
            font-weight: inherit;
            letter-spacing: 2px;
            margin: 0;
            padding-bottom: 6px;
            line-height: 1rem;
            overflow: hidden; /*溢出隐藏*/
            text-overflow: ellipsis; /*以省略号...显示*/
            white-space: nowrap; /*强制不换行*/
            width: 100%; /*必须设置宽度*/
            span
              display: block;
              font-size: 13px;
              margin-bottom: 5px;
          .small
            padding-bottom 5px
        .body
          background: #fff;
          border: 1px solid rgba(191, 191, 191, 0.4);
          border-top: 0;
          padding 15px 15px 8px 15px;
          p
            font-size: 14px;
            line-height: 18px;
            margin-bottom: 15px;
          img
            display: block;
            width: 100%;

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
