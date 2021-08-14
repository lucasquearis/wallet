import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchAPI } from '../actions';
import FormButton from './FormButton';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
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
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  render() {
    const pagamento = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { isLoading, currencies } = this.props;
    const currenciesFilter = currencies.filter((moeda) => moeda !== 'USDT');
    if (isLoading) {
      return (<h1>Carregando...</h1>);
    }
    return (
      <fieldset>
        <label
          htmlFor="valor"
        >
          Valor
          <input name="valor" onChange={ this.handleChange } id="valor" type="number" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            name="descricao"
            onChange={ this.handleChange }
            id="descricao"
            type="text"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" onChange={ this.handleChange } id="moeda">
            {currenciesFilter
              .map((moeda, index) => <option key={ index }>{moeda}</option>)}
          </select>
        </label>
        <label htmlFor="metodo-pagamento">
          Método de pagamento
          <select name="pagamento" onChange={ this.handleChange } id="metodo-pagamento">
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
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
