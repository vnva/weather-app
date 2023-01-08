import { call, debounce, put } from 'redux-saga/effects';

import { cityApi } from '../api';

import { TCity } from './types';

import { citySlice } from './index';

export function* fetchSearchCity(
  action: ReturnType<typeof citySlice.actions.fetchSearchCity>
) {
  try {
    const city: TCity[] = yield call(cityApi.fetchSearchCity, action.payload);
    yield put(citySlice.actions.fetchSearchCitySuccess(city));
  } catch (e) {
    yield put(citySlice.actions.fetchSearchCityFailed());
  }
}

export function* citySagas() {
  yield debounce(500, citySlice.actions.fetchSearchCity.type, fetchSearchCity);
}
