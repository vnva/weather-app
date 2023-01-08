import { TCity } from '../model/types';

import { TRawCity } from './types';

export function mapCity(data: TRawCity): TCity {
  const { id, name, longitude, latitude, country_code, admin1 } = data;

  const admins = [];

  if (admin1) admins.push(admin1);

  return {
    id,
    name,
    longitude,
    latitude,
    countryCode: country_code,
    admins,
  };
}
