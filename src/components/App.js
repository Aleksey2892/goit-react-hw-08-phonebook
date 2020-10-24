import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { authOperations } from '../redux/auth';
import routes from '../routes';
import PropTypes from 'prop-types';
import Spinner from './Spinner/Spinner';

import { PublicRoute, PrivateRoute } from './CustomRoutes/';
import { Layout, Header } from './Layouts';
import Navigation from './Navigation/Navigation';

const HomePage = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "home-page" */),
);
const PhonebookPage = lazy(() =>
  import('../views/PhonebookPage' /* webpackChunkName: "phonebook-page" */),
);
const RegisterPage = lazy(() =>
  import('../views/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('../views/LoginPage' /* webpackChunkName: "login-page" */),
);
const UserBar = lazy(() =>
  import('./UserBar/UserBar' /* webpackChunkName: "user-view" */),
);

class App extends React.Component {
  static propTypes = {
    getLoginWithLoading: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLoginWithLoading();
  }

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Header>
            <Navigation />
            <UserBar />
          </Header>

          {/* <Spinner /> */}

          <Layout>
            <Switch>
              <PublicRoute
                path={routes.home}
                exact
                restricted={false}
                component={HomePage}
              />
              <PublicRoute
                path={routes.registration}
                exact
                restricted={true}
                component={RegisterPage}
              />
              <PublicRoute
                path={routes.login}
                exact
                restricted={true}
                component={LoginPage}
              />
              <PrivateRoute
                path={routes.contacts}
                exact
                component={PhonebookPage}
              />
              <Redirect to={routes.home} />
            </Switch>
          </Layout>
        </Suspense>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  getLoginWithLoading: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
