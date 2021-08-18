import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormMethod extends Component {
  render() {
    const { handleChange, value } = this.props;
    const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          data-testid="method-input"
          value={ value }
          name="method"
          onChange={ handleChange }
          id="method"
        >
          {pagamento
            .map((item, index) => <option key={ index }>{item}</option>)}
        </select>
      </label>
    );
  }
}

FormMethod.propTypes = {
  valueInput: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default FormMethod;
