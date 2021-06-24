module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      unitToConvert: "px", // 要转化的单位
      viewportWidth: 375, // 视窗的宽度  650对应的UI设计稿的宽度
      viewportHeight: 667,
      unitPrecision: 5, // 转换后的精度，即小数点位数
      viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
      selectorBlackList: ["ignore",'tab-bar','item-icon','item-active-icon','item-text'], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
      exclude: [/Tabbar/,/NavBar/], // 设置忽略文件，用正则做目录名匹配
    },
  }
}
