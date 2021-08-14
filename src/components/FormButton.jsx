import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class FormButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { state, fetchMoedas } = this.props;
    fetchMoedas(state);
  }

  render() {
    return (
      <button onClick={ this.handleClick } type="button">
        Adicionar despesas
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: (state) => dispatch(fetchAPI(state)),
});

FormButton.propTypes = {
  state: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(FormButton);
