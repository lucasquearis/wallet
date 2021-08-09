import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">
            Despesa total:
            {0}
          </p>
        </header>
        <div>TrybeWallet</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
