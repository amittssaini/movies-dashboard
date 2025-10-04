import React from "react";
import ReactDOM from "react-dom/client";  // ✅ notice the change
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ create root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
