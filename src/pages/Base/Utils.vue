<template>
  <div class="wrap">
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="发布时间"
        sortable
        width="130"
        column-key="date"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="发布者"
        width="120">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="120"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            disable-transitions>{{scope.row.tag}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="80">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="toDetail(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="paging" v-if="tableData.length > 10">
      <el-pagination
        @current-change="currentChange"
        :page-size="10"
        layout="prev, pager, next"
        :total="this.total">
      </el-pagination>
    </div>
  </div>
</template>
<script>

  import {getUtils} from "../../api";

  export default {
    name: "Utils",
    mounted(){
      this.initData();
    },
    data() {
      return {
        currentPage: 1, //当前页
        size: 10,    //每页的数据
        total: null,
        tableData: []
      }
    },
    computed:{

    },
    methods: {
      initData(){
        //请求后台
        getUtils({currentPage: this.currentPage}).then(res => {
          console.log(res);
          //总页数
          this.total = res.data.total;

          const utilsList = res.data.records;
          console.log(utilsList);
          utilsList.forEach(utils => {
            let item = {};
            //表格显示的数据
            item.date = utils.createdTime.year + '-' + utils.createdTime.monthValue + '-' + utils.createdTime.dayOfMonth;
            item.name = utils.author;
            item.title = utils.title;
            item.tag = utils.tag;
            //详情数据
            item.fileUrl = utils.fileUrl;
            item.content = utils.content;
            item.readCount = utils.readCount;
            item.relevance = utils.relevance;
            this.tableData.unshift(item);
          })
        })
      },
      currentChange(currentPage) {
        //TODO 分页
      },
      toDetail(index, row){
        this.$router.push({ name: 'Detail', params: { utils: row }})
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrap
    width 800px
    margin auto
    .paging
      display flex;
      justify-content center;
      margin-top 10px
</style>
