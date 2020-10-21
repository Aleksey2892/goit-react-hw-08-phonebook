import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import authReducer from './auth/authReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  // middleware: getDefaultMiddleware(),
});

export default store;

// {
// user {
//   name: 'alex';
//   email: 'aleksey2892@gmail.com';
// }
// token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjhlZmMyNzYwYzdiYTAwMTc1MmQwOTkiLCJpYXQiOjE2MDMyMDYxODN9.7Je8km40BOVwS3dd5vXfV29hTsBoWHta30z_yFOviTU';
// }
