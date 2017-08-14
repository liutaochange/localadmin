<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <el-input v-model="listQuery.user_name" auto-complete="off" placeholder="用户名" style="width: 200px;margin-right: 20px;"></el-input>
          <el-select v-model="listQuery.user_status" placeholder="用户状态" clearable style="width: 120px;margin-right: 20px;">
            <el-option label="无效" value="1"></el-option>
            <el-option label="有效" value="0"></el-option>
          </el-select>
          <el-button class="filter-item" type="primary" @click="getList" v-waves>查询</el-button>
        </div>
      </el-col>
    </el-row>

   <el-row>
      <el-col :span="24">
        <div class="grid-conten">
          <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="序号" width="80">
              <template scope="scope">
                <span>{{scope.row.id}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="用户名">
              <template scope="scope">
                <span>{{scope.row.user_name }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="昵称">
              <template scope="scope">
                <span>{{scope.row.user_nickname}}</span>
              </template>
            </el-table-column>

            <el-table-column class-name="status-col" label="用户角色" align="center">
              <template scope="scope">
                <span>{{scope.row.role_name}}</span>
              </template>
            </el-table-column>

            <el-table-column class-name="status-col" label="用户状态" align="center">
              <template scope="scope">
                <el-tag :type="type[scope.row.user_status]">{{statusMap[scope.row.user_status]}}</el-tag>
              </template>
            </el-table-column>

            <el-table-column align="center" label="操作" width="240">
              <template scope="scope">
                <el-button v-show='!scope.row.edit' type="primary" @click='scope.row.edit=true' size="small" icon="edit">编辑</el-button>
                <el-button v-show='!scope.row.edit' type="success" @click='scope.row.edit=false' size="small" icon="check">完成</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </el-col>
    </el-row>
    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page_no"
                     :page-sizes="[1,3,5,7]" :page-size="listQuery.page_size" layout="total, sizes, prev, pager, next, jumper" :total="total" :page-count="total_page">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import { userlist } from '@/api/userinfo';
  export default {
    name: 'userinfo',
    data() {
      return {
        statusMap : ["有效","无效"],
        type: ['success','gray'],
        list: null, //列表数据
        total_page: null, //总页数
        total: null,  //总数据条数
        listLoading: true,
        listQuery: {
          user_name: "",
          user_status: "",
          page_no: 1,
          page_size: 3
        }
      }
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        this.listLoading = true;
        userlist(this.listQuery).then(response => {
          this.list = response.data.array;
          this.total = response.data.total_count;
          this.total_page = response.data.total_page;
          this.listLoading = false
        })
      },
      handleSizeChange(val) {
        this.listQuery.page_size = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.page_no = val;
        this.getList();
      }
    }
  }
</script>
<style scoped>
  .app-container{
    width:auto;
  }
  .grid-content {
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .pagination-container {
    margin: 20px 0;
  }
</style>
