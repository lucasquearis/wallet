// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';

export function userLogin(state) {
  return {
    type: LOGIN_USER,
    email: state.email,
    password: state.password,
  };
}
