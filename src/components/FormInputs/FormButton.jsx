import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormButton extends Component {
  render() {
    const { editBoolean, handleClick, editButton } = this.props;
    return (
      <button onClick={ editBoolean ? editButton : handleClick } type="button">
        {editBoolean ? 'Editar despesa' : 'Adicionar despesas'}
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  editBoolean: state.wallet.editFormBoolean,
});

FormButton.propTypes = {
  state: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps)(FormButton);
