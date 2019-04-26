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
        prop="content"
        label="内容"
        :formatter="formatter">
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
            @click="open(scope.$index, scope.row)">打开</el-button>
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
    import {getFavorites} from "../../api";

    export default {
      name: "Favorites",
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
          getFavorites({currentPage: this.currentPage}).then(res => {
            console.log(res);
            //总页数
            this.total = res.data.total;

            const favoritesList = res.data.records;
            favoritesList.forEach( favorites => {
              let item = {};
              //表格显示的数据
              item.date =  favorites.createdTime.year + '-' +  favorites.createdTime.monthValue + '-' +  favorites.createdTime.dayOfMonth;
              item.content = favorites.content;
              item.link = favorites.link;
              item.tag = favorites.tag;
              this.tableData.unshift(item);
            })
          })
        },
        currentChange(currentPage) {
          //TODO 分页
        },
        open(index, row) {
          window.open(row.link, '_blank');
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
