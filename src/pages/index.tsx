import { useCallback, useState } from "react";
import UserContext, { User } from "@project/state/user-context";
import Login from "@project/components/login";
import LoggedIn from "@project/components/logged-in";
import { useSetRecoilState } from "recoil";
import { themeState } from "@project/state/theme-recoil";
import { ThemeWrapper } from "@project/components/theme-wrapper";

export default function Home() {
  // Using the useSetRecoilState hook to set the value of a recoil state (light or dark)
  const setTheme = useSetRecoilState(themeState);
  // Using the useState hook to set the value of a context (user)
  const [user, setUser] = useState<User | null>(null);

  // handleLogout resets the user to null
  const handleLogout = useCallback(() => {
    setUser(null);
  }, []);

  // toggleTheme toggles the theme between light and dark
  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }, [setTheme]);

  return (
    <UserContext.Provider value={user}>
      <ThemeWrapper>
        {user && <button onClick={toggleTheme}>Toggle theme</button>}
        {user ? <LoggedIn /> : <Login setUser={setUser} />}
        {user && <button onClick={handleLogout}>Logout</button>}
      </ThemeWrapper>
    </UserContext.Provider>
  );
}
