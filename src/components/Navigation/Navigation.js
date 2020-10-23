import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

const Navigation = ({ isLogin }) => {
  const NavLinkContacts = <NavLink to={routes.contacts}>Contacts</NavLink>;
  const NavLinksLogin = (
    <>
      <NavLink to={routes.login}>Log In</NavLink>
      <NavLink to={routes.registration}>Registration</NavLink>
    </>
  );

  return (
    <>
      <nav>
        <NavLink to={routes.home}>Home</NavLink>

        {isLogin ? NavLinkContacts : NavLinksLogin}
      </nav>
    </>
  );
};

const mapStateToProps = state => ({
  isLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(Navigation);
