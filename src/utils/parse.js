/**
 * @description 解析工具
 * @author Aquarius
 * @date 2022-4-15 18:25:49
 */

import { SESSION_ID } from "./constant";

// 解析 token
export const parseToken = (token) => {
    const OAUTH_TOKEN = token.split("&")[0].split("=")[1];
    setToken(OAUTH_TOKEN);
    return OAUTH_TOKEN;
}

// 设置 token
export const setToken = (OAUTH_TOKEN) => {
    window.localStorage.setItem(SESSION_ID, OAUTH_TOKEN);
}

// 获取 token
export const getToken = () => {
    return window.localStorage.getItem(SESSION_ID) || "";
}

// 删除 token
export const removeToken = () => {
    return window.localStorage.removeItem(SESSION_ID)
}