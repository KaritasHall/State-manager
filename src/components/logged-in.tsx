import React, { useContext } from "react";
import UserContext from "@project/state/user-context";
import { useRecoilValue } from "recoil";
import { themeState } from "@project/state/theme-recoil";

// This component is a child of the Login component
// and it's only rendered when the user is logged in
// The component renders the user's name and a greeting
export default function LoggedIn() {
  // We can use the useRecoilValue hook to get the value of a recoil state (light or dark)
  const theme = useRecoilValue(themeState);
  // We can use the useContext hook to get the value of a context (user)
  const user = useContext(UserContext);

  // If the theme (theme-recoil) is dark, we want the text to be white
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
