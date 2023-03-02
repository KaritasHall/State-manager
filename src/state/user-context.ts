import { createContext } from "react";

// User represents a user in the system
export interface User {
  id: string;
  name: string;
  email: string;
}

// UserContext represents either a logged in user or null (not logged in)
const UserContext = createContext<User | null>(null);

export default UserContext;
