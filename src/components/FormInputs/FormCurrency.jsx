import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormCurrency extends Component {
  render() {
    const { valueInput, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select name="currency" onChange={ handleChange } id="currency">
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
