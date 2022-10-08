import { atom } from "recoil";

export const contentHeightState = atom({
  key: "contentHeight",
  default: window.innerHeight,
});
