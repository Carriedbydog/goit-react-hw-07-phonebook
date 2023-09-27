import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './phonebook/slice';

export const store = configureStore({
  reducer: contactsReducer,
});
