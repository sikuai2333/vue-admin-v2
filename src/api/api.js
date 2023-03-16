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