import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  calculateTransaction() {
    const { expenses } = this.props;
    const mapTransations = expenses
      .map((item) => (item.exchangeRates[item.currency].ask) * item.value);
    const total = mapTransations.reduce((acc, cur) => acc + cur, 0);
    return total;
  }

  render() {
    this.calculateTransaction();
    const { email, expenses } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">
            {
              expenses.length > 0
                ? `Despesa total: ${this.calculateTransaction()}` : `Despesa total: ${0}`
            }
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
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
