// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const CURRENCIES = 'CURRENCIES';
export const GET_API = 'GET_API';
export const GET_API_SUCCESS = 'GET_API_SUCCESS';
export const GET_API_ERROR = 'GET_API_ERROR';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_FORM = 'EDIT_FORM';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

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
  const moedas = Object.keys(state);
  const moedasFilter = moedas.filter((moeda) => moeda !== 'USDT');
  return {
    type: GET_API_SUCCESS,
    currencies: moedasFilter,
  };
}
export function walletAPIError(error) {
  return {
    type: GET_API_ERROR,
    error,
  };
}
export function updateExpenses(state) {
  return {
    type: UPDATE_EXPENSES,
    expenses: state,
  };
}

export function deleteExpenses(id) {
  return {
    type: DELETE_EXPENSE,
    id,
  };
}

export function editForm(bool, id) {
  return {
    type: EDIT_FORM,
    editFormBoolean: bool,
    idEdit: id,
  };
}

export function editExpense(state) {
  return {
    type: EDIT_EXPENSE,
    state,
  };
}

export const fetchAPI = (state) => (dispatch) => {
  const URL_API = 'https://economia.awesomeapi.com.br/json/all';
  fetch(URL_API)
    .then((data) => data.json())
    .then((response) => (state
      ? dispatch(updateExpenses({ ...state, exchangeRates: response }))
      : dispatch(walletAPISuccess(response))))
    .catch((error) => dispatch(walletAPIError(error)));
};
