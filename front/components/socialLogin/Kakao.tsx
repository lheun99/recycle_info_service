import { get } from "../../api";

const Kakao = () => {
    const kakaoLogin = async (code) => {
        try {
            const res = await get(`auth/kakao?code=${code}`)
            console.log(res)
        } catch (error) {
            console.log("문제 생김")
        }
    }
    const code = "미정"
    kakaoLogin(code)
}

export {Kakao}