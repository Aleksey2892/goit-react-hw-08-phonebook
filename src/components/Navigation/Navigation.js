import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

export default function Navigation() {
  return (
    <>
      <NavLink to={routes.home}>Home</NavLink>
      <NavLink to={routes.login}>Log In</NavLink>
      <NavLink to={routes.registration}>Registration</NavLink>
      <NavLink to={routes.contacts}>Contacts</NavLink>
    </>
  );
}
