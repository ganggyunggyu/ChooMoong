import { atom } from 'recoil';

export const userInfoState = atom({
  key: 'userInfoState',
  default: {},
});
export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
});
export const searchValueState = atom({
  key: 'searchValueState',
  default: '',
});
export const searchMarkersState = atom({
  key: 'searchMarkersState',
  default: [],
});
