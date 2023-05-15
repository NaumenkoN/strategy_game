import { createSlice } from "@reduxjs/toolkit";

const activePlayer = 1;
const playersPosition = { player1: 1, player2: 1 };
const playersInJail = { p1InJail: 0, p2InJail: 0 };
const playersIsActive = {
    player1IsActive: true,
    player2IsActive: false,
};

const diceAndPositionsSlice = createSlice({
    name: "dice",
    initialState: {
        firstDice: 0,
        secondDice: 0,
        playersPosition: { ...playersPosition, ...playersIsActive, ...playersInJail },
        activePlayer: activePlayer,
    },
    reducers: {
        nextTurn(state) {
            if (state.firstDice === state.secondDice) {
                return;
            }
            if (state.activePlayer === Object.keys(playersPosition).length) {
                state.activePlayer = 1;
                return;
            }
            state.activePlayer += 1;
            console.log("+1");
        },
        dropTwoDices(state) {
            state.firstDice = Math.trunc(Math.random() * 6) + 1;
            state.secondDice = Math.trunc(Math.random() * 6) + 1;
        },
        addStep(state) {
            const addSteps = state.firstDice + state.secondDice;
            const totalSteps = state.playersPosition.player1 + addSteps;
            if (state.activePlayer === 1) {
                if (state.playersPosition.p1InJail === 0) {
                    if (totalSteps > 48) {
                        state.playersPosition.player1 = totalSteps - 48 - addSteps;
                    }
                    state.playersPosition.player1 += addSteps;

                    if (state.firstDice !== state.secondDice) {
                        state.playersPosition.player1IsActive = false;
                        state.playersPosition.player2IsActive = true;
                    }
                }
                if (state.playersPosition.p1InJail > 0 && state.firstDice === state.secondDice) {
                    state.playersPosition.p1InJail = 0;
                    state.activePlayer = 1;
                    return;
                }
                if (state.playersPosition.p1InJail > 0) {
                    state.playersPosition.p1InJail = state.playersPosition.p1InJail - 1;
                }
            }

            if (state.activePlayer === 2) {
                if (state.playersPosition.p2InJail === 0) {
                    const totalSteps = state.playersPosition.player2 + addSteps;

                    if (totalSteps > 48) {
                        state.playersPosition.player2 = totalSteps - 48 - addSteps;
                    }
                    state.playersPosition.player2 += addSteps;

                    if (state.firstDice !== state.secondDice) {
                        state.playersPosition.player2IsActive = false;
                        state.playersPosition.player1IsActive = true;
                    }
                }
                if (state.playersPosition.p2InJail > 0 && state.firstDice === state.secondDice) {
                    state.playersPosition.p2InJail = 0;
                    state.activePlayer = 2;
                    return;
                }
                if (state.playersPosition.p2InJail > 0) {
                    state.playersPosition.p2InJail = state.playersPosition.p2InJail - 1;
                }
            }
        },

        inJail(state, action) {
            state.playersPosition[`${action.payload}`] = 2;
        },
    },
});

export default diceAndPositionsSlice.reducer;
export const { dropTwoDices, addStep, nextTurn, inJail } = diceAndPositionsSlice.actions;

export const thunk = () => (dispatch, getState) => dispatch(dropTwoDices());
