import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormCurrency extends Component {
  render() {
    const { valueInput, handleChange, value } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          data-testid="currency-input"
          value={ value }
          name="currency"
          onChange={ handleChange }
          id="currency"
        >
          {valueInput
            .map((moeda, index) => <option key={ index }>{moeda}</option>)}
        </select>
      </label>
    );
  }
}

FormCurrency.propTypes = {
  valueInput: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default FormCurrency;
