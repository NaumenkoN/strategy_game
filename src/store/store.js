import { configureStore } from "@reduxjs/toolkit";
import diceReducer from "./diceAndPlayerPositions";
import fields from "./fields";

const store = configureStore({
    reducer: { dice: diceReducer, fields: fields },
});

export default store;
