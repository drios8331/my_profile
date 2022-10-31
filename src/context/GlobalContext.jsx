import { createContext } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  return (
    <GlobalContext.Provider>
      <div className="container-fluid container_principal bg-light">
        {props.children}
      </div>
    </GlobalContext.Provider>
  );
}
