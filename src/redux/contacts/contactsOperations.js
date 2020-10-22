import axios from 'axios';
import contactsActions from './contactsActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    console.log(data);
    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

const addContact = contactData => async dispatch => {
  dispatch(contactsActions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contactData);

    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

const delContact = contactId => async dispatch => {
  dispatch(contactsActions.delContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);

    dispatch(contactsActions.delContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.delContactError(error));
  }
};

export default { fetchContacts, addContact, delContact };
