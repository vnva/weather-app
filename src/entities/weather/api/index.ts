import axios from 'axios';

import { TWeather } from '../model/types';

import { TRawWeather } from './types';
import { mapWeather } from './utils';

export const weatherApi = {
  async fetchWeather({
    longitude,
    latitude,
  }: {
    longitude: number;
    latitude: number;
  }): Promise<TWeather> {
    const { data } = await axios.get<TRawWeather>(
      'https://api.open-meteo.com/v1/forecast?current_weather=true',
      {
        params: {
          longitude,
          latitude,
        },
      }
    );

    return mapWeather(data);
  },
};
