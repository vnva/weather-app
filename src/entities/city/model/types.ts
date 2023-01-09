export type TCityInitialState = {
  search: {
    list: null | TCity[];
    isLoading: boolean;
  };
};

export type TCity = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  countryCode: string;
  timeZone: string;
  admins: string[];
};
