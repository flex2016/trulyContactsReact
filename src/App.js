import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./routes";

import logo from "./assets/images/logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { GlobalProvider } from "./context/Provider";

const RenderRoute = (route) => {
  document.title = route.title || "TrulyContacts";

  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
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
