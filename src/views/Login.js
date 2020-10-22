import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.resetState();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  resetState = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Login
        <label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(Login);
