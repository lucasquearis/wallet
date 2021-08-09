import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { walletAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { fetchMoedas } = this.props;
    const API_URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(API_URL);
    const data = await response.json();
    Object.values(data).forEach((moeda) => fetchMoedas(moeda));
  }

  render() {
    const { email, currencies } = this.props;
    const pagamento = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const filterMoedas = currencies.filter((moeda) => moeda.codein !== 'BRLT');
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
        <fieldset>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="text" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input id="descricao" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              {
                filterMoedas
                  .map((moeda, index) => <option key={ index }>{moeda.code}</option>)
              }
            </select>
          </label>
          <label htmlFor="metodo-pagamento">
            Método de pagamento
            <select id="metodo-pagamento">
              {pagamento
                .map((item, index) => <option key={ index }>{item}</option>)}
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              {tag.map((item, index) => <option key={ index }>{ item }</option>)}
            </select>
          </label>
        </fieldset>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: (api) => dispatch(walletAction(api)),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
