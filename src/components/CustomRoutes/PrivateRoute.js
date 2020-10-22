import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

const PrivateRoute = ({ component: Component, isLogin, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props => {
      return isLogin ? (
        <Component {...props} />
      ) : (
        <Redirect to={routes.login} />
      );
    }}
  />
);

const mapStateToProps = state => ({
  isLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(PrivateRoute);
