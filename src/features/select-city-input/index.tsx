import { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/store';
import { citySlice } from '../../entities/city/model';

import styles from './styles.module.scss';

export const SelectCityInput = () => {
  const dispatch = useAppDispatch();

  const list = useAppSelector((state) => state.city.search.list);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) return;

    dispatch(citySlice.actions.fetchSearchCity(event.target.value));
  };
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        onChange={handleSearch}
      ></input>
      {list && (
        <div className={styles.dropdown}>
          {list?.map((city) => (
            <button key={city.id} className={styles.dropdown__item}>
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
