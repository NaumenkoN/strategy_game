import { createSlice } from "@reduxjs/toolkit";

const diceAndPositionsSlice = createSlice({
    name: "dice",
    initialState: {
        firstDice: 6,
        secondDice: 6,
        firstFightDice: null,
        secondFightDice: null,
        fightDiceIsDropted: false,
        showFightDices: false,
        winner: 0,
        setUpTurnButtonIsClicked: false,
        gameIsStarted: false,
        p1PreviousPosition: 1,
        p2PreviousPosition: 1,
        playersPosition: {
            player1: 1,
            player2: 1,
            player1IsActive: true,
            player2IsActive: false,
            p1InJail: 0,
            p2InJail: 0,
            p1circle: false,
            p2circle: false,
        },
        activePlayer: 1,
    },
    reducers: {
        setPrevPosAsCurrent(state) {
            state.p1PreviousPosition = state.playersPosition.player1;
            state.p2PreviousPosition = state.playersPosition.player2;
        },
        startGameIndex(state) {
            state.gameIsStarted = true;
        },
        setPlayerFirstTurn(state, action) {
            state.setUpTurnButtonIsClicked = true;
            state.activePlayer = action.payload;
        },
        resetTurnButton(state) {
            state.setUpTurnButtonIsClicked = false;
        },
        restartPositions(state) {
            state.setUpTurnButtonIsClicked = false;
            state.activePlayer = 1;
            state.playersPosition.player1 = 1;
            state.playersPosition.player2 = 1;
            state.playersPosition.p1InJail = 0;
            state.playersPosition.p2InJail = 0;
            state.playersPosition.p1circle = false;
            state.playersPosition.p2circle = false;
            state.player1IsActive = true;
            state.player2IsActive = false;
            state.activePlayer = 1;
            state.firstDice = 6;
            state.secondDice = 6;
            state.firstFightDice = null;
            state.secondFightDice = null;
            state.fightDiceIsDropted = false;
            state.showFightDices = false;
            state.winner = 0;
            state.gameIsStarted = false;
            state.p1PreviousPosition = 1;
            state.p2PreviousPosition = 1;
        },
        rouletteMoving(state, action) {
            const field = action.payload[0];
            const player = action.payload[1];

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
        nextTurn(state) {
            if (state.firstDice === state.secondDice) {
                return;
            }

            state.activePlayer === 2 ? (state.activePlayer = 1) : (state.activePlayer = 2);
        },
        dropTwoDices(state) {
            state.firstDice = Math.trunc(Math.random() * 6) + 1;
            state.secondDice = Math.trunc(Math.random() * 6) + 1;
        },
        dropFightDices(state) {
            state.firstFightDice = Math.trunc(Math.random() * 6) + 1;
            state.secondFightDice = Math.trunc(Math.random() * 6) + 1;
            state.showFightDices = true;
            state.fightDiceIsDropted = true;
        },

        hideFightDices(state) {
            state.fightDiceIsDropted = false;
            state.showFightDices = false;
            state.firstFightDice = null;
            state.secondFightDice = null;
            state.winner = 0;
        },
        winner(state, action) {
            state.winner = action.payload;
        },
        addStep(state, action) {
            const addSteps = state.firstDice + state.secondDice;

            const player = action.payload;

            const player1Circle = player === "player1" ? "p1circle" : "p2circle";
            const player2Circle = player === "player2" ? "p2circle" : "p1circle";
            const playerInJail = player === "player1" ? "p1InJail" : "p2InJail";
            const player1IsActive = player === "player1" ? "player1IsActive" : "player2IsActive";
            const player2IsActive = player === "player2" ? "player2IsActive" : "player1IsActive";
            const addPreviousPositionToPlayer = player === "player1" ? "p1PreviousPosition" : "p2PreviousPosition";

            state[addPreviousPositionToPlayer] = state.playersPosition[player];
            state.playersPosition[player2Circle] = false;
            state.fightIsOver = true;
            state.rouletteIsFinish = true;
            const totalSteps = state.playersPosition[player] + addSteps;

            if (state.playersPosition[playerInJail] === 0) {
                if (totalSteps > 48) {
                    state.playersPosition[player1Circle] = true;

                    state.playersPosition[player] = totalSteps - 48;
                }
                if (totalSteps <= 48) {
                    state.playersPosition[player] += addSteps;
                }
                if (state.firstDice !== state.secondDice) {
                    state.playersPosition[player1IsActive] = false;
                    state.playersPosition[player2IsActive] = true;
                }
            }
            if (state.playersPosition[playerInJail] > 0 && state.firstDice === state.secondDice) {
                state.playersPosition[playerInJail] = 0;
                state.activePlayer = player === "player1" ? 1 : 2;
                return;
            }
            if (state.playersPosition[playerInJail] > 0) {
                state.playersPosition[playerInJail] = state.playersPosition[playerInJail] - 1;
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
    setPrevPosAsCurrent,
    resetTurnButton,
    setPlayerFirstTurn,
    restartPositions,
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
    startGameIndex,
} = diceAndPositionsSlice.actions;
