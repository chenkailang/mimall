module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/lesson': {
        target: 'https://coding.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/lesson': '/lesson'
        }
      }
    }
  }
}