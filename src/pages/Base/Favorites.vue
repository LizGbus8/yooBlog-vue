<template>
  <div class="wrap">
    <div class="screen">
      <div>
      <el-input v-model="input"
                placeholder="请输入关键字"
                size="small"
                style="width: 200px"></el-input>
        <el-button type="success"
                   icon="el-icon-search"
                   size="small">筛选</el-button>
      </div>
    </div>
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="收录时间"
        sortable
        width="180"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="内容"
        :formatter="formatter">
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
            @click="handleEdit(scope.$index, scope.row)">打开</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="paging">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Favorites",
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家'
          }, {
            date: '2016-05-04',
            address: 'Java Http工具类及使用文档',
            tag: 'Java工具类'
          }, {
            date: '2016-05-01',
            address: '上海市普陀区金沙江路 1519 弄',
            tag: '附件'
          }, {
            date: '2016-05-03',
            address: '上海市普陀区金沙江路 1516 弄',
            tag: '浏览器脚本'
          }],
          input: ''
        }
      },
      methods: {
        resetDateFilter() {
          this.$refs.filterTable.clearFilter('date');
        },
        clearFilter() {
          this.$refs.filterTable.clearFilter();
        },
        formatter(row, column) {
          return row.address;
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
    .screen
      display flex
      flex-direction column
      .tag
        margin 10px 0 10px 0
      el-input
        width 100px
    .paging
      display flex;
      justify-content center;
      margin-top 10px
</style>
