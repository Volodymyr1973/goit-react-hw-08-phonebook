import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "redux/auth/operations";
// import { nanoid } from "nanoid";
import { fetchContacts, addContacts, deleteContacts, changeContacts } from "./operations";

const handlePending = state => {
    state.isLoading = true;
  };
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  
  };

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            item: {},
            isLoading: false,
            error: null
          },
    },
    extraReducers: {
            [fetchContacts.pending]: handlePending,
            [addContacts.pending]: handlePending,
            [deleteContacts.pending]: handlePending,
            [changeContacts.pending]: handlePending,
            
            [fetchContacts.rejected]: handleRejected,
            [addContacts.rejected]: handleRejected,
            [deleteContacts.rejected]: handleRejected,
            [changeContacts.rejected]: handleRejected,

            [fetchContacts.fulfilled](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = action.payload;
            },
            [addContacts.fulfilled](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items.push(action.payload);
              
            },
            [deleteContacts.fulfilled](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                const index = state.contacts.items.findIndex(
                task => task.id === action.payload.id
                );
                state.contacts.items.splice(index, 1);
            },
            [changeContacts.fulfilled](state, action) {
              state.contacts.isLoading = false;
              state.contacts.error = null;
              const index = state.contacts.items.findIndex(
              task => task.id === action.payload.id
              );
              state.contacts.items.splice(index, 1, action.payload);
          },
            [logOut.fulfilled](state) {
              state.items = [];
              state.error = null;
              state.isLoading = false;
            },
            
            }  
        
})

// export const { fetchContacts, addContacts, deleteContacts } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;