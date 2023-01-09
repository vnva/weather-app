import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../app/store';
import { citySlice } from '../../entities/city/model';
import { TCity } from '../../entities/city/model/types';
import { weatherSlice } from '../../entities/weather/model';
import { WeatherWidget } from '../../features/weather-widget';

import styles from './styles.module.scss';

export const WeatherPage = () => {
  const dispatch = useDispatch();

  const searchCitiesList = useAppSelector((state) => state.city.search.list);
  const weather = useAppSelector((state) => state.weather.weather);

  const handleSearchCity = (search: string) => {
    dispatch(citySlice.actions.fetchSearchCity(search));
  };

  const handleSelectCity = (city: TCity) => {
    dispatch(weatherSlice.actions.setWeatherCity(city));
  };

  return (
    <div className={styles.wrapper}>
      <WeatherWidget
        weather={weather}
        searchCitiesList={searchCitiesList}
        onSearchCity={handleSearchCity}
        onSelectCity={handleSelectCity}
      />
    </div>
  );
};
