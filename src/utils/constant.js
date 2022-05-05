/**
 * @description 常量
 * @author Aquarius
 * @date 2022-4-15 17:06:03
 */


// github OAuth
const CLIENT_ID = '983e05bfbeca45756b74';
const STATE = 'mm146gglhydvv';
const BASE_URL = "https://github.com";
const CLIENT_SECRET = "d1fca7be906d07f67a76bce16a251a8d8f90d50c";
const REDIRECT_URL = "http://localhost:8080";
// github oauth url
const GITHUB_URL_OAUTH = `${BASE_URL}/login/oauth/authorize?scope=email&allow_signup=true&client_id=${CLIENT_ID}&state=${STATE}`
// session_id
const SESSION_ID = "__SESSION_GITHUB_TOKEN";

export {
    GITHUB_URL_OAUTH,
    BASE_URL,
    STATE,
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL,
    SESSION_ID
}