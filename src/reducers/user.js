// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state,
      email: state.user.email,
      password: state.user.password,
    };
  default:
    return state;
  }
}

export default user;
