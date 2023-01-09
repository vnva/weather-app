import { call, put, select, takeLatest } from 'redux-saga/effects';

import { TCity } from '../../city/model/types';
import { weatherApi } from '../api';

import { TWeather } from './types';

import { weatherSlice } from '.';

export function* fetchWeather() {
  const city: TCity = yield select((state: RootState) => state.weather.city);

  try {
    const weather: TWeather = yield call(weatherApi.fetchWeather, {
      latitude: city.latitude,
      longitude: city.longitude,
    });
    yield put(weatherSlice.actions.fetchWeatherSuccess(weather));
  } catch (e) {
    yield put(weatherSlice.actions.fetchWeatherFailed());
  }
}

export function* weatherSagas() {
  yield takeLatest(weatherSlice.actions.fetchWeather.type, fetchWeather);
  yield takeLatest(weatherSlice.actions.setWeatherCity.type, fetchWeather);
}
