export type TRawCity = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country_code: string;
  admin1?: string;
};

export type TRawCitySearch = {
  results: TRawCity[];
};
