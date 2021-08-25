import React from 'react';
import Login from './Login';

class Home extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Wallet Online, sua carteira digital!</h1>
        <Login />
        <footer className="footer">
          <p>
            Lucas A. Santos
          </p>
        </footer>
      </>
    );
  }
}

export default Home;
