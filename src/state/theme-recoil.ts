import { atom } from "recoil";

export type Theme = "light" | "dark";

export const themeState = atom<Theme>({
  key: "themeState", // unique ID (with respect to other atoms/selectors)
  default: "light", // default value (aka initial value)
});
