<!--
 * @Descripttion: 
 * @version: 39
 * @Author: sikuai
 * @Date: 2023-03-17 12:44:23
 * @LastEditors: sikuai
 * @LastEditTime: 2023-03-17 18:32:06
-->
<template>
  <div class="menu">
    <el-aside width="200px">
      <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.menu {
//   width: 200px;
.el-aside{
    height: 100%;
    .el-menu{
        height: 100%;
    }
    .el-submenu .el-menu-item{
        min-width: 0;
    }
}
}
</style>