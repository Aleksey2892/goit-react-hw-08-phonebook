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
const loaderReducer = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.delContactRequest]: () => true,
  [contactsActions.delContactSuccess]: () => false,
  [contactsActions.delContactError]: () => false,
});
const errorReducer = createReducer(null, {
  [contactsActions.fetchContactsError]: errorContacts,
  [contactsActions.addContactError]: errorContacts,
  [contactsActions.delContactError]: errorContacts,

  [contactsActions.fetchContactsSuccess]: () => null,
  [contactsActions.addContactSuccess]: () => null,
  [contactsActions.delContactSuccess]: () => null,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loader: loaderReducer,
  error: errorReducer,
});
