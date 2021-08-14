// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_API, GET_API_ERROR, GET_API_SUCCESS, UPDATE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_API:
    return {
      ...state,
    };
  case GET_API_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
      successApi: action.successApi,
    };
  case GET_API_ERROR:
    return {
      ...state,
      error: state.error,
    };
  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.expenses }],
    };
  default:
    return { ...state };
  }
}

export default wallet;
