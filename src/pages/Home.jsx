import React from 'react';
import Login from './Login';
import Footer from '../components/Footer';

class Home extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Wallet Online, sua carteira digital!</h1>
        <Login />
        <Footer />
      </>
    );
  }
}

export default Home;
