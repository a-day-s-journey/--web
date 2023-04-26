import * as PageList from '@pages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  interface PageType {
    path: string;
    default: JSX.Element;
  }

  const routes: PageType[] = Object.values(PageList).map((pageItem) => {
    return {
      path: pageItem['path'],
      default: pageItem.default(),
    };
  });

  return (
    <BrowserRouter>
      <Routes>
        {routes?.map((route) => (
          <Route key={route.path} path={route?.path} element={route?.default} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
