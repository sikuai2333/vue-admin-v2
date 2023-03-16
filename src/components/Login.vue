<!--
 * @Descripttion: 
 * @version: 39
 * @Author: sikuai
 * @Date: 2023-03-15 19:27:53
 * @LastEditors: sikuai
 * @LastEditTime: 2023-03-16 08:44:18
-->
<template>
    <div class="login">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>后台管理登录</span>
        </div>
        <el-form label-width="80px" :model="form" ref="form">
          <el-form-item label="用户名" prop="username" :rules="[
          {required:true,message:'请输入用户名',trigger:'blur'},
          {min:4,max:10,message:'长度在4-10位',trigger:'blur'},
          ]">
            <el-input type="text" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" :rules="[
          {required:true,message:'请输入用密码',trigger:'blur'},
          {min:6,max:20,message:'长度在6-20位',trigger:'blur'},
          ]">
            <el-input type="passwprd" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('form')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
    
  <script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      login(form) {
        this.$refs[form].validate((valid) => {
          if(valid){
            // 校验通过
            console.log(this.form)
          }else{
            // 校验不通过
            console.error(this.form)
          }
        })
  
      }
    }
  }
  </script>
    
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  .login {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: gray;
    .box-card {
      width: 500px;
      margin: 200px auto;
      .clearfix {
        font-size: 36px;
      }
      .el-button {
        width: 100%;
      }
    }
  }
  </style>
    