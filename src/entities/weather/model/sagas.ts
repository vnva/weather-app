import { call, put, takeLatest } from 'redux-saga/effects';

import { weatherApi } from '../api';

import { TWeather } from './types';

import { weatherSlice } from '.';

export function* fetchWeather(
  action: ReturnType<typeof weatherSlice.actions.fetchWeather>
) {
  try {
    const weather: TWeather = yield call(weatherApi.fetchWeather, {
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
    });
    yield put(weatherSlice.actions.fetchWeatherSuccess(weather));
  } catch (e) {
    yield put(weatherSlice.actions.fetchWeatherFailed());
  }
}

export function* weatherSagas() {
  yield takeLatest(weatherSlice.actions.fetchWeather.type, fetchWeather);
}
