import { TCity } from '../../city/model/types';

export type TWeatherInitialState = {
  isLoading: boolean;
  weather: TWeather | null;
  city: TCity | null;
};

export type TWeather = {
  temperature: number;
};
