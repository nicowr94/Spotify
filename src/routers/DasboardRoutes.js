import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../components/pages/Home/Home";
import FavoritosPage from "../components/pages/Favoritos/Favoritos";
import NotFound from "../components/pages/NotFound";

export default function DasboardRoutes() {
  return (
    <React.Fragment>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/favoritos" component={FavoritosPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
