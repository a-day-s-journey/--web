import '@common/styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Router from '@router/router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>,
);
