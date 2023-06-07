// api.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const autocompleteApi = createApi({
  reducerPath: 'autocompleteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://nominatim.openstreetmap.org' }),
  endpoints: (builder) => ({
    getLocationSuggestions: builder.query({
      query: (query) => `/search?q=${query}&format=json`,
    }),
  }),
});

export const { useGetLocationSuggestionsQuery } = autocompleteApi;
