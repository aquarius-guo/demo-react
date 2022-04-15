/**
 * @description 解析工具
 * @author Aquarius
 * @date 2022-4-15 18:25:49
 */

export const parseToken = (token) => {
    const OAUTH_TOKEN = token.split("&")[1].split("=")[1];
    return OAUTH_TOKEN;
}