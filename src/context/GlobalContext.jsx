import { createContext } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  return (
    <GlobalContext.Provider>
      <div className="container-fluid bg-white h-100">{props.children}</div>
    </GlobalContext.Provider>
  );
}
