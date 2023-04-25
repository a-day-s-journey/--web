import * as Pages from 'pages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  interface PageType {
    path: string;
    default: JSX.Element;
  }

  const routes: PageType[] = Object.values(Pages).map((page) => {
    return {
      path: page['path'],
      default: page.default(),
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
