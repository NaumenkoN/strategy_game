import { createSlice } from "@reduxjs/toolkit";

const fieldsSlice = createSlice({
    name: "fields",
    initialState: {
        player1: { money: 1000, stocks: 100, fields: [], isOpenBuyModal: false },
        player2: { money: 1000, stocks: 100, fields: [], isOpenBuyModal: false },
        fields: {
            1: { status: "start" },
            2: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            3: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            4: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            5: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            6: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            7: { status: "roulette" },
            8: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            9: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            10: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            11: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            12: { status: "jail" },
            13: { status: "nothing" },
            14: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            15: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            16: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            17: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            18: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            19: { status: "roulette" },
            20: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            21: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            22: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            23: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            24: { status: "jail" },
            25: { status: "nothing" },
            26: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            27: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            28: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            29: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            30: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            31: { status: "roulette" },
            32: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            33: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            34: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            35: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            36: { status: "jail" },
            37: { status: "nothing" },
            38: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            39: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            40: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            41: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            42: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            43: { status: "roulette" },
            44: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            45: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            46: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            47: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            48: { status: "jail" },
        },
        isOpenBuyModal: false,
        isOpenJailModal: false,
        isOpenRouletteModal: false,
        isOpenEnoughtlessMoneyModal: false,
    },
    reducers: {
        rentalCounting(state, action) {
            state[`${action.payload[0]}`].money -= state.fields[`${action.payload[1]}`].rentalAmount;
            state[`${action.payload[2]}`].money += state.fields[`${action.payload[1]}`].rentalAmount;
        },
        openBuyModal(state, action) {
            if (state[`${action.payload[0]}`].money >= state.fields[`${action.payload[1]}`].price) {
                state.isOpenBuyModal = true;
                state[`${action.payload[0]}`].isOpenBuyModal = true;
            }
        },
        closeBuyModal(state) {
            state.isOpenBuyModal = false;
            state.player1.isOpenBuyModal = false;
            state.player2.isOpenBuyModal = false;
        },
        openJailModal(state) {
            state.isOpenJailModal = true;
        },
        closeJailModal(state) {
            state.isOpenJailModal = false;
        },
        openRouletteModal(state) {
            state.isOpenRouletteModal = true;
        },
        closeRouletteModal(state) {
            state.isOpenRouletteModal = false;
        },
        closeEnoughtlessMoneyModal(state) {
            state.isOpenEnoughtlessMoneyModal = false;
        },
        buyField(state, action) {
            if (state[`${action.payload[1]}`].money >= state.fields[`${action.payload[0]}`].price) {
                // setting field status with name of player whos owned
                state.fields[`${action.payload[0]}`].status = action.payload[1];
                // pushing the field number to array of player owned fields
                state[`${action.payload[1]}`].fields.push(action.payload[0]);
                // getting money from player and checking is it enought
                state[`${action.payload[1]}`].money -= state.fields[`${action.payload[0]}`].price;
                // setting rental amount
                state.fields[`${action.payload[0]}`].rentalAmount =
                    state.fields[`${action.payload[0]}`].floor * 0.25 * state.fields[`${action.payload[0]}`].price;
                fieldsSlice.caseReducers.closeBuyModal(state);
            }
        },
    },
});

export default fieldsSlice.reducer;
export const {
    buyField,
    rentalCounting,
    openBuyModal,
    closeBuyModal,
    openJailModal,
    closeJailModal,
    openRouletteModal,
    closeRouletteModal,
    openEnoughtlessMoneyModal,
    closeEnoughtlessMoneyModal,
} = fieldsSlice.actions;
