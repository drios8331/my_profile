import { createContext } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  return (
    <GlobalContext.Provider class="container-fluid bg-primary text-primary">
      <div className="container-fluid bg-danger">
        {props.children}
        </div>
    </GlobalContext.Provider>
  );
}
