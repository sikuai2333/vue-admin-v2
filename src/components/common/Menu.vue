<!--
 * @Descripttion: 
 * @version: 39
 * @Author: sikuai
 * @Date: 2023-03-17 12:44:23
 * @LastEditors: sikuai
 * @LastEditTime: 2023-03-19 13:52:35
-->
<template>
  <div class="menu">
    <el-aside width="200px">
      <!-- el-menu 要开启router，否则点击不跳转。此处跳转但是内容不变要在Home.vue中添加路由出口"router-view" -->
      <el-menu 
      router 
      
      default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <template v-for="(item,index) in menus">
          <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-for="(child,index) in item.children" :key="index">
              <el-menu-item :index="child.path">
                <i :class="child.iconClass"></i>
                {{child.name}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>

      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
    }
  },
  created() {
    console.log(this.$router.options.routes)
    this.menus = [...this.$router.options.routes]
  }
}
</script>

<style scoped lang="scss">
.menu {
  //   width: 200px;
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
      .fa {
        margin-right: 8px;
      }
    }
    .el-submenu .el-menu-item {
      min-width: 0;
      margin-left: 30px;
    }
  }
}
</style>