import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { toast } from 'react-hot-toast';
import { fetchTasks, addTask, deleteTask } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };




// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchTasks.pending]: handlePending,
//     [addTask.pending]: handlePending,
//     [deleteTask.pending]: handlePending,
//     [fetchTasks.rejected]: handleRejected,
//     [addTask.rejected]: handleRejected,
//     [deleteTask.rejected]: handleRejected,
//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [addTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [deleteTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [logOut.fulfilled](state) {
//       state.items = [];
//       state.error = null;
//       state.isLoading = false;
//     },
//   },
// });

const initialState = {
  items: [],
      isLoading: false,
      error: null,
  
};


const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
  toast.error(`Seems like an error occured. Try again later, please.`);
};
const tasksSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)

      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
        state.error = null;
        
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)

      .addCase(addTask.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.error = null;
        state.contacts.items.push(action.payload);
        toast.success(
          `${action.payload.name} was successfully added to your contacts.`
        );
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)

      .addCase(deleteTask.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
        toast.success(`${action.payload.name} was deleted from your contacts.`);
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.error = null;
        // state.showModal = false;
        toast.success(`Changes have been successfully saved.`);
      });
  },
});




export const tasksReducer = tasksSlice.reducer;
