import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import routes from '../routes';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

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
        <form onSubmit={this.handleSubmit}>
          Registration
          <label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />

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
              placeholder="password (min 7 letters)"
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
            Register
          </Button>
        </form>

        <p>
          You have a login? Go to the login <Link to={routes.login}> page</Link>
        </p>
      </>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(Register);
