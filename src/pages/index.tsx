import { useCallback, useState } from "react";
import UserContext, { User } from "@project/state/user-context";
import Login from "@project/components/login";
import LoggedIn from "@project/components/logged-in";
import { useSetRecoilState } from "recoil";
import { themeState } from "@project/state/theme-recoil";
import { ThemeWrapper } from "@project/components/theme-wrapper";

export default function Home() {
  const setTheme = useSetRecoilState(themeState);
  const [user, setUser] = useState<User | null>(null);

  const handleLogout = useCallback(() => {
    setUser(null);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }, [setTheme]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <UserContext.Provider value={user}>
        <ThemeWrapper>
          {user && <button onClick={toggleTheme}>Toggle theme</button>}
          {user ? <LoggedIn /> : <Login setUser={setUser} />}
          {user && <button onClick={handleLogout}>Logout</button>}
        </ThemeWrapper>
      </UserContext.Provider>
    </div>
  );
}
