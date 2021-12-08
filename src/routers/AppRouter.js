import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../components/pages/Login/Login";
import DasboardRoutes from "./DasboardRoutes";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";

export default function AppRouter() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute
            path="/"
            component={DasboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
}
