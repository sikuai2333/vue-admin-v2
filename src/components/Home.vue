<!--
 * @Descripttion: 
 * @version: 39
 * @Author: sikuai
 * @Date: 2023-03-16 00:12:13
 * @LastEditors: sikuai
 * @LastEditTime: 2023-03-17 13:12:27
-->
<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>
        <el-main>
            <Bread />
          <div class="cont">
          <router-view></router-view>
          </div>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './common/Header.vue';
import Footer from './common/Footer.vue';
import Menu from './common/Menu.vue';
// 导入面包屑
import Bread from './common/Breadcrumb.vue'

export default {
  components: {
    Header,
    Footer,
    Menu,
    Bread,
  },
  data() {
    return {};
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  .content{
    position: absolute;
    width: 100%;
    top:60px;
    bottom: 0;
    .cont{
      margin: 20px 0;
    }
  }
}
</style>
