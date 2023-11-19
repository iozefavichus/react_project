import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    getGoods: build.query({
      query: () => `products`,
    }),
  }),
});

export const { useGetGoodsQuery } = goodsApi;
