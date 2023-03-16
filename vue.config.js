// 在 vue.config.js 文件中添加以下代码
const proxy = require('http-proxy-middleware');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://1.116.64.64:5004/api2/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        onProxyReq(proxyReq, req, res) {
          // 在请求头中添加referer，避免目标服务器禁止跨域请求
          proxyReq.setHeader('referer', 'http://1.116.64.64:5004/api2/');
        }
      }
    }
  }
};