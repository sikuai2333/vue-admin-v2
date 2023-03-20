// 将接口封装成api.js调用
import service from "@/service.js";

// 登录接口
export function login(data){
    return service({
        method: 'post',
        url: '/login',
        data:data
    })
}

// 学生列表
export function students(params){
    return service({
        method: 'get',
        url: '/students',
        params,
    })
}

// 学生列表删除接口
export function studentDel(id){
    return service({
        method: 'delete',
        url: `/students/${id}`,
    })
}

// 学生列表查询重置接口和上面getData二次利用
