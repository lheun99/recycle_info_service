const kakaoUrl = () => {
    const baseUrl = "https://kauth.kakao.com/oauth/authorize";
    const config = {
      client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT,
      redirect_uri:
        "http://localhost:3000/auth/kakao/callback",
      response_type: "code",
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;

    return finalUrl;
  };

export {kakaoUrl}