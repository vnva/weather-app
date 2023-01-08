import { TWeather } from '../model/types';

import { TRawWeather } from './types';

export function mapWeather(data: TRawWeather): TWeather {
  return { temperature: data.current_weather.temperature };
}
