import { atom } from "recoil";

export const sendMessageAtom = atom<boolean>({
  key: "sendMessageAtom",
  default: false,
});
