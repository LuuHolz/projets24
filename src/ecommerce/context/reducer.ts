import { Action } from "../Types/ReducerType";
import { ContextState } from "../Types/State.type";

export const reducer = (state: ContextState, action: Action): ContextState => {
    switch (action.type) {
      case 'ACTION_TYPE_1':
        return { 
          ...state, 
          name: action.payload
      };
      case 'ACTION_TYPE_2':
        // Manejar la acción 2
        return { ...state, /* Actualiza el estado */ };
      default:
        return state;
    }
  };
  