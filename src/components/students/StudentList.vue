<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="100" align="center"></el-table-column>
      <el-table-column prop="sex_text" label="性别" width="60" align="center"></el-table-column>
      <el-table-column prop="age" label="年龄" width="60" align="center"></el-table-column>
      <el-table-column prop="number" label="学号" width="60" align="center"></el-table-column>
      <el-table-column prop="class" label="班级" width="80" align="center"></el-table-column>
      <el-table-column prop="status_text" label="状态" width="200" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" width="360" align="center"></el-table-column>
      <el-table-column prop="phone" label="联系方式" width="300" align="center"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { students } from '@/api/api.js'

export default {
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {

    getData(params) {
      students(params).then(res => {
        if (res.data.status === 200) {
          this.tableData = res.data.data
        //   不对原数据进行修改
          this.tableData.forEach(item => {
            item.sex === 1 ? item.sex_text = '男' : item.sex_text = '女';
            item.status === "1"
              ? (item.status_text = "已入学")
              : item.status === "2"
                ? (item.status.status_text = "未入学")
                : (item.status_text = "休学中");
          })
        }
      })
    }
  }
}
</script>