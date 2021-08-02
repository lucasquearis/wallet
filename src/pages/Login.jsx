import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonDisable: true,
      email: '',
      password: '',
    };
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(e) {
    if (e.target.name === 'email') {
      const valor = e.target.value;
      this.setState({
        email: valor,
      });
    } else if (e.target.name === 'password') {
      const valor = e.target.value;
      this.setState({
        password: valor,
      });
    }
    const { email, password } = this.state;
    const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    if (regex.test(email) && password.length > 2 + 2) {
      this.setState({ buttonDisable: false });
    }
  }

  render() {
    const { email, password, buttonDisable } = this.state;
    return (
      <fieldset>
        <label htmlFor="email-input">
          Email:
          <input
            name="email"
            data-testid="email-input"
            onChange={ this.changeInput }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            name="password"
            data-testid="password-input"
            onChange={ this.changeInput }
            value={ password }
          />
        </label>
        <button
          type="button"
          disabled={ buttonDisable }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;
