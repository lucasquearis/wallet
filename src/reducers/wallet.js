// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  DELETE_EXPENSE,
  GET_API,
  GET_API_ERROR,
  GET_API_SUCCESS,
  UPDATE_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  id: 0,
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
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((item) => action.id !== item.id)],
    };
  default:
    return { ...state };
  }
}

export default wallet;
