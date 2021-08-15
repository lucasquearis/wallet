import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormMethod extends Component {
  render() {
    const { valueInput, handleChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select name="method" onChange={ handleChange } id="method">
          {valueInput
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
