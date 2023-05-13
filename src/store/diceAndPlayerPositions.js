import { createSlice } from "@reduxjs/toolkit";

const activePlayer = 1;
const playersPosition = { player1: 1, player2: 1 };
const playersIsActive = {
    player1IsActive: true,
    player2IsActive: false,
};

const diceAndPositionsSlice = createSlice({
    name: "dice",
    initialState: {
        firstDice: 0,
        secondDice: 0,
        playersPosition: { ...playersPosition, ...playersIsActive },
        activePlayer: activePlayer,
    },
    reducers: {
        dropTwoDices(state) {
            state.firstDice = Math.trunc(Math.random() * 6) + 1;
            state.secondDice = Math.trunc(Math.random() * 6) + 1;
        },
        addStep(state) {
            const addSteps = state.firstDice + state.secondDice;
            if (state.activePlayer === 1) {
                const totalSteps = state.playersPosition.player1 + addSteps;
                if (totalSteps > 48) {
                    state.playersPosition.player1 = totalSteps - 48 - addSteps;
                }
                state.playersPosition.player1 += addSteps;
                if (state.firstDice === state.secondDice) {
                    return;
                }
                if (state.firstDice !== state.secondDice) {
                    state.playersPosition.player1IsActive = false;
                    state.playersPosition.player2IsActive = true;
                }
            }
            if (state.activePlayer === 2) {
                state.playersPosition.player2IsActive = true;

                const totalSteps = state.playersPosition.player2 + addSteps;
                if (totalSteps > 48) {
                    state.playersPosition.player2 = totalSteps - 48 - addSteps;
                }
                state.playersPosition.player2 += addSteps;
                if (state.firstDice === state.secondDice) {
                    return;
                }
                if (state.firstDice !== state.secondDice) {
                    state.playersPosition.player2IsActive = false;
                    state.playersPosition.player1IsActive = true;
                }
            }
        },
        nextTurn(state) {
            if (state.firstDice === state.secondDice) {
                return;
            }
            if (state.activePlayer === Object.keys(playersPosition).length) {
                state.activePlayer = 1;
                return;
            }
            state.activePlayer += 1;
            // console.log("+1");
        },
    },
});

export default diceAndPositionsSlice.reducer;
export const { dropTwoDices, addStep, nextTurn } = diceAndPositionsSlice.actions;

export const thunk = () => (dispatch, getState) => dispatch(dropTwoDices());
