<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <el-form :inline="true" :model="form" :ref="form" label-width="80px" class="demo-form-inline">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户状态" prop="state">
              <el-select v-model="form.state" placeholder="请选择">
                <el-option label="无效" value="0"></el-option>
                <el-option label="有效" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('form')">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

   <!-- <el-row>
      <el-col :span="24">
        <div class="grid-conten">
          <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="序号" width="80">
              <template scope="scope">
                <span>{{scope.row.id}}</span>
              </template>
            </el-table-column>

            <el-table-column width="180px" align="center" label="用户名">
              <template scope="scope">
                <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
              </template>
            </el-table-column>

            <el-table-column width="120px" align="center" label="昵称">
              <template scope="scope">
                <span>{{scope.row.author}}</span>
              </template>
            </el-table-column>

            <el-table-column width="100px" label="公司名" align="center">
              <template scope="scope">
                <icon-svg v-for="n in +scope.row.importance" icon-class="wujiaoxing" class="meta-item__icon" :key="n"></icon-svg>
              </template>
            </el-table-column>

            <el-table-column class-name="status-col" label="用户角色" width="100" align="center">
              <template scope="scope">
                <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
              </template>
            </el-table-column>

            <el-table-column class-name="status-col" label="用户状态" width="100" align="center">
              <template scope="scope">
                <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
              </template>
            </el-table-column>

            <el-table-column class-name="status-col" label="登录类型" width="100" align="center">
              <template scope="scope">
                <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
              </template>
            </el-table-column>

            <el-table-column width="100px" label="创建时间" class-name="status-col" align="center">
              <template scope="scope">
                <el-input v-show="scope.row.edit" size="small" v-model="scope.row.title"></el-input>
                <span v-show="!scope.row.edit">{{ scope.row.title }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="操作" width="120">
              <template scope="scope">
                <el-button v-show='!scope.row.edit' type="primary" @click='scope.row.edit=true' size="small" icon="edit">编辑</el-button>
                <el-button v-show='scope.row.edit' type="success" @click='scope.row.edit=false' size="small" icon="check">完成</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </el-col>
    </el-row>
    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
                     :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form class="small-space" :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="类型">
          <el-select class="filter-item" v-model="temp.type" placeholder="请选择">
            <el-option v-for="item in  calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态">
          <el-select class="filter-item" v-model="temp.status" placeholder="请选择">
            <el-option v-for="item in  statusOptions" :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="标题">
          <el-input v-model="temp.title"></el-input>
        </el-form-item>

        <el-form-item label="重要性">
          <el-rate style="margin-top:8px;" v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
        </el-form-item>

        <el-form-item label="点评">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="temp.remark">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="create">确 定</el-button>
        <el-button v-else type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>-->
  </div>
</template>
<script>
 /* import { getLists } from 'api/userinfo';*/
  export default {
    name: 'userinfo',
    data() {
      return {
        form: {
          name: '',
          state: ''
        }
      }
    },
    methods: {
      onSubmit(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      }
      /*,
      getList() {
        this.listLoading = true;
        getLists('').then(response => {
          console.log(response.data);
          /!*this.list = response.data.items;
          this.total = response.data.total;
          this.listLoading = false;*!/
        })
      }*/
     /* handleFilter() {
        this.getList();
      },
      handleSizeChange(val) {
        this.listQuery.limit = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.getList();
      },
      timeFilter(time) {
        if (!time[0]) {
          this.listQuery.start = undefined;
          this.listQuery.end = undefined;
          return;
        }
        this.listQuery.start = parseInt(+time[0] / 1000);
        this.listQuery.end = parseInt((+time[1] + 3600 * 1000 * 24) / 1000);
      },
      handleModifyStatus(row, status) {
        this.$message({
          message: '操作成功',
          type: 'success'
        });
        row.status = status;
      },
      handleCreate() {
        this.resetTemp();
        this.dialogStatus = 'create';
        this.dialogFormVisible = true;
      },
      handleUpdate(row) {
        this.temp = Object.assign({}, row);
        this.dialogStatus = 'update';
        this.dialogFormVisible = true;
      },
      handleDelete(row) {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000
        });
        const index = this.list.indexOf(row);
        this.list.splice(index, 1);
      },
      create() {
        this.temp.id = parseInt(Math.random() * 100) + 1024;
        this.temp.timestamp = +new Date();
        this.temp.author = '原创作者';
        this.list.unshift(this.temp);
        this.dialogFormVisible = false;
        this.$notify({
          title: '成功',
          message: '创建成功',
          type: 'success',
          duration: 2000
        });
      },
      update() {
        this.temp.timestamp = +this.temp.timestamp;
        for (const v of this.list) {
          if (v.id === this.temp.id) {
            const index = this.list.indexOf(v);
            this.list.splice(index, 1, this.temp);
            break;
          }
        }
        this.dialogFormVisible = false;
        this.$notify({
          title: '成功',
          message: '更新成功',
          type: 'success',
          duration: 2000
        });
      },
      resetTemp() {
        this.temp = {
          id: undefined,
          importance: 0,
          remark: '',
          timestamp: 0,
          title: '',
          status: 'published',
          type: ''
        };
      }*/
    }
  }
</script>
<style scoped>
  .app-container{
    min-width: 1200px !important;
  }
  .grid-content {
    border-radius: 4px;
  }
</style>
