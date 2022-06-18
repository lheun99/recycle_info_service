import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const UserState = atom<String>({
    key: 'UserId',
    default: '',
    effects_UNSTABLE: [persistAtom],
});
