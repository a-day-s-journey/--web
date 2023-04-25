import * as Pages from 'pages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  const pages: any[] = Object.entries(Pages); //(string | object)
  return (
    <BrowserRouter>
      <Routes>
        {pages?.map((page) => {
          console.log(page);
          return <Route key={page[1].path} path={page[1].path} element={page[1].default()} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
