import { createBrowserRouter } from 'react-router-dom';

import { WeatherPage } from './weather';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WeatherPage />,
  },
]);
