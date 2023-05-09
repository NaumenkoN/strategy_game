import { configureStore } from "@reduxjs/toolkit";
import playerPositionReducer from "./playerPosition";

const store = configureStore({
    reducer: { playerPositions: playerPositionReducer },
});

export default store;
