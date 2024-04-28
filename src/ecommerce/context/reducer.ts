import { Action } from "../Types/Reducer.type";
import { ContextState } from "../Types/State.type";

export const reducer = (state: ContextState, action: Action): ContextState => {
    switch (action.type) {
      case 'ACTION_TYPE_1':
        return { ...state, /* Actualiza el estado */ };
      case 'ACTION_TYPE_2':
        // Manejar la acción 2
        return { ...state, /* Actualiza el estado */ };
      default:
        return state;
    }
  };
  