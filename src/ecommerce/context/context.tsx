import { Dispatch, createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { ContextState } from "../Types/State.type";
import { Action } from "../Types/ReducerType";

type PropsContext = {
  state: ContextState;
  dispatch: Dispatch<Action>;
}

export const MyContext = createContext<PropsContext>({} as PropsContext);



type Props = {
  children: JSX.Element | JSX.Element[];
}

export const MyContextProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <MyContext.Provider value={{ state, dispatch }} >
        {children}
      </MyContext.Provider>
  )
}

