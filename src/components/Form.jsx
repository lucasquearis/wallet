import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchAPI } from '../actions';
import FormButton from './FormInputs/FormButton';
import FormValue from './FormInputs/FormValue';
import FormDescription from './FormInputs/FormDescription';
import FormCurrency from './FormInputs/FormCurrency';
import FormMethod from './FormInputs/FormMethod';
import FormTag from './FormInputs/FormTag';

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
    this.renderForm = this.renderForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    const { fetchMoedas } = this.props;
    fetchMoedas(this.state);
    this.setState({
      value: 0,
      description: '',
    });
  }

  renderForm() {
    const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { description, value } = this.state;
    const { currencies } = this.props;
    return (
      <fieldset>
        <FormValue
          valueInput={ value }
          handleChange={ this.handleChange }
        />
        <FormDescription
          valueInput={ description }
          handleChange={ this.handleChange }
        />
        <FormCurrency
          valueInput={ currencies }
          handleChange={ this.handleChange }
        />
        <FormMethod
          valueInput={ pagamento }
          handleChange={ this.handleChange }
        />
        <FormTag
          valueInput={ tag }
          handleChange={ this.handleChange }
        />
        <FormButton handleClick={ this.handleClick } state={ this.state } />
      </fieldset>
    );
  }

  render() {
    return (
      this.renderForm()
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
  editBoolean: state.wallet.editForm,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: (state) => dispatch(fetchAPI(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
