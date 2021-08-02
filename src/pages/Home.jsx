import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="email-input">
          Email:
          <input data-testid="email-input" type="email" />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input data-testid="password-input" />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Home;
