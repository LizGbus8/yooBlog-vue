<template>
  <div class="top">
    <div class="card">
      <div class="head">
        <i>&nbsp;</i><span class="title">热门阅读</span>
        <span class="more">更多</span>
      </div>
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="content">
          <p class="title">{{item.title}}</p>
          <div class="info">
            <span class="addr">浏览数 245</span>
            <span class="dot">·</span>
            <span class="date">2019-5-16</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="head">
        <i>&nbsp;</i><span class="title">最新回复</span>
        <span class="more">更多</span>
      </div>
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="content">
          <p class="title">{{item.title}}</p>
          <div class="info">
            <span class="addr">北方暴雪：</span>
            <span class="date">这雨量，不及我眼里一分！</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name:'ArticleTop',
    data () {
      return {
        list: []
      }
    },
    mounted () {
      this.getList()
    },
    methods: {
      getList () {
        let obj = [
          {
            date: '2019-01-19',
            title: 'TiDB DevCon 2019：年度最高规格的TiDB技术大会',
            addr: '北京',
            status: ''
          },
          {
            date: '2019-01-18',
            title: '大数据技术专场：玩转轻资产的大数据服务',
            addr: '北京',
            status: '报名中'
          },
          {
            date: '2019-01-19',
            title: '阿里云沙龙|云原生数据库POLARDB核心技术分享',
            addr: '北京',
            status: '报名中'
          },
          {
            date: '2019-01-19',
            title: '阿里云栖开发者沙龙合肥专场：高并发企业级应用架构实践',
            addr: '合肥',
            status: '报名中'
          },
          {
            date: '2019-01-20',
            title: '人工智能开发者线下实战训练营北京站 第二期',
            addr: '北京',
            status: '报名中'
          }
        ]
        this.list = obj;
      },
    }
  }
</script>

<style scoped lang="stylus">
  .top
    .card
      margin-bottom 20px
      .head
        display flex;
        cursor default;
        i
          background-color $theme;
          width 3px;
          margin-right 5px
        .title
          flex 1;
        .more
          cursor pointer;
          color $theme;
      .item
        padding 8px 0;
        display flex;
        border-bottom 1px dashed #eee;
        &:last-child
          border-bottom none;
        .content
          color: $fontColor4;
          font-size $fontSize4;
          cursor pointer;
          .title
            color $topTextColor;
            font-weight 500;
            font-size $fontSize1;
            margin-bottom 2px;
            line-height 1.5;
</style>
