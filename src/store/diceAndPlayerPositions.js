import { createSlice } from "@reduxjs/toolkit";

const activePlayer = 1;
const playersPosition = { player1: 1, player2: 1 };
const playersInJail = { p1InJail: 0, p2InJail: 0 };
const circlesPassed = { p1circle: false, p2circle: false };
const playersIsActive = {
    player1IsActive: true,
    player2IsActive: false,
};

const diceAndPositionsSlice = createSlice({
    name: "dice",
    initialState: {
        firstDice: 0,
        secondDice: 0,
        firstFightDice: null,
        secondFightDice: null,
        fightDiceIsDropted: false,
        showFightDices: false,
        winner: 0,
        playersPosition: { ...playersPosition, ...playersIsActive, ...playersInJail, ...circlesPassed },
        activePlayer: activePlayer,
    },
    reducers: {
        rouletteMoving(state, action) {
            const field = action.payload[0];
            const player = action.payload[1];
            console.log(field);
            console.log(player);
            if (field === "start") {
                state.playersPosition[player] = 1;
            }
            if (field === "field4") {
                state.playersPosition[player] = 4;
            }
            if (field === "field12") {
                state.playersPosition[player] = 12;
            }
            if (field === "field28") {
                state.playersPosition[player] = 28;
            }
            if (field === "field36") {
                state.playersPosition[player] = 36;
            }
            if (field === "field23") {
                state.playersPosition[player] = 23;
            }
            if (field === "field47") {
                state.playersPosition[player] = 47;
            }
        },
        nextTurn(state, action) {
            if (state.firstDice === state.secondDice) {
                return;
            }

            if (state.activePlayer === Object.keys(playersPosition).length) {
                state.activePlayer = 1;
                return;
            }
            state.activePlayer += 1;
        },
        dropTwoDices(state) {
            // state.firstDice = Math.trunc(Math.random() * 6) + 1;
            // state.secondDice = Math.trunc(Math.random() * 6) + 1;
            state.firstDice = 2;
            state.secondDice = 1;
        },
        dropFightDices(state) {
            state.firstFightDice = Math.trunc(Math.random() * 6) + 1;
            state.secondFightDice = Math.trunc(Math.random() * 6) + 1;
            state.showFightDices = true;
            state.fightDiceIsDropted = true;
        },

        hideFightDices(state) {
            console.log("reset");
            state.fightDiceIsDropted = false;
            state.showFightDices = false;
            state.firstFightDice = null;
            state.secondFightDice = null;
            state.winner = 0;
        },
        winner(state, action) {
            state.winner = action.payload;
        },
        addStep(state) {
            const addSteps = state.firstDice + state.secondDice;

            if (state.activePlayer === 1) {
                state.playersPosition.p2circle = false;
                const totalSteps = state.playersPosition.player1 + addSteps;

                if (state.playersPosition.p1InJail === 0) {
                    if (state.firstDice !== state.secondDice) {
                        state.playersPosition.player1IsActive = false;
                        state.playersPosition.player2IsActive = true;
                    }
                    if (totalSteps > 48) {
                        state.playersPosition.p1circle = true;

                        state.playersPosition.player1 = totalSteps - 48;
                    }
                    if (totalSteps <= 48) {
                        state.playersPosition.player1 += addSteps;
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
                state.playersPosition.p1circle = false;
                const totalSteps = state.playersPosition.player2 + addSteps;
                if (state.playersPosition.p2InJail === 0) {
                    if (state.firstDice !== state.secondDice) {
                        state.playersPosition.player2IsActive = false;
                        state.playersPosition.player1IsActive = true;
                    }

                    if (totalSteps > 48) {
                        state.playersPosition.p2circle = true;

                        state.playersPosition.player2 = totalSteps - 48;
                    }
                    if (totalSteps <= 48) {
                        state.playersPosition.player2 += addSteps;
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
            state.playersPosition[`${action.payload}`] = 3;
        },
        setInJail(state, action) {
            action.payload === "player1"
                ? (state.playersPosition.p1InJail = 0)
                : (state.playersPosition.p2InJail = 0);
        },
    },
});

export default diceAndPositionsSlice.reducer;
export const {
    dropFightDices,
    dropTwoDices,
    addStep,
    nextTurn,
    inJail,
    showFightDices,
    hideFightDices,
    winner,
    rouletteMoving,
    setInJail,
} = diceAndPositionsSlice.actions;

// export const thunk = () => (dispatch, getState) => dispatch(dropTwoDices());
