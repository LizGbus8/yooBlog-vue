<template>
  <div class="record">
    <article v-for="(year) in years">
      <h3>{{year}}</h3>
      <section v-for="(record) in annual_record[year]">
        <span class="point-time point-yellow"></span>
        <time :datetime="datetime">
          <span>{{record.createdTime.month}} {{record.createdTime.dayOfMonth}}</span>
          <span>{{year}}</span>
        </time>
        <aside>
          <p class="things">{{record.content}}</p>
          <p class="brief"><a class="text-yellow" :href="record.reference"><i class="iconfont" style="font-size: 12px;padding-right: 5px">&#xe617;</i>{{record.referenceDesc}}</a>
            ({{record.author}})</p>
        </aside>
      </section>
    </article>
  </div>
</template>

<script>
  import {getRecords} from "../../api";

  export default {
    name: "Record",
    data(){
      return {
        annual_record: {},
        years:[]
      }
    },
    computed:{
      datetime(){
        return "2019-2";
      }
    },
    created(){
      this.initData();
    },
    methods:{
      initData(){
        //1.请求api
        getRecords().then((res)=>{
          //2.处理请求结果
          if (res.code === 0) {
            let records = res.data.records;
            const years = records.map((record) => {
              return record.createdTime.year;
            });
            this.years = new Set(years);
            this.years.forEach(year => {
              this.annual_record[year] = records.filter(record => record.createdTime.year === year);
            })
            console.log(this.years);
          }
        })

        console.log(this.annual_record);
      }
    }
  }
</script>

<style scoped lang="stylus">
  *
    margin 0
    padding 0
  article,section,time,aside
    display block
  .point-time
    content ""
    position absolute
    width 13px
    height 13px
    top 17px
    left 20%
    background #1c87bf
    margin-left -4px
    border-radius 50%
    box-shadow 0 0 0 5px #fff
  .text-red
    color #f6393f
  .text-blue
    color #1c87bf
  .text-green
    color #95c91e
  .text-yellow
    color #ffb902
  .text-purple
    color #d32d93
  .point-red
    background-color #f6393f
  .point-blue
    background-color #1c87bf
  .point-green
    background-color #95c91e
  .point-yellow
    background-color #ffb902
  .point-purple
    background-color #d32d93
  .record
    width 970px
    margin 30px auto
    color #9f9f9f
    background #fff
    font-size 1.16em
    font-family 'Lato', Calibri, Arial, sans-serif
    article
      position relative
      & > h3
        width 15%
        height 20px
        line-height 20px
        text-align right
        font-size 1.4em
        color #1d1d1d
        padding 10px 0 20px
      section
        padding 0 0 17px
        position relative
        &:before
          content ""
          width 5px
          top 17px
          bottom -17px
          left 20%
          background #e6e6e6
          position absolute
        &:last-child
          &:before
            display none
        time
          width 15%
          display block
          position absolute
          & > span
            display block
            text-align right
        aside
          color #3a3a38
          margin-left 25%
          padding-bottom 15px
        .brief
          margin-top 5px
          font-size 12px
          color #9f9f9f
          a
            text-decoration none


</style>
