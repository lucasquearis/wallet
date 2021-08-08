// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';

export function userLogin(task) {
  return {
    type: LOGIN_USER,
    task,
  };
}
