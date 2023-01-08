export type TWeatherInitialState = {
  isLoading: boolean;
  weather: TWeather | null;
  longitude: number | null;
  latitude: number | null;
};

export type TWeather = {
  temperature: number;
};
