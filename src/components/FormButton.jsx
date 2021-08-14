import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormButton extends Component {
  render() {
    return (
      <button onClick={ this.handleClick } type="button">
        Adicionar despesas
      </button>
    );
  }
}

FormButton.propTypes = {
  state: PropTypes.object,
}.isRequired;

export default FormButton;
