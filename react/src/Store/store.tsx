import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/search/searchSlice';
import { goodsApi } from '../components/ApiHelper/NewApi';

export const store = configureStore({
  reducer: {
    search: userSlice,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(goodsApi.middleware),
});
