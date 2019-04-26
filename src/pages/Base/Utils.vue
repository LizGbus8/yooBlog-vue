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
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
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
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="80">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="paging" v-if="tableData.length > 10">
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
        tableData: []
      }
    },
    computed:{

    },
    methods: {
      initData(){
        getUtils({currentPage: this.currentPage}).then(res => {
          console.log(res);
          const utilsList = res.data.records;
          console.log(utilsList);
          utilsList.forEach(utils => {
            let item = {};
            item.date = utils.createdTime.year + '-' + utils.createdTime.monthValue + '-' + utils.createdTime.dayOfMonth;
            item.name = utils.author;
            item.title = utils.title;
            item.tag = utils.tag;
            this.tableData.unshift(item);
          })
        })
      },
      currentChange(currentPage) {
        //TODO 分页
      },
      handleEdit(index, row){
        console.log('index:' + index);
        console.log('row:' + JSON.stringify(row));
      },
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
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
