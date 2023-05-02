/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PageList from '@pages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  interface PageType {
    path: string;
    default: any; //HTMLElement; //React.ReactNode;
  }

  const routes: PageType[] = Object.values(PageList).map((pageItem) => {
    return {
      path: pageItem['path'],
      default: pageItem.default,
    };
  });
  return (
    <BrowserRouter>
      <Routes>
        {routes?.map((RouteItem) => {
          const RouteElemete: any = RouteItem.default;
          return (
            <Route key={RouteItem.path} path={RouteItem?.path} element={<RouteElemete />}></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
