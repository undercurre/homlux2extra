// src/utils/request.ts
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// 创建一个 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: "/shangzhao", // API 的基础 URL
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么，比如添加 token
    // config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },
  (error: any) => {
    // 处理请求错误
    console.error(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response;
    // 根据你的 API 规范，判断返回结果的状态码
    // if (res.code !== 20000) {
    //   // 如果状态码不是 20000，做一些处理
    //   console.error("Error: " + res.message);
    //   return Promise.reject(new Error(res.message || "Error"));
    // } else {
    //   return res;
    // }
    return res;
  },
  (error: any) => {
    // 处理响应错误
    console.error("Error: " + error.message);
    return Promise.reject(error);
  }
);

export default service;
