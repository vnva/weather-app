import { all } from 'redux-saga/effects';

import { citySagas } from '../../entities/city/model/sagas';
import { weatherSagas } from '../../entities/weather/model/sagas';

export function* sagas() {
  yield all([weatherSagas(), citySagas()]);
}
