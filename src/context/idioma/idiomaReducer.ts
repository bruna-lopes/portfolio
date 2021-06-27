import { GenericContext } from '../genericContext';
import { IdiomaState, IDIOMA_INITIAL_STATE } from './constants';
import { IdiomaActions } from './idioma.types';

export type IdiomaDispatch = (action: IdiomaAction) => void;

export function idiomaReducer(state: IdiomaState, action: IdiomaAction): IdiomaState {
  switch (action.type) {
    case IdiomaActions.INGLES: {
      return { ...state, idioma: action.payload };
    }
    case IdiomaActions.PORTUGUES: {
      return IDIOMA_INITIAL_STATE;
    }
    default: {
      throw new Error(`Ação não identificado: ${action!}`);
    }
  }
}

type IdiomaAction =
  | GenericContext<IdiomaActions.INGLES>
  | GenericContext<IdiomaActions.PORTUGUES>;
