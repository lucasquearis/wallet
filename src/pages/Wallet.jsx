import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Table from '../components/Table';

class Wallet extends React.Component {
  calculateTransaction() {
    const { expenses } = this.props;
    const mapTransations = expenses
      .map((item) => (item.exchangeRates[item.currency].ask) * item.value);
    const total = mapTransations.reduce((acc, cur) => acc + cur, 0);
    return total;
  }

  render() {
    const ZERO_EXPENSE = <p data-testid="total-field">{ `Despesa total: ${0}` }</p>;
    const AT_LEAST_ONE_EXPENSE = (
      <p data-testid="total-field">
        {`Despesa total: ${this.calculateTransaction()
          .toFixed(2)}`}
      </p>
    );
    this.calculateTransaction();
    const { email, expenses } = this.props;
    return (
      <main className="main-container">
        <header className="header-main">
          <div className="div-info-header">
            <p>Email: </p>
            <p data-testid="email-field">{ email }</p>
          </div>
          <div className="div-info-header">
            {
              expenses.length > 0
                ? AT_LEAST_ONE_EXPENSE
                : ZERO_EXPENSE
            }
          </div>
          <div className="div-info-header">
            <p data-testid="header-currency-field">Moeda Atual: BRL</p>
          </div>
        </header>
        <Table />
      </main>
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
