import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router';

import { router } from '../pages';

import { store } from './store';

import './styles/index.scss';

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </ReduxProvider>
  );
};
