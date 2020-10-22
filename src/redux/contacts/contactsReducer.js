import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { contactsActions } from './';

const errorContacts = (_, { payload }) => payload;
const fetchContacts = (_, { payload }) => payload;
const addContact = (state, { payload }) => [payload, ...state];
const filterContacts = (_, { payload }) => payload;
const delContact = (state, { payload }) => {
  return state.filter(contact => contact.id !== payload);
};

const itemsReducer = createReducer([], {
  [contactsActions.fetchContactsSuccess]: fetchContacts,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.delContactSuccess]: delContact,
});
const filterReducer = createReducer('', {
  [contactsActions.filterContacts]: filterContacts,
});
const errorReducer = createReducer(null, {
  [contactsActions.fetchContactsError]: errorContacts,
  [contactsActions.addContactError]: errorContacts,
  [contactsActions.delContactError]: errorContacts,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: errorReducer,
});
