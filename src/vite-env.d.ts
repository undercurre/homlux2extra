/// <reference types="vite/client" />

declare namespace ApiService {
  interface ApiWrap<T> {
    code: number;
    msg: string;
    result: T;
    success: boolean;
    timestamp: number;
  }
}
