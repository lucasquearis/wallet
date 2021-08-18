import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormTag extends Component {
  render() {
    const { handleChange, value } = this.props;
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="tag">
        Tag
        <select
          data-testid="tag-input"
          value={ value }
          name="tag"
          onChange={ handleChange }
          id="tag"
        >
          {tag.map((item, index) => <option key={ index }>{ item }</option>)}
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
