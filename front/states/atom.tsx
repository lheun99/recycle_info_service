import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginState = atom({
    key: "LoginState",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const UserInfoState = atom({
    key: "UserInfo",
    default: {},
    effects_UNSTABLE: [persistAtom], // 수정하기
    // dangerouslyAllowMutability: true,
});

