import { ChangeEvent, useState } from 'react';

import { TCity } from '../../../../entities/city/model/types';

import styles from './styles.module.scss';

type Props = {
  onSearch: (search: string) => void;
  onSelect: (city: TCity) => void;
  list: TCity[] | null;
};

// TODO: refactor this
export const SelectCityInput = ({ onSelect, onSearch, list }: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) return;

    setIsOpened(true);
    onSearch(event.target.value);
  };

  const handleSelectCity = (city: TCity) => () => {
    setIsOpened(false);
    onSelect(city);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        onChange={handleSearch}
        placeholder="Начните вводить название города"
      ></input>
      {isOpened && (
        <div className={styles.dropdown}>
          {list?.map((city) => (
            <button
              key={city.id}
              className={styles.dropdown__item}
              onClick={handleSelectCity(city)}
            >
              <img
                className={styles.dropdown__item__icon}
                crossOrigin="anonymous"
                src={`https://countryflagsapi.com/svg/${city.countryCode}`}
              />
              <span>
                {city.name}
                {city.admins.length ? ` - ${city.admins.join('')}` : null}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
