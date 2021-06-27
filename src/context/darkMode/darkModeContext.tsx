import React, { createContext, useReducer,  ReactNode, useContext} from "react";
import { DarkModeActions } from "./darkMode.types";
import { DarkModeDispatch, darkModeReducer } from "./darkModeReducers";
import { DarkModeState, DARK_MODE_INITIAL_STATE } from "./constants";

const DarkModeStateContext = createContext<DarkModeState | undefined>(
  undefined
);
const DarkModeDispatchContext = createContext<DarkModeDispatch | undefined>(
  undefined
);

type DarkModeProps = { children: ReactNode };

function DarkModeProvider({ children }: DarkModeProps) {
  const [state, dispatch] = useReducer(
    darkModeReducer,
    DARK_MODE_INITIAL_STATE
  );

  return (
    <DarkModeStateContext.Provider value={state}>
      <DarkModeDispatchContext.Provider value={dispatch}>
        {children}
      </DarkModeDispatchContext.Provider>
    </DarkModeStateContext.Provider>
  );
}

function useDarkModeContext() {
  const state = useContext(DarkModeStateContext);

  if (state === undefined) {
    throw new Error(
      "useDarkModeState deve ser utilizando dentro de um DarkModeProvider"
    );
  }

  const dispatch = useContext(DarkModeDispatchContext);

  if (dispatch === undefined) {
    throw new Error(
      "useDarkModeDispatch deve ser utilizando dentro de um DarkModeProvider"
    );
  }

  const actions = DarkModeActions;

  return { state, dispatch, actions };
}

export { DarkModeProvider, useDarkModeContext };
