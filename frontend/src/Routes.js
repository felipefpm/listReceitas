import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./Pages/Login";
import HomeList from "./Pages/HomeList";
import MyList from "./Pages/MyList";
import AddList from "./Pages/AddList";
import { isAuthenticated } from "./Services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: {
              form: props.location
            }
          }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/receitas" component={HomeList} />
      <PrivateRoute path="/minhasreceitas" component={MyList} />
      <PrivateRoute path="/novareceita" component={AddList} />
    </Switch>{" "}
  </BrowserRouter>
);

export default Routes;
