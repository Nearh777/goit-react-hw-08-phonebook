import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/authOperations';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
  fetchContactsFromMmockapiIo,
  deleteContactFromMmockapiIo,
  // AddUploadContacts
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isDeleting = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    uploadContacts: [],
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [editContact.pending]: handlePending,
    [fetchContactsFromMmockapiIo.pending]: handlePending,
    [deleteContactFromMmockapiIo.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [editContact.rejected]: handleRejected,
    [fetchContactsFromMmockapiIo.rejected]: handleRejected,
    [deleteContactFromMmockapiIo.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },

    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
      state.uploadContacts = [];
    },

    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;

      state.items = state.items.filter(contact => contact.id !== payload);
    },

    [editContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(task => task.id === payload.id);

      state.items.splice(index, 1, payload);
    },

    [fetchContactsFromMmockapiIo.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const newUploadContacts = payload.map(item => {
        return {
          id: item.id,
          name: item.name,
          number: item.phone,
        };
      });

      state.uploadContacts = newUploadContacts;
    },

    [deleteContactFromMmockapiIo.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.uploadContacts = state.uploadContacts.filter(
        contact => contact.id !== payload
      );
    },

    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
