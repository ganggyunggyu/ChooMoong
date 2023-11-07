import { atom } from 'recoil';

export const userInfoState = atom({
  key: 'userInfoState',
  default: {},
});
export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
});
