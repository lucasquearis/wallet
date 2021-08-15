import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormTag extends Component {
  render() {
    const { valueInput, handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" onChange={ handleChange } id="tag">
          {valueInput.map((item, index) => <option key={ index }>{ item }</option>)}
        </select>
      </label>
    );
  }
}

FormTag.propTypes = {
  valueInput: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default FormTag;
