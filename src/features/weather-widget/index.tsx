import { TCity } from '../../entities/city/model/types';
import { TWeather } from '../../entities/weather/model/types';

import { SelectCityInput } from './components/select-city-input';

import styles from './styles.module.scss';

type Props = {
  weather: TWeather | null;
  searchCitiesList: TCity[] | null;
  onSearchCity: (search: string) => void;
  onSelectCity: (city: TCity) => void;
};

export const WeatherWidget = ({
  weather,
  searchCitiesList,
  onSearchCity,
  onSelectCity,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <SelectCityInput
        list={searchCitiesList}
        onSearch={onSearchCity}
        onSelect={onSelectCity}
      />
      {weather?.temperature}
    </div>
  );
};
