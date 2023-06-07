
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const forecastApi = createApi({
    reducerPath: 'forecastApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://api.weatherapi.com/v1' }),
    endpoints: (builder) => ({
        getWeather: builder.query({
            query: (query) => {
                return {
                    url: `/forecast.json`,
                    params: {
                        key: 'fae62d759c454a48b7853744232601',
                        q: `${query?.lat},${query?.lon}`,
                        days: 7,
                        aqi: 'no',
                        alerts: 'no',
                    }
                }
            },
        }),
        getWeatherHistory: builder.query({
            query: (query) => {
                return {
                    url: `/history.json`,
                    params: {
                        key: 'fae62d759c454a48b7853744232601',
                        q: `${query?.lat},${query?.lon}`,
                        // days: 7,
                        aqi: 'no',
                        alerts: 'no',
                        dt: query?.dt,
                        end_dt: query?.end_dt
                    }
                }
            },
        }),
    }),
});

export const { useLazyGetWeatherQuery, useLazyGetWeatherHistoryQuery } = forecastApi;
