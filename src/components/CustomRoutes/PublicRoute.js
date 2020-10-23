import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

const PublicRoute = ({
  component: Component,
  isLogin,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isLogin && restricted ? (
        <Redirect to={routes.contacts} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(PublicRoute);
