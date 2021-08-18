import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormDescription extends Component {
  render() {
    const { valueInput, handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          data-testid="description-input"
          name="description"
          onChange={ handleChange }
          id="description"
          type="text"
          value={ valueInput }
        />
      </label>
    );
  }
}

FormDescription.propTypes = {
  valueInput: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default FormDescription;
