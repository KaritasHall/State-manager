import React, { useContext } from "react";
import UserContext from "@project/state/user-context";
import { useRecoilValue } from "recoil";
import { themeState } from "@project/state/theme-recoil";

export default function LoggedIn() {
  const theme = useRecoilValue(themeState);
  const user = useContext(UserContext);

  const textStyle = {
    color: theme === "dark" ? "white" : "black",
  };

  return (
    <div>
      <h1 style={textStyle}>Good to see you,</h1>
      <p style={textStyle}>{user?.name}</p>
    </div>
  );
}
