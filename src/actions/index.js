// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const CURRENCIES = 'CURRENCIES';

export function userLogin(state) {
  return {
    type: LOGIN_USER,
    email: state.email,
    password: state.password,
  };
}

export function walletAction(state) {
  return {
    type: CURRENCIES,
    currencies: state,
  };
}
