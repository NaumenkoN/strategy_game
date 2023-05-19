import { createSlice } from "@reduxjs/toolkit";

const fieldsSlice = createSlice({
    name: "fields",
    initialState: {
        player1: {
            money: 4000,
            stocks: 50,
            fields: [],
            isOpenBuyModal: false,
            isOpenSellStocksModal: false,
            isOpenBuildingModal: false,
        },
        player2: {
            money: 4000,
            stocks: 50,
            fields: [],
            isOpenBuyModal: false,
            isOpenSellStocksModal: false,
            isOpenBuildingModal: false,
        },

        isOpenBuyModal: false,
        isOpenBuildingModal: false,
        isOpenSellStocksModal: false,
        isOpenJailModal: false,
        isOpenRouletteModal: false,
        isOpenEnoughtlessMoneyModal: false,
        isOpenFightModal: false,
        isOpenBuyCommercialModal: false,

        fields: {
            1: { status: "start" },
            2: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            3: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            4: {
                status: "emptyC",
                employees: 1,
                engineer: false,
                manager: false,
                price: 400,
                rentalAmount: 0,
                inArrest: false,
            },
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
            16: {
                status: "emptyC",
                employees: 1,
                engineer: false,
                manager: false,
                price: 400,
                rentalAmount: 0,
                inArrest: false,
            },
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
            28: {
                status: "emptyC",
                employees: 1,
                engineer: false,
                manager: false,
                price: 400,
                rentalAmount: 0,
                inArrest: false,
            },
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
            40: {
                status: "emptyC",
                employees: 1,
                engineer: 1,
                manager: 1,
                price: 400,
                rentalAmount: 0,
                inArrest: false,
            },
            41: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            42: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            43: { status: "roulette" },
            44: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            45: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            46: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            47: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            48: { status: "jail" },
        },
    },
    reducers: {
        buyBuildings(state, action) {
            if (
                state[`${action.payload[0]}`].money >=
                state.fields[`${action.payload[1]}`].price * action.payload[2]
            ) {
                // withdrawal money from player
                state[`${action.payload[0]}`].money -=
                    state.fields[`${action.payload[1]}`].price * action.payload[2];
                // setting new value of floors to the field
                state.fields[`${action.payload[1]}`].floor += +action.payload[2];
                // setting new field price
                state.fields[`${action.payload[1]}`].price *= state.fields[`${action.payload[1]}`].floor;
                // setting new rental amount
                state.fields[`${action.payload[1]}`].rentalAmount =
                    state.fields[`${action.payload[1]}`].price * 0.25;
            }
        },
        openBuyBuildingModal(state, action) {
            state.isOpenBuildingModal = true;
            state[`${action.payload}`].isOpenBuildingModal = true;
        },
        closeBuildingModal(state, action) {
            state.isOpenBuildingModal = false;
            state[`${action.payload}`].isOpenBuildingModal = false;
        },
        openSellStocksModal(state, action) {
            state.isOpenSellStocksModal = true;
            state[`${action.payload}`].isOpenSellStocksModal = true;
        },
        closeSellStocksModal(state) {
            state.isOpenSellStocksModal = false;
            state.player1.isOpenSellStocksModal = false;
            state.player2.isOpenSellStocksModal = false;
        },
        selling(state, action) {
            if (state[`${action.payload[0]}`].stocks >= action.payload[1]) {
                state[`${action.payload[0]}`].money += action.payload[1] * 20;
                state[`${action.payload[0]}`].stocks -= action.payload[1];
            }
        },
        rentalCounting(state, action) {
            state[`${action.payload[0]}`].money -= state.fields[`${action.payload[1]}`].rentalAmount;
            state[`${action.payload[2]}`].money += state.fields[`${action.payload[1]}`].rentalAmount;
        },
        fightWithdrawal(state, action) {
            state[`${action.payload[0]}`].money += 50;
            state[`${action.payload[1]}`].money -= 50;
        },
        circlePassMoney(state, action) {
            // adding circle pass money
            state[`${action.payload}`].money += state[`${action.payload}`].stocks * 10;
            // getting Land Taxes
            const landTax = state[`${action.payload}`].fields.reduce((acc, field) => {
                return acc + state.fields[`${field}`].price * 0.03;
            }, 0);
            state[`${action.payload}`].money -= landTax;
        },
        openBuyModal(state, action) {
            if (action.payload[2] === "living") {
                state.isOpenBuyModal = true;
                state[`${action.payload[0]}`].isOpenBuyModal = true;
            }
            if (action.payload[2] === "commercial") {
                state.isOpenBuyCommercialModal = true;
                state[`${action.payload[0]}`].isOpenBuyModal = true;
            }
        },
        closeBuyModal(state) {
            state.isOpenBuyModal = false;
            state.isOpenBuyCommercialModal = false;
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
                if (action.payload[2] === "living") {
                    state.fields[`${action.payload[0]}`].rentalAmount =
                        0.25 * state.fields[`${action.payload[0]}`].price;
                }
                if (action.payload[2] === "commercial") {
                    state.fields[`${action.payload[0]}`].rentalAmount =
                        state.fields[`${action.payload[0]}`].price *
                        0.3 *
                        state.fields[`${action.payload[0]}`].engineer *
                        state.fields[`${action.payload[0]}`].manager;
                }
                fieldsSlice.caseReducers.closeBuyModal(state);
                return;
            }
            state.isOpenBuyModal = false;
            state.isOpenEnoughtlessMoneyModal = true;
        },
        openFightModal(state, action) {
            state.isOpenFightModal = true;
        },
        closeFightModal(state) {
            state.isOpenFightModal = false;
        },
    },
});

export default fieldsSlice.reducer;
export const {
    openBuyBuildingModal,
    buyBuildings,
    closeBuildingModal,
    selling,
    openSellStocksModal,
    closeSellStocksModal,
    circlePassMoney,
    fightWithdrawal,
    openFightModal,
    closeFightModal,
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
