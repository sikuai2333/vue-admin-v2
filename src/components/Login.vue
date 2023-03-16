<!--
 * @Descripttion: 
 * @version: 39
 * @Author: sikuai
 * @Date: 2023-03-15 19:27:53
 * @LastEditors: sikuai
 * @LastEditTime: 2023-03-16 08:44:18
//  封装校验用户名和token的js
-->
<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台管理登录</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="passwprd" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
    <!-- 在下面引入校验规则，代替上面的:rule -->
  <script>

import { nameRule, passRule } from '../utils/vaildate.js'
import { setToken } from '../utils/setToken.js'
import axios from 'axios';
import https from 'https';
const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

export default {

  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ validator: nameRule, trigger: 'bulr' }],
        password: [{ validator: passRule, trigger: 'bulr' }],
      }
    }
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          // 校验通过
          console.log(this.form)
          // 此处调用封装的axios
          this.service.post('/login', this.form)
          .then((res) => {
            console.log(res.data)
          })
        }else{
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
    