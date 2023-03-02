import { atom } from "recoil";

// Defining a type for the theme. It can be either "light" or "dark".
export type Theme = "light" | "dark";

// Defining the theme state. It is a Recoil atom, which is a piece of state that
// can be read and written to. It has a unique ID and a default value.
export const themeState = atom<Theme>({
  key: "themeState", // unique ID (with respect to other atoms/selectors)
  default: "light", // default value (aka initial value)
});
