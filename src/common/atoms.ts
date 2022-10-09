import { atom } from "recoil";

export const contentHeightState = atom({
  key: "contentHeight",
  default: window.innerHeight,
});

export const menuDrawerState = atom({
  key: "menuDrawerState",
  default: false,
});
