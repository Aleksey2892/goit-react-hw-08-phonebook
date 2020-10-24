import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import routes from '../routes';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

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
      <>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
          >
            Log In
          </Button>
        </form>

        <p>
          No login? Please go to the
          <Link to={routes.registration}> registration</Link>
        </p>
      </>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(Login);
