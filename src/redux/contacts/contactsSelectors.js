import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getFilterValue = state => state.contacts.filter;

const getWithFilterContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const toLowerCaseFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(toLowerCaseFilter),
    );

    return filter ? filteredContacts : contacts;
  },
);

const getContactById = (state, contactId) => {
  const contacts = getContacts(state);

  return contacts.find(item => contactId === item.id);
};

export default {
  getContacts,
  getWithFilterContacts,
  getContactById,
  getFilterValue,
};
