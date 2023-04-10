"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState("falsete");
  /* useEffect(() => {
   Este useEffect se va a ejecutar cuando el componente se monte para verificar si el usuario esta logueado
  }, []); */
  console.log(setUser);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
