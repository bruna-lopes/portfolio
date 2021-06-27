import { createContext, useReducer, ReactNode, useContext } from 'react';
import { IdiomaState, IDIOMA_INITIAL_STATE } from './constants';
import { IdiomaActions } from './idioma.types';
import { IdiomaDispatch, idiomaReducer } from './idiomaReducer';

const IdiomaStateContext = createContext<IdiomaState | undefined>(undefined);

const IdiomaDispatchContext = createContext<IdiomaDispatch | undefined>(undefined);

type IdiomaProps = { children: ReactNode };

function IdiomaProvider({ children }: IdiomaProps) {
  const [state, dispatch] = useReducer(idiomaReducer, IDIOMA_INITIAL_STATE);

  return (
    <IdiomaStateContext.Provider value={state}>
      <IdiomaDispatchContext.Provider value={dispatch}>
        {children}
      </IdiomaDispatchContext.Provider>
    </IdiomaStateContext.Provider>
  );
}

function useIdiomaContext() {
  const stateIdioma = useContext(IdiomaStateContext);

  if (stateIdioma === undefined) {
    throw new Error('useIdiomaState deve ser utilizado dentro de um IdiomaProvider');
  }

  const dispatchIdioma = useContext(IdiomaStateContext);

  if (dispatchIdioma === undefined) {
    throw new Error('useIdiomaDispatch deve ser utilizado dentro de um IdiomaProvider');
  }

  const actionsIdioma = IdiomaActions;

  return { stateIdioma, dispatchIdioma, actionsIdioma };
}

export { IdiomaProvider, useIdiomaContext };
