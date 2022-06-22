const User = require("../models/funcs/User");
const jwt = require("jsonwebtoken");
const axios = require("axios");

class kakaoService {
    static getUserData = async ({ accessToken }) => {
        const apiUrl = "https://kapi.kakao.com/v2/user/me";
        const userData = await axios.get(`${apiUrl}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        const userId = userData.data.id;
        const { nickname, profile_image } = userData.data.properties;
        const { email } = userData.data.kakao_account;

        // return this.checkUser({ email, nickname, userId, loginMethod: "Kakao" });
        return "hello";
    };

    static getToken = async ({ code }) => {
        const baseUrl = "https://kauth.kakao.com/oauth/token";
        const config = {
            client_id: process.env.KAKAO_CLIENT,
            redirect_uri: "http://localhost:3000/auth/kakao/callback",
            grant_type: "authorization_code",
            code,
        };
        const params = new URLSearchParams(config);
        const finalUrl = `${baseUrl}?${params}`;

        const tokenRequest = await axios.post(finalUrl, config);

        const accessToken = tokenRequest.data.access_token;
        return this.getUserData({ accessToken });
    };
}

module.exports = kakaoService;
