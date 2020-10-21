import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initUserState = { name: null, email: null };

const user = createReducer(initUserState, {
  [authActions.registerSuccess]: (state, payload) => payload.user,
  [authActions.loginSuccess]: (state, { payload }) => payload.user,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (state, { payload }) => payload.token,
  [authActions.loginSuccess]: (state, { payload }) => payload.token,
});

export default combineReducers({
  user,
  token,
});
