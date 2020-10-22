import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { authOperations } from '../redux/auth';
import routes from '../routes';
import PropTypes from 'prop-types';

// import PhonebookPage from '../views/PhonebookPage';
// import Register from '../views/Register';
// import Login from '../views/Login';
// import Navigation from './Navigation/Navigation';
// import UserBar from './UserBar/UserBar';
import { PublicRoute, PrivateRoute } from './CustomRoutes/';

const HomePage = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "home-page" */),
);
const PhonebookPage = lazy(() =>
  import('../views/PhonebookPage' /* webpackChunkName: "phonebook-page" */),
);
const Register = lazy(() =>
  import('../views/Register' /* webpackChunkName: "register-page" */),
);
const Login = lazy(() =>
  import('../views/Login' /* webpackChunkName: "login-page" */),
);
const Navigation = lazy(() =>
  import('./Navigation/Navigation' /* webpackChunkName: "navigation-page" */),
);
const UserBar = lazy(() =>
  import('./UserBar/UserBar' /* webpackChunkName: "user-view" */),
);

class App extends React.Component {
  static propTypes = {
    getLoginWithLoading: PropTypes.func.isRequired,
  };

  componentDidMount() {
    console.log('app');
    this.props.getLoginWithLoading();
  }

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <header>
            <Navigation />
            <UserBar />
          </header>

          <hr />
          <br />
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <PublicRoute
              path={routes.registration}
              exact
              component={Register}
            />
            <Route path={routes.login} component={Login} />
            <PrivateRoute
              path={routes.contacts}
              exact
              component={PhonebookPage}
            />
            {/* <Route path={routes.contacts} component={PhonebookPage} /> */}
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  getLoginWithLoading: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
