import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isLogin, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isLogin ? <Component {...props} /> : <Redirect to={routes.login} />
    }
  />
);

PrivateRoute.propTypes = {
  isLogin: PropTypes.string,
};

const mapStateToProps = state => ({
  isLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(PrivateRoute);
