import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormButton extends Component {
  render() {
    const { editBoolean, handleClick } = this.props;
    return (
      <button onClick={ handleClick } type="button">
        {editBoolean ? 'Editar Gasto' : 'Adicionar despesas'}
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  editBoolean: state.wallet.editForm,
});

FormButton.propTypes = {
  state: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps)(FormButton);
