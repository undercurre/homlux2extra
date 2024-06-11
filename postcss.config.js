module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 390, // 设计稿的宽度
      viewportHeight: 844, // 设计稿的高度（可选）
      unitPrecision: 5, // 保留的小数位数
      viewportUnit: "vw", // 需要转换成的视口单位
      selectorBlackList: [".ignore", ".hairlines"], // 不需要转换的类
      minPixelValue: 1, // 小于或等于1px不转换为视口单位
      mediaQuery: false, // 允许在媒体查询中转换px
      exclude: [/node_modules/], // 忽略某些文件夹下的文件
    },
  },
};
