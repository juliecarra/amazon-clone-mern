import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <StripeProvider
    apiKey="pk_test_5Rm43jFTyejDme7DVCGe3ysg00yqiEg949
"
  >
    <Provider
      store={createStore(reducers, composeEnhancer(applyMiddleware(thunk)))}
    >
      <Router>
        <App />
      </Router>
    </Provider>
  </StripeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
