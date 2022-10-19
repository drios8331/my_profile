import { createContext } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  return (
    <GlobalContext.Provider>
      {props.children}
    </GlobalContext.Provider>
  );
}
