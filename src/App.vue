<!--
 * @Descripttion: 
 * @version: 39
 * @Author: sikuai
 * @Date: 2023-03-16 00:12:13
 * @LastEditors: sikuai
 * @LastEditTime: 2023-03-16 00:18:58
-->
<template>
  <div id="app">
    <!-- 下面是路由出口，配置了才能使用router -->
    <!-- <Home/> -->
  <router-view></router-view>
  </div>
</template>

<script>
// import Home from "@/components/Home.vue"

export default {
  components: {
    // Home,
  }
}
</script>

<style>
/* 在这引入reset.css */
@import url('./assets/css/reset.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
