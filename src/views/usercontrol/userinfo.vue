<template>
  <div class="app-container">
    <el-form :inline="true" :model="form" label-width="80px" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="用户状态">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="无效" value="0"></el-option>
          <el-option label="有效" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'userinfo',
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
  .app-container{
    min-width: 500px !important;
  }
</style>
