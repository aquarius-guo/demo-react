/**
 * @description axiox 封装
 * @author Aquarius
 * @date 2022-4-15 16:31:52
 */

import axios from "axios";

// axios 配置信息
const BASE_CONFIG = {
    timeout: 5000,
    baseURL: "",
}

// 创建实例
const instance = axios.create(BASE_CONFIG)

// 请求拦截
instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截
instance.interceptors.response.use(
    response => {
        const {status, data} = response;
        return data;
    },
    error => {
        return Promise.reject(error)
    }
)

export default instance;