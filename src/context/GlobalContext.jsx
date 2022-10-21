import { createContext } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  return (
    <GlobalContext.Provider class="container-fluid bg-primary text-primary">
      <div className="container-fluid bg-danger h-100">{props.children}</div>
    </GlobalContext.Provider>
  );
}
