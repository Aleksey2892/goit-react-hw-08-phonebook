import { authActions } from './';
import axios from 'axios';
import toastr from '../../components/assets/toastrConfig/toastrConfig';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const tokenForAxios = {
  setToken: token =>
    (axios.defaults.headers.common.Authorization = `Bearer ${token}`),

  unsetToken: () => (axios.defaults.headers.common.Authorization = ''),
};

const getCurrentUser = () => async (dispatch, getState) => {
  dispatch(authActions.getCurrentUserRequest());

  const {
    auth: { token: prevToken },
  } = getState();

  if (!prevToken) return;

  try {
    tokenForAxios.setToken(prevToken);

    const { data } = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    toastr['error'](
      'Something wrong/Что-то пошло не так.',
      'Auth error/Ошибка авторизации',
    );

    dispatch(authActions.getCurrentUserError(error));
  }
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);

    tokenForAxios.setToken(data.token);

    toastr['success'](
      '',
      'Registration successful/Вы успешно зарегистрировались.',
    );

    dispatch(authActions.registerSuccess({ data }));
  } catch (error) {
    toastr['error'](
      'Something wrong/Что-то пошло не так.',
      'Auth error/Ошибка авторизации',
    );

    dispatch(authActions.registerError(error));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);

    tokenForAxios.setToken(data.token);

    toastr['success']('', 'You are logged in/Вы успешно авторизовались.');

    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    toastr['error'](
      'Something wrong/Что-то пошло не так.',
      'Auth error/Ошибка авторизации',
    );

    dispatch(authActions.loginError(error));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');

    tokenForAxios.unsetToken();

    dispatch(authActions.logoutSuccess());
  } catch (error) {
    toastr['error'](
      'Something wrong/Что-то пошло не так.',
      'Auth error/Ошибка авторизации',
    );

    dispatch(authActions.logoutError(error));
  }
};

export default { getCurrentUser, register, logIn, logOut };
