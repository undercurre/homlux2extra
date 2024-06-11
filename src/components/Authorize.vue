<script setup lang="ts">
import { fetchLogin, fetchSmsCode } from "@/api";
import logo from "@/assets/mideaLogo.png";
import { ref } from "vue";

const phoneNumber = ref("");
const sms = ref("");
let timer: ReturnType<typeof setInterval> | null;
const timerCount = ref(0);
const loginRes = ref<ApiService.ApiWrap<ApiAuth.Token | null>>();

async function handleSubmit() {}

async function getCode() {
  const codeRes = await fetchSmsCode(phoneNumber.value);
  if (codeRes.data.code === 0) {
  }
  if (!timer) {
    timerCount.value = 60;
    timer = setInterval(() => {
      timerCount.value--;
      if (timerCount.value <= 0 && timer) {
        clearInterval(timer);
        timer = null;
      }
    }, 1000);
  }
}

async function onSubmit() {
  const { data } = await fetchLogin({
    mobilePhone: phoneNumber.value,
    captcha: sms.value,
  });
  loginRes.value = data;
}
</script>

<template>
  <div
    class="w-100vw h-100vh bg-gradient-to-br from-transparent via-lightblue-200 to-lightblue-500"
  >
    <van-nav-bar title="登录授权" left-arrow>
      <template #left>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
          Logo
        >
          <path
            fill="black"
            d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
          />
        </svg>
      </template>
    </van-nav-bar>

    <img class="w-72px h-72px mt-55px" :src="logo" />
    <h3 class="tracking-4.4px text-22px text-#27282A font-600 mb-95px">
      智慧园区
    </h3>

    <van-form @submit="handleSubmit">
      <van-cell-group inset>
        <van-field
          v-model="phoneNumber"
          name="手机号"
          placeholder="请输入手机号码"
          :rules="[{ required: true, message: '请输入正确的手机号码' }]"
        />
        <van-field
          v-model="sms"
          center
          clearable
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button
              size="small"
              type="primary"
              @click="getCode"
              :disabled="!phoneNumber || timerCount !== 0"
              >{{
                timerCount === 0 ? "发送验证码" : `重新发送 ${timerCount}`
              }}</van-button
            >
          </template>
        </van-field>
      </van-cell-group>

      <div class="mb-21px h-50px w-full">
        <div
          v-if="loginRes?.code === 9878"
          class="flex justify-center items-center absolute left-1/2 transform -translate-x-1/2"
        >
          <div class="mr-12px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path
                fill="#FF6270"
                d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m0-384c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24m-32 224a32 32 0 1 1 64 0a32 32 0 1 1-64 0"
              />
            </svg>
          </div>
          <h4 class="h-13px text-13px leading-13px text-#FF6270 font-400">
            验证码错误，请检查后重试
          </h4>
        </div>
      </div>

      <div style="margin: 16px">
        <van-button
          class="w-343px h-44px rounded-12px bg-gradient-to-br from-[#468CFB] to-[#6BA3FC]"
          type="primary"
          :disabled="sms.length === 0"
          @click="onSubmit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<style scoped></style>
