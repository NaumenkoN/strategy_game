import { configureStore } from "@reduxjs/toolkit";
import playerPositionReducer from "./playerPosition";

const store = configureStore({
    reducer: { playerPositions: playerPositionReducer },
});

const a = 1;
export default store;
