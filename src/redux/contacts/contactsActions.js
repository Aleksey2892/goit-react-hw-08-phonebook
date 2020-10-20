import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const delContactRequest = createAction('contacts/delRequest');
const delContactSuccess = createAction('contacts/delSuccess');
const delContactError = createAction('contacts/delError');

const filterContacts = createAction('contacts/changeFilter', ({ target }) => ({
  payload: target.value,
}));

export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  addContactRequest,
  addContactSuccess,
  addContactError,

  delContactRequest,
  delContactSuccess,
  delContactError,

  filterContacts,
};
