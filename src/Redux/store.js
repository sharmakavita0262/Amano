import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { autocompleteApi } from '../API/Location';
import { forecastApi } from '../API/Weather';

const combinedReducer = combineReducers({
  [autocompleteApi.reducerPath]: autocompleteApi.reducer,
  [forecastApi.reducerPath]: forecastApi.reducer,
});

export default configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(autocompleteApi.middleware,
      forecastApi.middleware
    ),
  devTools: 'development' === 'development',
});
