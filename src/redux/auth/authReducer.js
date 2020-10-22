import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initUserState = { name: null, email: null };

const user = createReducer(initUserState, {
  [authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
  [authActions.registerSuccess]: (state, { payload }) => payload.user,
  [authActions.loginSuccess]: (state, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (state, { payload }) => payload.token,
  [authActions.loginSuccess]: (state, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.getCurrentUserError]: (state, { payload }) => payload,
  [authActions.registerError]: (state, { payload }) => payload,
  [authActions.loginError]: (state, { payload }) => payload,
  [authActions.logoutError]: (state, { payload }) => payload,

  [authActions.getCurrentUserSuccess]: () => null,
  [authActions.registerSuccess]: () => null,
  [authActions.loginSuccess]: () => null,
  [authActions.logoutSuccess]: () => null,
});

export default combineReducers({
  user,
  token,
  error,
});
