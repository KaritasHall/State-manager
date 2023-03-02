import React, { useCallback } from "react";
import { User } from "@project/state/user-context";

// setUser is a function that takes a User and returns void
// meaning it doesn't return anything, it only sets the user
interface LoginProps {
  setUser: (user: User) => void;
}

export default function Login({ setUser }: LoginProps) {
  const HandleLogin = useCallback(() => {
    // This is where you would call your login API
    // and then set the user with the setUser function
    // But for now we'll just fake it
    setUser({
      id: "fake-id",
      name: "Bob",
      email: "bobster@email.com",
    });
  }, [setUser]);
  return (
    <div>
      <h1>Login</h1>
      <p>Please login</p>
      <button onClick={HandleLogin}>Click me</button>
    </div>
  );
}
