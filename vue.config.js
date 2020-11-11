const path = require('path');


function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  devServer: {
    // open: true, //配置自动启动浏览器
    // host: 'localhost',
    // port: 8083, // 端口号
    // https: false,
    // hotOnly: false,
    proxy: {
      '/api/list': {
        target: 'http://192.168.1.2:3100/',
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   "^/api": ''
        // }
      },
      '/foo': {
        target: 'http://192.168.1.2:3100/',
        ws: true,
        changeOrigin: true,
      }
    }
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@v', resolve('src/views'))
      .set('@api', resolve('src/api'))
  },

  // webpack配置
  configureWebpack: config => {
    //生产环境去除console信息
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  }
}
