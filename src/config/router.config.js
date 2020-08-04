import React from "react";
import { Home } from "../pages";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import LoginRoute from "../components/login/LoginRoute";
import UserRoute from "../components/user/UserRoute";
import ScrollToTop from "../utils/ScrollToTop";
import asyncComponent from "./AsyncComponent";

const routerConfig = ({ history }) => (
  <Router history={history}>
    <ScrollToTop>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            component={asyncComponent(() => import("../pages/Home"))}
          />
          <Route
            path="/download"
            component={asyncComponent(() =>
              import("../components/download/LoadApp")
            )}
          />
          <Route
            path="/city"
            component={asyncComponent(() => import("../pages/City"))}
          />
          <Route
            path="/search"
            component={asyncComponent(() => import("../pages/Search"))}
          />
          <Route
            path="/detail/:id"
            exact
            component={asyncComponent(() => import("../pages/Detail"))}
          />
          <Route
            path="/detail/:id/subbranch"
            exact
            component={asyncComponent(() =>
              import("../components/detail/shopList/Subbranch")
            )}
          />
          <Route
            path="/shop/:id"
            exact
            component={asyncComponent(() => import("../pages/Shop"))}
          />
          <Route
            path="/shop/:id/photos"
            exact
            component={asyncComponent(() => import("../pages/Photos"))}
          />
          <Route
            path="/shop/:id/review_all"
            exact
            component={asyncComponent(() =>
              import("../components/shop/ReviewAll")
            )}
          />
          <Route
            path="/delicious"
            component={asyncComponent(() => import("../pages/Delicious"))}
          />
          <Route
            path="/submit/:id"
            exact
            component={asyncComponent(() => import("../pages/Submit"))}
          />
          <Route
            path="/submit/:id/#ticketList"
            component={asyncComponent(() =>
              import("../components/submit/Ticket")
            )}
          />
          <LoginRoute
            path="/login"
            exact
            component={asyncComponent(() => import("../pages/Login"))}
          />
          <LoginRoute
            path="/login/account"
            component={asyncComponent(() => import("../pages/Login"))}
          />
          <UserRoute
            path="/user"
            component={asyncComponent(() => import("../pages/User"))}
          />
          <Route
            path="/welfare"
            component={asyncComponent(() => import("../pages/Welfare"))}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </ScrollToTop>
  </Router>
);

//<stlye jsx global></style> 用于加载全局样式

export default routerConfig;
