import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import routes from '../routes';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import s from './LoginPage.module.scss';

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
        <h2 className={s.titleLogin}>Login</h2>

        <form onSubmit={this.handleSubmit}>
          <label className={s.LoginLabel}>
            <TextField
              style={{ marginBottom: '10px' }}
              size="small"
              id="email"
              label="email"
              variant="outlined"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              style={{ marginBottom: '10px' }}
              size="small"
              id="password"
              label="password"
              variant="outlined"
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>

          <Button
            style={{ backgroundColor: 'rgba(255, 68, 0, 0.493)' }}
            type="submit"
            variant="contained"
            color="primary"
            size="small"
          >
            Log In
          </Button>
        </form>

        <p className={s.linkToRegister}>
          No login? Please go to the{' '}
          <Link to={routes.registration}>registration page</Link>
        </p>
      </>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(Login);
