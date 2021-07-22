import { Sede } from '../../models';
import { SedesAction, SedesActionTypes } from '../actions/sedes.action';

export interface SedesState {
  list: Sede[],
  loading: boolean,
  error: Error
}

const initialState: SedesState = {
  list: [],
  loading: false,
  error: undefined
};

export function SedesReducer(state: SedesState = initialState, action: SedesAction) {
  console.log(action.type);
  switch (action.type) {
    case SedesActionTypes.LOAD_SEDES:
      return {
        ...state,
        loading: true
      }
    case SedesActionTypes.LOAD_SEDES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }

    case SedesActionTypes.LOAD_SEDES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case SedesActionTypes.GET_SEDES:
      return {
        ...state,
        loading: true
      }
    case SedesActionTypes.GET_SEDES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }
    case SedesActionTypes.GET_SEDES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case SedesActionTypes.EDIT_ITEMS:
      return {
        ...state,
        loading: true
      }
    case SedesActionTypes.EDIT_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case SedesActionTypes.EDIT_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case SedesActionTypes.ADD_ITEMS:
      return {
        ...state,
        loading: true
      }
    case SedesActionTypes.ADD_ITEMS_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case SedesActionTypes.ADD_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SedesActionTypes.DELETE_ITEMS:
      return {
        ...state,
        loading: true
      }
    case SedesActionTypes.DELETE_ITEMS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case SedesActionTypes.DELETE_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
