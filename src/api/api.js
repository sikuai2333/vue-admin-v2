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
        data:params
    })
}