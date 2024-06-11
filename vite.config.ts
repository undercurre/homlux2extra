import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Unocss from "unocss/vite";
import postcsspxtoviewport8plugin from "postcss-px-to-viewport-8-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()],
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport8plugin({
          viewportWidth: 375, // 设计稿的宽度
          viewportHeight: 667, // 设计稿的高度（可选）
          unitPrecision: 5, // 保留的小数位数
          viewportUnit: "vw", // 需要转换成的视口单位
          selectorBlackList: [".ignore", ".hairlines"], // 不需要转换的类
          minPixelValue: 1, // 小于或等于1px不转换为视口单位
          mediaQuery: false, // 允许在媒体查询中转换px
          exclude: [/node_modules/], // 忽略某些文件夹下的文件
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/shangzhao": {
        target: "https://test.meizgd.com/mzaio", // 你的后端服务器地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/shangzhao/, ""),
      },
    },
  },
});
