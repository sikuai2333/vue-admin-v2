<template>
  <div class="hello">
    <h1>Hello</h1>
    <el-button>hello</el-button>
    <el-button type="primary">hello</el-button>
    <el-button type="primary">hello</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  background-color: yellow;
  .el-button{
    color: red;
  }
}
</style>
