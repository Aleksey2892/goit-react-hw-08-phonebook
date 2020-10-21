import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsOperations from '../redux/contacts/contactsOperations';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Register from './Register/Register';
import Login from './Login/Login';
import Navigation from './Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';

class App extends React.Component {
  static propTypes = {
    contactsWithLoading: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // this.props.contactsWithLoading();
  }

  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route path={routes.login} component={Login} />
          <Route path={routes.registration} component={Register} />
        </Switch>

        <div>
          <h1>Phonebook</h1>

          <ContactForm />

          <h2>Contacts</h2>

          <Filter />

          <ContactList />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  contactsWithLoading: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);
