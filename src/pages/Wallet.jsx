import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import { fetchAPI } from '../actions';
import Form from '../components/Form';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  //   this.fetchAPI = this.fetchAPI.bind(this);
  // }

  // componentDidMount() {
  //   this.fetchAPI();
  // }

  // async fetchAPI() {
  //   const { fetchMoedas } = this.props;
  //   const API_URL = 'https://economia.awesomeapi.com.br/json/all';
  //   const response = await fetch(API_URL);
  //   const data = await response.json();
  //   Object.values(data).forEach((moeda) => fetchMoedas(moeda));
  // }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">
            Despesa total
            {0}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Form />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchMoedas: (api) => dispatch(fetchAPI(api)),
// });

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
