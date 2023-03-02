import { themeState } from "@project/state/theme-recoil";
import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";

// Here I am using Recoil to make a light/dark theme

// This is a wrapper component that will wrap around
// any component that needs to use the theme state - here it is index.tsx
export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useRecoilValue(themeState);

  // I also used this wrapper to style the content a little bit
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};
