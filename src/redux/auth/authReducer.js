import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initUserState = { name: null, email: null };

const user = createReducer(initUserState, {
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (state, { payload }) => payload.token,
  [authActions.loginSuccess]: (state, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,

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
