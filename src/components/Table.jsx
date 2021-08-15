import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
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
                <td><button type="button">Editar/Excluir</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Table);
