import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenses, editForm } from '../actions';
import Form from './Form';

class Table extends Component {
  tableBody() {
    const { expenses, del, edit, editBoolean } = this.props;
    return (
      <tbody>
        {expenses.map((item) => {
          const { description, tag, method, value } = item;
          const moeda = item.exchangeRates[item.currency].name;
          const cambio = (+item.exchangeRates[item.currency].ask).toFixed(2);
          const valor = ((item.value)
          * (item.exchangeRates[item.currency].ask)).toFixed(2);
          return (
            <tr key={ item.id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{moeda}</td>
              <td>{cambio}</td>
              <td>{valor}</td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => del(item.id) }
                  disabled={ editBoolean }
                >
                  Excluir
                </button>
                <button
                  data-testid="edit-btn"
                  type="button"
                  disabled={ editBoolean }
                  onClick={ () => edit(!editBoolean) }
                >
                  Editar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
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
    return (
      <>
        <Form />
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          {this.tableBody()}
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  editBoolean: state.wallet.editForm,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  del: (task) => dispatch(deleteExpenses(task)),
  edit: (task) => dispatch(editForm(task)),
});

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
