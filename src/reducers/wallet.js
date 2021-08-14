// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES, GET_API, GET_API_ERROR, GET_API_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  isLoading: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, action.currencies],
    };
  case GET_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_API_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
      expenses: [...state.expenses, action.expenses],
      isLoading: false,
    };
  case GET_API_ERROR:
    return {
      ...state,
      expenses: [...state.expenses],
      error: state.error,
      isLoading: false,
    };
  default:
    return { ...state };
  }
}

export default wallet;
