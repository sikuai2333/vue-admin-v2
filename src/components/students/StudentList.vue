<!--
 * @Descripttion: 
 * @version: 39
 * @Author: sikuai
 * @Date: 2023-03-17 18:33:26
 * @LastEditors: sikuai
 * @LastEditTime: 2023-03-20 08:48:31
-->
<template>
  <div class="studentList">
    <!-- 查询/重置  表单 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- <el-table :data="tableData" border style="width: 100%"> 下面实现前端分页-->
    <!-- <el-table :data="tableData.slice((currentPage - 1) * pageSize,currentPage * pageSize)" border style="width: 100%"> 下面绑定计算方法 -->
    <el-table :data="compData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="100" align="center"></el-table-column>
      <el-table-column prop="sex_text" label="性别" width="60" align="center"></el-table-column>
      <el-table-column prop="age" label="年龄" width="60" align="center"></el-table-column>
      <el-table-column prop="number" label="学号" width="60" align="center"></el-table-column>
      <el-table-column prop="class" label="班级" width="80" align="center"></el-table-column>
      <el-table-column prop="status_text" label="状态" width="200" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" width="360" align="center"></el-table-column>
      <el-table-column prop="phone" label="联系方式" width="300" align="center"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>
<script>
import { students, studentDel, studentFind  } from '@/api/api.js'

export default {
  data() {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      pageSize: 10, //每页数据量
      total: 0, //总条数
      formInline: {
        name: '',
      },
    }
  },
  created() {
    this.getData()
  },
  computed: {
    compData() {
      // 计算页面条数方法封装
      return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    },
  },
  methods: {
    // 查询方法
    find() {
      console.log(this.formInline)
      this.getData(this.formInline)
    },
    // 重置方法
    reset() {
      console.log(this.formInline)
      this.formInline = {}
      this.getData(this.formInline)

    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    getData(params) {
      students(params).then(res => {
        if (res.data.status === 200) {
          this.tableData = res.data.data
          this.total = res.data.total
          //   不对原数据进行修改
          this.tableData.forEach((item) => {
            item.sex === 1 ? (item.sex_text = '男') : (item.sex_text = '女');
            item.status === "1"
              ? (item.status_text = "已入学")
              : item.status === "2"
                ? (item.status.status_text = "未入学")
                : (item.status_text = "休学中");
          })
        }
      })
    },
    del(row) {
      console.log(row);
      studentDel(row.id).then(res => {
        console.log(res)
        if (res.data.status === 200) {
          this.$message({ message: "删除数据成功", type: "success" })
          this.getData()
        } else {
          this.$message({ message: '删除数据失败', type: 'error' })
          this.getData()
        }
      })
    },
  }
}
</script>
<style lang="scss">
.studentList {
  .demo-form-inline,.el-form-item{
    text-align: left;
    margin-left: 10px;
  }
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>