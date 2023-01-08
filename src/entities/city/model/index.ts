import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TCity, TCityInitialState } from './types';

const initialState: TCityInitialState = {
  search: {
    isLoading: false,
    list: null,
  },
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    fetchSearchCity(state, { payload }: PayloadAction<string>) {
      state.search.isLoading = true;
    },
    fetchSearchCitySuccess(state, { payload }: PayloadAction<TCity[]>) {
      state.search.isLoading = false;
      state.search.list = payload;
    },
    fetchSearchCityFailed(state) {
      state.search.isLoading = false;
    },
  },
});
