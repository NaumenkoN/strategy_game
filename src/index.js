import React from "react";
import "./fonts/Montserrat-Regular.ttf";
import "./fonts/BreeSerif-Regular.ttf";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import { store } from "./store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
