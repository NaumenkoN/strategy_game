import { createSlice } from "@reduxjs/toolkit";

const playerPositionSlice = createSlice({
    name: "playersPosition",
    initialState: { player1: 1 },
    reducers: {
        addStep(state) {
            state.player1 += 1;
        },
    },
});

export default playerPositionSlice.reducer;
export const { addStep } = playerPositionSlice.actions;
