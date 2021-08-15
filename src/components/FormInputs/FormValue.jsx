import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormValue extends Component {
  render() {
    const { valueInput, handleChange } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input
          data-testid="value-input"
          name="value"
          onChange={ handleChange }
          type="number"
          id="value"
          value={ valueInput }
        />
      </label>
    );
  }
}

FormValue.propTypes = {
  valueInput: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default FormValue;
