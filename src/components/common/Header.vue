<!--
 * @Descripttion: 
 * @version: 39
 * @Author: sikuai
 * @Date: 2023-03-17 12:43:39
 * @LastEditors: sikuai
 * @LastEditTime: 2023-03-17 18:20:30
-->
<template>
  <div class="header">
    <el-header class="el-header">
      <div class="title">通用管理系统</div>
      <!-- 取用户名 -->
      <div>{{ name }}</div>
    </el-header>
  </div>
</template>

<script>
// 引入getToken
import { getToken } from '@/utils/setToken.js'
export default {
  data() {
    return {
      name: ''
    }
  },
  created() {
    // 从getToken取username
    this.name = getToken('username')
  }
}
</script>

<style scoped lang="scss">
.header {
  .el-header {
    color: #fff;
    background-color: gray;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .title {
      width: 200px;
      font-size: 24px;
    }
  }
}
</style>