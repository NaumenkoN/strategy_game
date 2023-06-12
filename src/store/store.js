import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import diceReducer from "./diceAndPlayerPositions";
import fieldsReducer from "./fields";
import mainMenuReducer from "./mainMenu";

const persistConfig = {
    key: "root",
    storage,
};

const reducer = combineReducers({ dice: diceReducer, fields: fieldsReducer, menu: mainMenuReducer });

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});
