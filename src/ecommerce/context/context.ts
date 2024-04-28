import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

const MyContext = createContext<
  { state: ContextState; dispatch: React.Dispatch<Action> } | undefined
>(un defined);

export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): { state: MyState; dispatch: Dispatch<MyAction> } => {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};