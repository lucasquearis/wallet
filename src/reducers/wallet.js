// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],

};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, action.currencies],
    };
  default:
    return { ...state };
  }
}

export default wallet;
