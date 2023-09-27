import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload
        );
      });
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, setFilter, deleteContact } = slice.actions;
