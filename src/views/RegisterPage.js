import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import routes from '../routes';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import s from './RegisterPage.module.scss';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

class Register extends Component {
  static propTypes = {
    onRegister: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
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
        <h2 className={s.titleRegistration}>Registration</h2>

        <form onSubmit={this.handleSubmit}>
          <label className={s.registerLabel}>
            <TextField
              style={{ marginBottom: '10px' }}
              size="small"
              id="name"
              label="name"
              variant="outlined"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />

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
              name="password" /*(min 7 letters)*/
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
            Register
          </Button>
        </form>

        <p className={s.linkToLogin}>
          You have a login? Go to the <Link to={routes.login}>login page</Link>
        </p>
      </>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(Register);
