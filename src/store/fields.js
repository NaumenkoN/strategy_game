import { createSlice } from "@reduxjs/toolkit";

const fieldsSlice = createSlice({
    name: "fields",
    initialState: {
        player1: {
            money: 600,
            stocks: 10,
            expectedTaxes: 0,
            fields: [],
            inJailRentalIndex: 1,
            jailFreeCard: 0,
            creditCount: 3,
            debt: 0,
            isOpenBuyModal: false,
            isOpenSellStocksModal: false,
            isOpenBuildingModal: false,
            isOpenBuyStocks: false,
            isOpenRouletteModal: false,
        },
        player2: {
            money: 600,
            stocks: 10,
            expectedTaxes: 0,
            fields: [],
            inJailRentalIndex: 1,
            jailFreeCard: 0,

            creditCount: 3,
            debt: 0,
            isOpenBuyModal: false,
            isOpenSellStocksModal: false,
            isOpenBuildingModal: false,
            isOpenBuyStocks: false,
            isOpenRouletteModal: false,
        },

        isOpenBuyModal: false,
        isOpenBuildingModal: false,
        isOpenSellStocksModal: false,
        isOpenJailModal: false,
        isOpenRouletteModal: false,
        rouletteSkocksModal: { isOpen: false, value: 0 },
        isOpenEnoughtlessMoneyModal: false,
        isOpenFightModal: false,
        isOpenBuyCommercialModal: false,
        isOpenSellConfirmModal: false,
        isOpenRouletteResultModal: false,
        emergencySellActives: true,
        warningModal: false,
        gameIsOver: false,
        rouletteItems: [
            "-100",
            "field12",
            "jailFree",
            "start",
            "field4",
            "-100",
            "field28",
            "+100",
            "-300",
            "field36",
            "-500",
            "jailFree",
            "field23",
            "field47",
            "start",
            "stocks10",
            "+100",
            "creditFree",
            "+300",
            "stocks30",
            "+500",
            "fieldsRepairing",
        ],
        rouletteState: null,

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
        settingPlayerRouletteisOpen(state) {
            state.rouletteState = null;
            state.player1.isOpenRouletteModal = false;
            state.player2.isOpenRouletteModal = false;
        },
        gameOver(state) {
            state.isOpenBuyModal = false;
            state.isOpenJailModal = false;
            state.isOpenRouletteModal = false;
            state.isOpenFightModal = false;
            state.isOpenRouletteResultModal = false;
            state.gameIsOver = true;
        },

        closeRouletteResultModal(state) {
            state.isOpenRouletteResultModal = false;
            state.player1.isOpenRouletteModal = false;
            state.player2.isOpenRouletteModal = false;
        },
        activateJailRealeaseCard(state, action) {
            state[`${action.payload}`].jailFreeCard -= 1;
            state[`${action.payload}`].inJailRentalIndex = 1;
        },
        closeRouletteStocksModal(state) {
            state.rouletteSkocksModal.isOpen = false;
            state.rouletteSkocksModal.value = 0;
            fieldsSlice.caseReducers.settingPlayerRouletteisOpen(state);
        },
        rouletteBuyStocks(state, action) {
            const player = action.payload;

            if (state[player].money >= state.rouletteSkocksModal.value * 20) {
                state[player].money -= state.rouletteSkocksModal.value * 20;
                state[player].stocks += state.rouletteSkocksModal.value;
                state.rouletteSkocksModal.isOpen = false;
                state.rouletteSkocksModal.value = 0;
                state[player].isOpenBuyStocks = false;
                fieldsSlice.caseReducers.closeRouletteResultModal(state);
            }
            if (state[player].money < state.rouletteSkocksModal.value * 20) {
                state.rouletteSkocksModal.isOpen = false;
                state.rouletteSkocksModal.value = 0;
                state.isOpenEnoughtlessMoneyModal = true;
                state[player].isOpenBuyStocks = false;
                fieldsSlice.caseReducers.closeRouletteResultModal(state);
            }
        },
        rouletteSpin(state, action) {
            const player = action.payload;

            const number = Math.trunc(Math.random() * 22);
            state.rouletteState = state.rouletteItems[number];
            const result = state.rouletteItems[number];
            if (result === "-100") {
                state.isOpenRouletteResultModal = true;
                state[player].money -= 100;
                state.isOpenRouletteModal = false;
            }
            if (result === "-300") {
                state.isOpenRouletteResultModal = true;
                state[player].money -= 300;
                state.isOpenRouletteModal = false;
            }
            if (result === "-500") {
                state.isOpenRouletteResultModal = true;
                state[player].money -= 500;
                state.isOpenRouletteModal = false;
            }
            if (result === "+100") {
                state.isOpenRouletteResultModal = true;
                state[player].money += 100;
                state.isOpenRouletteModal = false;
            }
            if (result === "+300") {
                state.isOpenRouletteResultModal = true;
                state[player].money += 300;
                state.isOpenRouletteModal = false;
            }
            if (result === "+500") {
                state.isOpenRouletteResultModal = true;
                state[player].money += 500;
                state.isOpenRouletteModal = false;
            }
            if (result === "jailFree") {
                state.isOpenRouletteResultModal = true;
                state[player].jailFreeCard += 1;
                // state[player].isOpenRouletteModal = false;
                state.isOpenRouletteModal = false;
            }

            if (result === "stocks10") {
                state[player].isOpenBuyStocks = true;
                state.isOpenRouletteModal = false;
                state.rouletteSkocksModal.isOpen = true;
                state.rouletteSkocksModal.value = 10;
            }
            if (result === "stocks30") {
                state[player].isOpenBuyStocks = true;
                state.isOpenRouletteModal = false;
                state.rouletteSkocksModal.isOpen = true;
                state.rouletteSkocksModal.value = 30;
            }
            if (result === "fieldsRepairing") {
                state.isOpenRouletteResultModal = true;
                state.isOpenRouletteModal = false;
                // state[player].isOpenRouletteModal = false;
                if (state[player].fields.length > 0) {
                    state[player].money -= state[player].fields.length * 100;
                }
            }

            if (result === "creditFree") {
                state.isOpenRouletteResultModal = true;
                state[player].debt = 0;
                state.isOpenRouletteModal = false;
                // state[player].isOpenRouletteModal = false;
            }
            if (result === "field23" || result === "field28" || result === "field47") {
                state.isOpenRouletteResultModal = true;
                state.isOpenRouletteModal = false;
            }
            if (result === "start" || result === "field4") {
                state.isOpenRouletteResultModal = true;
                state.isOpenRouletteModal = false;
                fieldsSlice.caseReducers.circlePassMoney(state, action);
            }
            if (result === "field12" || result === "field36") {
                state.isOpenRouletteModal = false;
                state.isOpenRouletteResultModal = true;
            }
        },
        hireManager(state, action) {
            if (state[`${action.payload[0]}`].money < 1000) {
                state.isOpenEnoughtlessMoneyModal = true;
            }
            if (state[`${action.payload[0]}`].money >= 1000) {
                // setting new value to manager field
                state.fields[`${action.payload[1]}`].manager = 1.5;

                // getting money from player
                state[`${action.payload[0]}`].money -= 1000;

                // setting new rental amount
                state.fields[`${action.payload[1]}`].rentalAmount =
                    state.fields[`${action.payload[1]}`].price *
                    (state.fields[`${action.payload[1]}`].employees / 10) *
                    state.fields[`${action.payload[1]}`].engineer *
                    state.fields[`${action.payload[1]}`].manager *
                    0.3;
            }
        },
        fireManager(state, action) {
            // setting new value to manager field
            state.fields[`${action.payload[1]}`].manager = 1;

            // getting money from player
            state[`${action.payload[0]}`].money += 500;

            // setting new rental amount
            state.fields[`${action.payload[1]}`].rentalAmount =
                state.fields[`${action.payload[1]}`].price *
                (state.fields[`${action.payload[1]}`].employees / 10) *
                state.fields[`${action.payload[1]}`].engineer *
                state.fields[`${action.payload[1]}`].manager *
                0.3;
        },

        hireEngineer(state, action) {
            if (state[`${action.payload[0]}`].money >= 500) {
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
            }
            if (state[`${action.payload[0]}`].money < 500) {
                state.isOpenEnoughtlessMoneyModal = true;
            }
        },
        fireEngineer(state, action) {
            // setting new walue to engineer field
            state.fields[`${action.payload[1]}`].engineer = 1;

            // getting money from player
            state[`${action.payload[0]}`].money += 250;

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
        debtReturning(state, action) {
            const player = action.payload[0];

            if (state[player].debt > 0) {
                if (state[player].money < state[player].debt && state[player].fields.length !== 0) {
                    fieldsSlice.caseReducers.openBuyBuildingModal(state, action);
                    state.emergencySellActives = false;
                    state.warningModal = true;
                    state.isOpenBuyModal = false;
                    state.isOpenBuyCommercialModal = false;
                }
                if (
                    state[player].money < state[player].debt &&
                    state[player].fields.length === 0 &&
                    state[player].stocks !== 0
                ) {
                    state[player].isOpenSellStocksModal = true;
                    state.isOpenBuildingModal = false;
                    state.isOpenSellStocksModal = true;
                    state.emergencySellActives = false;
                    state.warningModal = true;
                }
                if (state[player].money >= state[player].debt) {
                    state.emergencySellActives = true;
                    state[player].money -= state[player].debt;
                    state[player].debt = 0;
                    state.isOpenSellStocksModal = false;
                    state[player].isOpenSellStocksModal = false;
                    state[player].isOpenBuildingModal = false;
                }
                if (
                    state[player].money < state[player].debt &&
                    state[player].fields.length === 0 &&
                    state[player].stocks === 0
                ) {
                    fieldsSlice.caseReducers.gameOver(state);
                }
            }
        },
        moneyLessThenZero(state, action) {
            const player = action.payload[0];

            if (state[player].money < 0) {
                if (state[player].fields.length !== 0) {
                    state[player].isOpenBuildingModal = true;
                    fieldsSlice.caseReducers.openBuyBuildingModal(state, action);
                    state.emergencySellActives = false;
                    state.warningModal = true;
                    // state.isOpenBuyModal = false;
                    // state.isOpenBuyCommercialModal = false;
                    console.log("fields !== 0");
                }
                if (state[player].fields.length === 0 && state[player].stocks !== 0) {
                    state[player].isOpenSellStocksModal = true;
                    state[player].isOpenBuildingModal = true;

                    state.isOpenSellStocksModal = true;
                    state.emergencySellActives = true;
                    state.warningModal = true;
                    console.log("fields === 0 and stocks !== 0");
                }
                if (state[player].fields.length === 0 && state[player].stocks === 0) {
                    fieldsSlice.caseReducers.gameOver(state);
                    state.isOpenBuyModal = false;
                    state.isOpenSellStocksModal = false;
                    console.log("fields and stocks === 0");
                }
            }
            if (state[player].money >= 0) {
                console.log("money >= 0");

                state.emergencySellActives = true;
                state[player].isOpenBuildingModal = false;
                state[player].isOpenSellStocksModal = false;
                state.isOpenBuildingModal = false;
                state.isOpenSellStocksModal = false;
            }
        },
        rentalAndSalesIndex(state, action) {
            if (action.payload[0] === "arrest") {
                state[`${action.payload[1]}`].fields.map((field) => {
                    state.fields[field].rentalAmount = state.fields[field].rentalAmount / 2;
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
            if (state.emergencySellActives === false && state[`${action.payload[0]}`].debt > 0) {
                fieldsSlice.caseReducers.debtReturning(state, action);
            }
            //his block for money less then zero
            console.log(state.emergencySellActives);
            if (state.emergencySellActives === false) {
                state.isOpenBuildingModal = false;
                fieldsSlice.caseReducers.moneyLessThenZero(state, action);
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
                state.isOpenSellStocksModal = false;
                state.emergencySellActives = true;
            }
            if (state.emergencySellActives === false && state[`${action.payload[0]}`].debt > 0) {
                fieldsSlice.caseReducers.debtReturning(state, action);
            }
            if (state.emergencySellActives === false && state[`${action.payload[0]}`].money < 0) {
                fieldsSlice.caseReducers.moneyLessThenZero(state, action);
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
        closeFightModal(state) {
            state.isOpenFightModal = false;
        },
        circlePassMoney(state, action) {
            // adding circle pass money
            state[`${action.payload}`].money += state[`${action.payload}`].stocks * 10;
            // getting Taxes

            state[`${action.payload}`].money -= state[`${action.payload}`].expectedTaxes;
        },
        openBuyModal(state, action) {
            if (action.payload[2] === "living" && state[`${action.payload[0]}`].money >= 200) {
                state.isOpenBuyModal = true;
                state[`${action.payload[0]}`].isOpenBuyModal = true;
            }
            if (action.payload[2] === "commercial" && state[`${action.payload[0]}`].money >= 400) {
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
        openRouletteModal(state, action) {
            state[`${action.payload}`].isOpenRouletteModal = true;
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
            fieldsSlice.caseReducers.closeBuyModal(state);
            state.isOpenEnoughtlessMoneyModal = true;
        },

        openFightModal(state) {
            console.log();
            state.isOpenFightModal = true;
        },
    },
});

export default fieldsSlice.reducer;
export const {
    moneyLessThenZero,
    settingPlayerRouletteisOpen,
    gameOver,
    closeRouletteResultModal,
    activateJailRealeaseCard,
    closeRouletteStocksModal,
    rouletteBuyStocks,
    rouletteSpin,
    fireManager,
    hireManager,
    fireEngineer,
    hireEngineer,
    closeWarningModal,
    debtReturning,
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
