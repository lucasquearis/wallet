import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchAPI } from '../actions';
import FormButton from './FormButton';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchMoedas } = this.props;
    fetchMoedas();
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { successApi } = this.props;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
      exchangeRates: successApi,
    }));
  }

  render() {
    const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;
    return (
      <fieldset>
        <label
          htmlFor="value"
        >
          Valor:
          <input name="value" onChange={ this.handleChange } id="value" type="number" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            name="description"
            onChange={ this.handleChange }
            id="description"
            type="text"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" onChange={ this.handleChange } id="currency">
            {currencies
              .map((moeda, index) => <option key={ index }>{moeda}</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" onChange={ this.handleChange } id="method">
            {pagamento
              .map((item, index) => <option key={ index }>{item}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" onChange={ this.handleChange } id="tag">
            {tag.map((item, index) => <option key={ index }>{ item }</option>)}
          </select>
        </label>
        <FormButton state={ this.state } />
      </fieldset>
    );
  }
}

Form.propTypes = {
  isLoading: PropTypes.bool,
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  isLoading: state.wallet.isLoading,
  currencies: state.wallet.currencies,
  successApi: state.wallet.successApi,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
