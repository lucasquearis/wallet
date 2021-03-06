import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';
import loginHero from '../images/carteira.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    const { email, password } = this.state;
    const { setNewTaskToStore } = this.props;
    setNewTaskToStore({ email, password });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-page">
        <form className="pure-form">
          <fieldset className="fieldset-login">
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
            <Link to="/wallet/carteira">
              <button
                className="pure-button"
                type="button"
                disabled={ !this.checkLogin() }
                onClick={ this.handleClick }
              >
                Entrar
              </button>
            </Link>
          </fieldset>
        </form>
        <div>
          <img src={ loginHero } alt="executivo" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  setNewTaskToStore: (task) => dispatch(userLogin(task)),
});

Login.propTypes = {
  setNewTaskToStore: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
