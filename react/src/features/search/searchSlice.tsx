import { createSlice } from '@reduxjs/toolkit';
import { Store } from '../../types/types';

const initialState: Store = {
  localStorageValue: '',
  page: 1,
  limit: 10,
};

export const userSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLocalStorageValue: (state, action) => {
      state.localStorageValue = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { setLocalStorageValue, setPage, setLimit } = userSlice.actions;
export default userSlice.reducer;
