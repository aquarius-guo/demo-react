/**
 * @description 用户登录
 * @author Aquarius
 * @date 2022-4-15 18:14:12
 */
import axios from "@/utils/http";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "@/utils/constant";

// 登录
export const userLogin = async (code) => await axios.post("/api/login/oauth/access_token", {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URL,
    code,
})

// 获取用户信息
export const getUserInfo = async () => await axios.get("https://api.github.com/user");