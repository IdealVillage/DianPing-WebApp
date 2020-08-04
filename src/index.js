import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./config/router.config";
import configureStore, { history } from "./redux";
import Global from "./config/global";
import Loadable from "react-loadable";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Routes history={history} />
      <Global />
    </div>
  </Provider>,
  document.getElementById("app")
);
