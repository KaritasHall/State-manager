import { themeState } from "@project/state/theme-recoil";
import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useRecoilValue(themeState);

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
