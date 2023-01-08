import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TWeatherInitialState, TWeather } from './types';

const initialState: TWeatherInitialState = {
  weather: null,
  isLoading: false,
  longitude: localStorage.getItem('longitude')
    ? Number(localStorage.getItem('longitude'))
    : null,
  latitude: localStorage.getItem('latitude')
    ? Number(localStorage.getItem('latitude'))
    : null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeather(
      state,
      { payload }: PayloadAction<{ longitude: number; latitude: number }>
    ) {
      state.isLoading = true;
    },
    fetchWeatherSuccess: (state, { payload }: PayloadAction<TWeather>) => {
      state.isLoading = false;
      state.weather = payload;
    },
    fetchWeatherFailed(state) {
      state.isLoading = false;
    },
  },
});
