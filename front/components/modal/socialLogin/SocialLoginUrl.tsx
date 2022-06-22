function kakaoUrl() {
    const baseUrl = "https://kauth.kakao.com/oauth/authorize";
    const config = {
        client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT,
        redirect_uri: "http://localhost:3000/auth/kakao/callback",
        response_type: "code",
    };
    // console.log(new URL(window.location.href).searchParams.get("code"));
    const params = new URLSearchParams(config).toString();

    const finalUrl = `${baseUrl}?${params}`;
    console.log(finalUrl);

    return finalUrl;
}

export { kakaoUrl };
