import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            {" "}
            <App />
        </PersistGate>
    </Provider>
);
