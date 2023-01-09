import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCity } from '../../city/model/types';

import { TWeatherInitialState, TWeather } from './types';

const initialState: TWeatherInitialState = {
  weather: null,
  isLoading: false,
  city: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeather(state) {
      state.isLoading = true;
    },
    fetchWeatherSuccess(state, { payload }: PayloadAction<TWeather>) {
      state.isLoading = false;
      state.weather = payload;
    },
    fetchWeatherFailed(state) {
      state.isLoading = false;
    },
    setWeatherCity(state, { payload }: PayloadAction<TCity>) {
      state.city = payload;
    },
  },
});
