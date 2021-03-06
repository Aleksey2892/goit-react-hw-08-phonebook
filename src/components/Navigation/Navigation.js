import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';
import '../animations.scss';
import s from './Navigation.module.scss';

const Navigation = ({ isLogin }) => {
  const NavLinkContacts = (
    <NavLink
      className={s.link}
      activeClassName={s.activeLink}
      to={routes.contacts}
    >
      Contacts
    </NavLink>
  );

  const NavLinksLogin = (
    <>
      <NavLink
        className={s.link}
        activeClassName={s.activeLink}
        to={routes.login}
      >
        LogIn
      </NavLink>
      <NavLink
        className={s.link}
        activeClassName={s.activeLink}
        to={routes.registration}
      >
        Registration
      </NavLink>
    </>
  );

  return (
    <CSSTransition in={true} appear timeout={500} classNames="navigation">
      <nav className={s.nav}>
        <NavLink
          className={s.link}
          activeClassName={s.activeLink}
          to={routes.home}
        >
          Home
        </NavLink>

        {isLogin ? NavLinkContacts : NavLinksLogin}
      </nav>
    </CSSTransition>
  );
};

Navigation.propTypes = {
  isLogin: PropTypes.string,
};

const mapStateToProps = state => ({
  isLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(Navigation);
