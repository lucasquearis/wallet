import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  buttonEnable() {
    this.setState({ buttonDisable: false });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  checkLogin() {
    return this.checkEmail() && this.checkPassword();
  }

  checkEmail() {
    const { email } = this.state;
    const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    return regex.test(email);
  }

  checkPassword() {
    const { password } = this.state;
    const maxCaracters = 6;
    return password.length >= maxCaracters;
  }

  goTo() {
    window.location = '/carteira';
  }

  render() {
    const { email, password } = this.state;
    return (
      <fieldset>
        <label htmlFor="email-input">
          Email:
          <input
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button
          type="button"
          disabled={ !this.checkLogin() }
          onClick={ this.goTo }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.user.email,
  password: state.user.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  setNewTaskToStore: (task) => dispatch(userLogin(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
