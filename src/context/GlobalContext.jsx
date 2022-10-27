import { createContext } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  return (
    <GlobalContext.Provider>
      <div className="container-xxl bg-white h-100 col-12">{props.children}</div>
    </GlobalContext.Provider>
  );
}
