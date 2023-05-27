import { createSlice } from "@reduxjs/toolkit";

const fieldsSlice = createSlice({
    name: "fields",
    initialState: {
        player1: {
            money: 1000,
            stocks: 50,
            expectedTaxes: 0,
            fields: [],
            inJailRentalIndex: 1,
            creditCount: 3,
            debt: 0,
            isOpenBuyModal: false,
            isOpenSellStocksModal: false,
            isOpenBuildingModal: false,
        },
        player2: {
            money: 1000,
            stocks: 50,
            expectedTaxes: 0,
            fields: [],
            inJailRentalIndex: 1,
            creditCount: 3,
            debt: 0,
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
        isOpenSellConfirmModal: false,
        emergencySellActives: true,
        warningModal: false,

        fields: {
            1: { status: "start" },
            2: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            3: { status: "empty", floor: 1, price: 200, rentalAmount: 0, inArrest: false },
            4: {
                status: "emptyC",
                employees: 10,
                engineer: 1,
                manager: 1,
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
                employees: 10,
                engineer: 1,
                manager: 1,
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
                employees: 10,
                engineer: 1,
                manager: 1,
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
                employees: 10,
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
        hireEngineer(state, action) {
            // setting new walue to engineer field
            state.fields[`${action.payload[1]}`].engineer = 1.5;

            // getting money from player
            state[`${action.payload[0]}`].money -= 500;

            // setting new rental amount
            state.fields[`${action.payload[1]}`].rentalAmount =
                state.fields[`${action.payload[1]}`].price *
                (state.fields[`${action.payload[1]}`].employees / 10) *
                state.fields[`${action.payload[1]}`].engineer *
                state.fields[`${action.payload[1]}`].manager *
                0.3;
        },
        fireEngineer(state, action) {
            // setting new walue to engineer field
            state.fields[`${action.payload[1]}`].engineer = 1;

            // getting money from player
            state[`${action.payload[0]}`].money -= 250;

            // setting new rental amount
            state.fields[`${action.payload[1]}`].rentalAmount =
                state.fields[`${action.payload[1]}`].price *
                (state.fields[`${action.payload[1]}`].employees / 10) *
                state.fields[`${action.payload[1]}`].engineer *
                state.fields[`${action.payload[1]}`].manager *
                0.3;
        },
        closeWarningModal(state) {
            state.warningModal = false;
        },
        takeCredit(state, action) {
            // add money to player
            state[`${action.payload}`].money += 1000;
            // minusing attempt to take a credit
            state[`${action.payload}`].creditCount -= 1;
            // setting debt to player
            state[`${action.payload}`].debt += 1500;
        },
        creditReturning(state, action) {
            if (state[`${action.payload[0]}`].debt > 0) {
                if (
                    state[`${action.payload[0]}`].money < state[`${action.payload[0]}`].debt &&
                    state[`${action.payload[0]}`].fields.length !== 0
                ) {
                    fieldsSlice.caseReducers.openBuyBuildingModal(state, action);
                    state.emergencySellActives = false;
                    state.warningModal = true;
                    state.isOpenBuyModal = false;
                    state.isOpenBuyCommercialModal = false;
                }
                if (
                    state[`${action.payload[0]}`].money < state[`${action.payload[0]}`].debt &&
                    state[`${action.payload[0]}`].fields.length === 0
                ) {
                    state[`${action.payload[0]}`].isOpenSellStocksModal = true;
                    state.isOpenBuildingModal = false;
                    state.isOpenSellStocksModal = true;
                    state.emergencySellActives = false;
                    state.warningModal = true;
                }
                if (state[`${action.payload[0]}`].money > state[`${action.payload[0]}`].debt) {
                    state.emergencySellActives = true;
                    state[`${action.payload[0]}`].money -= state[`${action.payload[0]}`].debt;
                    state[`${action.payload[0]}`].debt = 0;
                    state.isOpenSellStocksModal = false;
                    state[`${action.payload[0]}`].isOpenSellStocksModal = false;
                    state[`${action.payload[0]}`].isOpenBuildingModal = false;
                }
            }
        },
        rentalAndSalesIndex(state, action) {
            if (action.payload[0] === "arrest") {
                state[`${action.payload[1]}`].fields.map((field) => {
                    state.fields[field].rentalAmount = state.fields[field].rentalAmount / 2;
                    console.log(state.fields[field].rentalAmount);
                });
                state[action.payload[1]].inJailRentalIndex = 0.5;
            }
            if (action.payload[0] === "free") {
                state[`${action.payload[1]}`].fields.map((field) => {
                    state[action.payload[1]].inJailRentalIndex = 1;
                    if (state.fields[field].floor) {
                        state.fields[field].rentalAmount =
                            state.fields[field].price * state.fields[field].floor * 0.25;
                    }
                    if (state.fields[field].employees) {
                        state.fields[field].rentalAmount =
                            state.fields[field].price *
                            (state.fields[field].employees / 10) *
                            state.fields[field].engineer *
                            state.fields[field].manager *
                            0.3;
                    }
                });
            }
        },
        expectedTaxes(state, action) {
            const expectedTaxesLiving = state[`${action.payload}`].fields
                .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
                .map((field) => [state.fields[field].price, state.fields[field].floor])
                .reduce((acc, item) => acc + item[0] * 0.03 * item[1], 0);

            const expectedTaxesCommercial = state[`${action.payload}`].fields
                .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
                .map((field) => [
                    state.fields[field].price,
                    state.fields[field].employees,
                    state.fields[field].engineer,
                    state.fields[field].manager,
                ])
                .reduce((acc, item) => acc + item[0] * 0.05 * (item[1] / 10) * item[2] * item[3], 0);

            state[`${action.payload}`].expectedTaxes = expectedTaxesLiving + expectedTaxesCommercial;
        },
        buyBuildings(state, action) {
            // checking is money to buy is not enought
            if (
                state[`${action.payload[0]}`].money <
                    state.fields[`${action.payload[1]}`].price * (action.payload[2] / 10) &&
                action.payload[3] === "commercial"
            ) {
                state.isOpenEnoughtlessMoneyModal = true;
            }
            if (
                state[`${action.payload[0]}`].money <
                    state.fields[`${action.payload[1]}`].price * action.payload[2] &&
                action.payload[3] === "living"
            ) {
                state.isOpenEnoughtlessMoneyModal = true;
            }
            // checking if money is enought
            if (
                state[`${action.payload[0]}`].money >=
                    state.fields[`${action.payload[1]}`].price * action.payload[2] &&
                action.payload[3] === "living"
            ) {
                // withdrawal money from player
                state[`${action.payload[0]}`].money -=
                    state.fields[`${action.payload[1]}`].price * action.payload[2];
                // setting new value of floors to the field
                state.fields[`${action.payload[1]}`].floor += +action.payload[2];

                // setting new rental amount
                state.fields[`${action.payload[1]}`].rentalAmount =
                    state.fields[`${action.payload[1]}`].price *
                    0.25 *
                    state.fields[`${action.payload[1]}`].floor *
                    state[`${action.payload[0]}`].inJailRentalIndex;
            }
            if (
                state[`${action.payload[0]}`].money >=
                    state.fields[`${action.payload[1]}`].price * (action.payload[2] / 10) &&
                action.payload[3] === "commercial"
            ) {
                // withdrawal money from player
                state[`${action.payload[0]}`].money -=
                    state.fields[`${action.payload[1]}`].price * (action.payload[2] / 10);
                // setting new value of floors to the field
                state.fields[`${action.payload[1]}`].employees += +action.payload[2];

                // setting new rental amount
                state.fields[`${action.payload[1]}`].rentalAmount =
                    state.fields[`${action.payload[1]}`].price *
                    0.3 *
                    (state.fields[`${action.payload[1]}`].employees / 10) *
                    state[`${action.payload[0]}`].inJailRentalIndex;
            }
        },
        getRidOfAssets(state, action) {
            if (action.payload[3] === "employees") {
                // checking is value of chosen employees not more then exist
                if (state.fields[`${action.payload[1]}`].employees < +action.payload[2]) {
                    return;
                }
                // fireing employees
                state.fields[`${action.payload[1]}`].employees -= +action.payload[2];
                // adding money to player
                state[`${action.payload[0]}`].money +=
                    (state.fields[`${action.payload[1]}`].price * (+action.payload[2] / 10)) / 2;
                //setting new rental amount
                state.fields[`${action.payload[1]}`].rentalAmount =
                    state.fields[`${action.payload[1]}`].price *
                    0.3 *
                    (state.fields[`${action.payload[1]}`].employees / 10) *
                    state[`${action.payload[0]}`].inJailRentalIndex;
            }
            if (action.payload[3] === "floors") {
                // checking is value of chosen floors not more then exist
                if (state.fields[`${action.payload[1]}`].floor < +action.payload[2]) {
                    return;
                }

                // setting new floor value
                state.fields[`${action.payload[1]}`].floor -= +action.payload[2];
                // adding money to player
                state[`${action.payload[0]}`].money +=
                    (state.fields[`${action.payload[1]}`].price * +action.payload[2]) / 2;
                //setting new rental amount
                state.fields[`${action.payload[1]}`].rentalAmount =
                    state.fields[`${action.payload[1]}`].price *
                    0.25 *
                    state.fields[`${action.payload[1]}`].floor *
                    state[`${action.payload[0]}`].inJailRentalIndex;
            }
            if (action.payload[3] === "livingFieldSell") {
                // setting new floor value and status

                state.fields[`${action.payload[1]}`].status = "empty";
                state.fields[`${action.payload[1]}`].floor = 1;
                // deleting fiedl from active player
                state[`${action.payload[0]}`].fields = state[`${action.payload[0]}`].fields.filter(
                    (field) => field !== action.payload[1]
                );
                // adding money to player
                state[`${action.payload[0]}`].money +=
                    (state.fields[`${action.payload[1]}`].price * +action.payload[2]) / 2;
                //setting new rental amount
                state.fields[`${action.payload[1]}`].rentalAmount = 0;
            }
            if (action.payload[3] === "CommercialFieldSell") {
                // setting new employees value and status
                state.fields[`${action.payload[1]}`].employees = 10;
                state.fields[`${action.payload[1]}`].status = "emptyC";
                // deleting fiedl from active player
                state[`${action.payload[0]}`].fields = state[`${action.payload[0]}`].fields.filter(
                    (field) => field !== action.payload[1]
                );
                // adding money to player
                state[`${action.payload[0]}`].money +=
                    (state.fields[`${action.payload[1]}`].price * (+action.payload[2] / 10)) / 2;
                //setting new rental amount
                state.fields[`${action.payload[1]}`].rentalAmount = 0;
            }
            //his block for debt returning
            if (state.emergencySellActives === false) {
                fieldsSlice.caseReducers.creditReturning(state, action);
            }
        },

        openBuyBuildingModal(state, action) {
            state.isOpenBuildingModal = true;
            state[`${action.payload[0]}`].isOpenBuildingModal = true;
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
        sellingStocks(state, action) {
            if (state[`${action.payload[0]}`].stocks >= action.payload[1]) {
                state[`${action.payload[0]}`].money += action.payload[1] * 20;
                state[`${action.payload[0]}`].stocks -= action.payload[1];
            }
            if (state.emergencySellActives === false) {
                fieldsSlice.caseReducers.creditReturning(state, action);
            }
        },

        closeSellConfirmModal(state, action) {
            state.isOpenSellConfirmModal = false;
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
            // getting Taxes

            state[`${action.payload}`].money -= state[`${action.payload}`].expectedTaxes;
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
                        0.25 *
                        state.fields[`${action.payload[0]}`].price *
                        state.fields[`${action.payload[0]}`].floor *
                        state[`${action.payload[1]}`].inJailRentalIndex;
                }
                if (action.payload[2] === "commercial") {
                    state.fields[`${action.payload[0]}`].rentalAmount =
                        state.fields[`${action.payload[0]}`].price *
                        0.3 *
                        state.fields[`${action.payload[0]}`].engineer *
                        state.fields[`${action.payload[0]}`].manager *
                        (state.fields[`${action.payload[0]}`].employees / 10) *
                        state[`${action.payload[1]}`].inJailRentalIndex;
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
    fireEngineer,
    hireEngineer,
    closeWarningModal,
    creditReturning,
    takeCredit,
    rentalAndSalesIndex,
    closeSellConfirmModal,
    expectedTaxes,
    openBuyBuildingModal,
    buyBuildings,
    getRidOfAssets,
    closeBuildingModal,
    sellingStocks,
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
