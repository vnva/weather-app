import { createRoot } from 'react-dom/client';

import { App } from './app';

const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(container!).render(<App />);
