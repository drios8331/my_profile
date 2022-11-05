import { createContext } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  return (
    <GlobalContext.Provider>
      <div className="container-fluid container_principal" style={{background: "#3399FF"}}>
        {props.children}
      </div>
    </GlobalContext.Provider>
  );
}
