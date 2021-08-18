import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchAPI, editExpense, editForm } from '../actions';
import FormButton from './FormInputs/FormButton';
import FormValue from './FormInputs/FormValue';
import FormDescription from './FormInputs/FormDescription';
import FormCurrency from './FormInputs/FormCurrency';
import FormMethod from './FormInputs/FormMethod';
import FormTag from './FormInputs/FormTag';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};
class Form extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.editButton = this.editButton.bind(this);
    this.updateExpense = this.updateExpense.bind(this);
  }

  componentDidMount() {
    const { fetchMoedas } = this.props;
    fetchMoedas();
  }

  componentDidUpdate() {
    const { editable } = this.props;
    if (editable) {
      this.editButton();
    }
  }

  setColorForm() {
    const { editFormBoolean } = this.props;
    if (editFormBoolean) {
      return 'fieldset-form-edit';
    }
    return 'fieldset-form';
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
    this.setState(INITIAL_STATE);
  }

  updateExpense() {
    const { edit, setBoolean, editFormBoolean } = this.props;
    edit(this.state);
    setBoolean(!editFormBoolean);
    this.setState(INITIAL_STATE);
  }

  editButton() {
    const { expenses, idEdit, setEditable } = this.props;
    const objSelected = expenses.find((item) => item.id === idEdit);
    const { value, description, currency, method, tag } = objSelected;
    setEditable(false);
    this.setState({
      value,
      description,
      currency,
      method,
      tag,
    });
  }

  renderForm() {
    const { description, value, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <fieldset className={ this.setColorForm() }>
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
          value={ currency }
        />
        <FormMethod
          handleChange={ this.handleChange }
          value={ method }
        />
        <FormTag
          handleChange={ this.handleChange }
          value={ tag }
        />
        <FormButton
          handleClick={ this.handleClick }
          editButton={ this.editButton }
          updateExpense={ this.updateExpense }
          state={ this.state }
        />
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
  currencies: state.wallet.currencies,
  successApi: state.wallet.successApi,
  expenses: state.wallet.expenses,
  idEdit: state.wallet.idEdit,
  editFormBoolean: state.wallet.editFormBoolean,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: (state) => dispatch(fetchAPI(state)),
  edit: (state) => dispatch(editExpense(state)),
  setBoolean: (state) => dispatch(editForm(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
