import { createContext } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
}

// UserContext represents either a logged in user or null (not logged in)
const UserContext = createContext<User | null>(null);

export default UserContext;
