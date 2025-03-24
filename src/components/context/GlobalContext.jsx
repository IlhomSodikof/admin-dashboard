import { createContext, useState } from "react";
export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [theme, setTheme] = useState("lgiht")
  const toggleTheme = (e) => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
    console.log(e);

  }

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme }} >{children}</GlobalContext.Provider>
  )
}