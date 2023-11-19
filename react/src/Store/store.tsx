import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    search: userSlice,
  },
});
