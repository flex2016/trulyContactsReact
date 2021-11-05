import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import routes from "./routes";

import logo from "./assets/images/logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { GlobalProvider } from "./context/Provider";
import isAuthenticated from "./utils/isAuthenticated";
import UserLeaveConfirmation from "./components/UserLeaveConfirmation";

const RenderRoute = (route) => {
  const history = useHistory();

  document.title = route.title || "TrulyContacts";
  if (route.needsAuth && !isAuthenticated()) {
    history.push("/auth/login");
  }
  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

function App() {
  const [confirmOpen, setConfirmOpen] = useState(true);
  return (
    <div className="App">
      <GlobalProvider>
        <Router
          getUserConfirmation={(message, callback) => {
            return UserLeaveConfirmation(
              message,
              callback,
              confirmOpen,
              setConfirmOpen
            );
          }}
        >
          <Switch>
            {routes.map((route, index) => (
              <RenderRoute {...route} key={index} />
            ))}
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
