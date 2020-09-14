import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Loader } from "../components/loader";

const Home = lazy(() => import("../pages/home"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
