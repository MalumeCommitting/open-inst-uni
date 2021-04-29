// module.exports = { publicPath: process.env.NODE_ENV === 'production' ? '/open-inst-uni/' : '/' }
chainWebpack: config => {
    config.optimization.delete('splitChunks')
  }