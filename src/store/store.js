import { configureStore } from "@reduxjs/toolkit";
import diceReducer from "./diceAndPlayerPositions";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import fieldsReducer from "./fields";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage,
};

const reducer = combineReducers({ dice: diceReducer, fields: fieldsReducer });

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

// export const persistor = persistStore(store);
