import React, { useReducer } from "react";
import AppContext from "./AppContext";

function AppContextProvider({ children, reducer, initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
