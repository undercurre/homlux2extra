import request from "../utils/request";

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(mobilePhone: string) {
  return request.post<ApiService.ApiWrap<null>>(
    "/v1/mzgd/cl/auth/get/captcha",
    { mobilePhone }
  );
}

/**
 * 登录
 * @param params
 * @param {Object} params - 接口参数
 * @param {String} params.mobilePhone - 用户手机
 * @param {String} params.captcha - 用户手机验证码
 */
export function fetchLogin(params: { mobilePhone: string; captcha: string }) {
  return request.post<ApiService.ApiWrap<ApiAuth.Token>>(
    "/v1/mzgd/cl/auth/web/login",
    params
  );
}
