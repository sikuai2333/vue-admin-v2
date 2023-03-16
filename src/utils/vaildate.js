// 用户名校验
export function nameRule(rule, value, callback) {
    // 请输入4-10位昵称
    let reg = /(^[a-zA-Z0-9]+$)/
    if (value === ''){
        callback(new Error("请输入用户名"));
    }
    else if (!reg.test(value)) {
        callback(new Error("请输入4-10位"));
    }
    else {
        callback();
    }
}

// 密码正则校验
export function passRule(rule, value, callback) {
    // 请输入4-10位昵称
    let pass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/
    if (value === ''){
        callback(new Error("请输入密码"));
    }
    else if (!pass.test(value)) {
        callback(new Error("6-18位密码且包含数字和字母"));
    }
    else {
        callback();
    }
}