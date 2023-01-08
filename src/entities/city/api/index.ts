import axios from 'axios';

import { TCity } from '../model/types';

import { TRawCitySearch } from './types';
import { mapCity } from './utils';

export const cityApi = {
  async fetchSearchCity(search: string): Promise<TCity[]> {
    const { data } = await axios.get<TRawCitySearch>(
      'https://geocoding-api.open-meteo.com/v1/search',
      {
        params: {
          name: search,
          language: 'ru',
        },
      }
    );

    return data.results.map(mapCity);
  },
};
