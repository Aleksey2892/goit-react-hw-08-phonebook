import axios from 'axios';
import contactsActions from './contactsActions';
import toastr from '../../components/assets/toastrConfig/toastrConfig';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    toastr['error'](
      'Something wrong/Что-то пошло не так.',
      'Error for get contacts/Ошибка при загрузке контактов',
    );

    dispatch(contactsActions.fetchContactsError(error));
  }
};

const addContact = contactData => async dispatch => {
  dispatch(contactsActions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contactData);

    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    toastr['error'](
      'Something wrong/Что-то пошло не так.',
      'Error for add contact/Ошибка при добавлении контакта',
    );

    dispatch(contactsActions.addContactError(error));
  }
};

const delContact = contactId => async dispatch => {
  dispatch(contactsActions.delContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);

    dispatch(contactsActions.delContactSuccess(contactId));
  } catch (error) {
    toastr['error'](
      'Something wrong/Что-то пошло не так.',
      'Error for delete contact/Ошибка при удалении контакта',
    );

    dispatch(contactsActions.delContactError(error));
  }
};

export default { fetchContacts, addContact, delContact };
