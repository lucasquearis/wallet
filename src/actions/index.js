// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const CURRENCIES = 'CURRENCIES';
export const GET_API = 'GET_API';
export const GET_API_SUCCESS = 'GET_API_SUCCESS';
export const GET_API_ERROR = 'GET_API_ERROR';

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

export function walletAPI() {
  return {
    type: GET_API,
  };
}
export function walletAPISuccess(state) {
  return {
    type: GET_API_SUCCESS,
    currencies: Object.keys(state),
  };
}
export function walletAPIError(error) {
  return {
    type: GET_API_ERROR,
    error,
  };
}

export const fetchAPI = () => (dispatch) => {
  dispatch(walletAPI());
  const URL_API = 'https://economia.awesomeapi.com.br/json/all';
  fetch(URL_API)
    .then((data) => data.json())
    .then((response) => dispatch(walletAPISuccess(response)))
    .catch((error) => dispatch(walletAPIError(error)));
};
