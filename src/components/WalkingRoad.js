import styles from "./WalkingRoad.module.css";
import Player1 from "./UI/Players/Player1";
import Player2 from "./UI/Players/Player2";

import { useSelector, useDispatch } from "react-redux";
import {
    rentalCounting,
    openBuyModal,
    openJailModal,
    openRouletteModal,
    openFightModal,
    circlePassMoney,
    rentalAndSalesIndex,
    debtReturning,
    gameOver,
    settingPlayerRouletteisClose,
    moneyLessThenZero,
} from "../store/fields";
import { inJail, rouletteMoving } from "../store/diceAndPlayerPositions";
import { useEffect } from "react";

const WalkingRoad = () => {
    const dispatch = useDispatch();
    const player1Steps = useSelector((state) => state.dice.playersPosition.player1);
    const player2Steps = useSelector((state) => state.dice.playersPosition.player2);
    const player1money = useSelector((state) => state.fields.player1.money);
    const player2money = useSelector((state) => state.fields.player2.money);
    const player1stocks = useSelector((state) => state.fields.player1.stocks);
    const player2stocks = useSelector((state) => state.fields.player2.stocks);
    const player1fields = useSelector((state) => state.fields.player1.fields);
    const player2fields = useSelector((state) => state.fields.player2.fields);
    const fields = useSelector((state) => state.fields.fields);
    const p1circlesPassed = useSelector((state) => state.dice.playersPosition.p1circle);
    const p2circlesPassed = useSelector((state) => state.dice.playersPosition.p2circle);
    const p1IsOpenRouletModal = useSelector((state) => state.fields.player1.isOpenRouletteModal);
    const p2IsOpenRouletModal = useSelector((state) => state.fields.player2.isOpenRouletteModal);
    const playerIsOnRoulette = (p1IsOpenRouletModal && "player1") || (p2IsOpenRouletModal && "player2");
    const rouletteState = useSelector((state) => state.fields.rouletteState);
    const moveToFieldAfterRouletteSpin = useSelector((state) => state.dice.moveToFieldAfterRouletteSpin);

    // playground

    // console.log(fields);

    // function to check the players positions

    const checkingPlayersPosition = (player1, player2, steps, jail, playerIsOpenRouletteModal) => {
        dispatch(rentalAndSalesIndex(["free", player1]));

        // ----- CHECKING LIVING FIELD TO BUY IS EMPTY, IF NOT PAYING RENTAL -----
        if (steps && fields[`${steps}`].status === "empty") {
            dispatch(openBuyModal([player1, steps, "living"]));
        }
        if (steps && fields[`${steps}`].status === player2) {
            dispatch(rentalCounting([player1, steps, player2]));
        }
        // // ----- CHECKING COMMERCIAL FIELD IS EMPTY, IF NOT PAYING RENTAL -----
        if (steps && fields[`${steps}`].status === "emptyC") {
            dispatch(openBuyModal([player1, steps, "commercial"]));
        }
        // ----- CHECKING FIELD IS JAIL -----
        if (steps === 12 || steps === 24 || steps === 36 || steps === 48) {
            dispatch(inJail(jail));
            dispatch(rentalAndSalesIndex(["arrest", player1]));
            if (playerIsOpenRouletteModal !== true) {
                dispatch(openJailModal());
            }
        }
        // ----- CHECKING FIELD IS ROULETTE -----
        if (steps === 7 || steps === 19 || steps === 31 || steps === 43) {
            dispatch(openRouletteModal(player1));
        }
    };

    // ----- Player1 cheking position -----
    useEffect(() => {
        const player1 = "player1";
        const player2 = "player2";
        const steps = player1Steps;
        const inJail = "p1InJail";
        const playerIsOpenRouletteModal = p1IsOpenRouletModal;

        checkingPlayersPosition(player1, player2, steps, inJail, playerIsOpenRouletteModal);

        // dispatch(rentalAndSalesIndex(["free", "player1"]));

        // // ----- CHECKING LIVING FIELD TO BUY IS EMPTY, IF NOT PAYING RENTAL -----
        // if (player1Steps && fields[`${player1Steps}`].status === "empty") {
        //     dispatch(openBuyModal(["player1", player1Steps, "living"]));
        // }
        // if (player1Steps && fields[`${player1Steps}`].status === "player2") {
        //     dispatch(rentalCounting(["player1", player1Steps, "player2"]));
        // }
        // // // ----- CHECKING COMMERCIAL FIELD IS EMPTY, IF NOT PAYING RENTAL -----
        // if (player1Steps && fields[`${player1Steps}`].status === "emptyC") {
        //     dispatch(openBuyModal(["player1", player1Steps, "commercial"]));
        // }
        // // ----- CHECKING FIELD IS JAIL -----
        // if (player1Steps === 12 || player1Steps === 24 || player1Steps === 36 || player1Steps === 48) {
        //     dispatch(inJail("p1InJail"));
        //     dispatch(rentalAndSalesIndex(["arrest", "player1"]));
        //     if (p1IsOpenRouletModal !== true) {
        //         dispatch(openJailModal());
        //     }
        // }
        // // ----- CHECKING FIELD IS ROULETTE -----
        // if (player1Steps === 7 || player1Steps === 19 || player1Steps === 31 || player1Steps === 43) {
        //     dispatch(openRouletteModal("player1"));
        // }
    }, [player1Steps]);

    // ----- Player2 cheking position -----
    useEffect(() => {
        const player1 = "player2";
        const player2 = "player1";
        const steps = player2Steps;
        const inJail = "p2InJail";
        const playerIsOpenRouletteModal = p2IsOpenRouletModal;

        checkingPlayersPosition(player1, player2, steps, inJail, playerIsOpenRouletteModal);
        // dispatch(rentalAndSalesIndex(["free", "player2"]));
        // // ----- CHECKING LIVING FIELD TO BUY IS EMPTY, IF NOT - PAYING RENTAL -----
        // if (player2Steps && fields[`${player2Steps}`].status === "empty") {
        //     dispatch(openBuyModal(["player2", player2Steps, "living"]));
        // }
        // if (player2Steps && fields[`${player2Steps}`].status === "player1") {
        //     dispatch(rentalCounting(["player2", player2Steps, "player1"]));
        // }
        // // ----- CHECKING COMMERCIAL FIELD IS EMPTY, IF NOT - PAYING RENTAL -----
        // if (player2Steps && fields[`${player2Steps}`].status === "emptyC") {
        //     dispatch(openBuyModal(["player2", player2Steps, "commercial"]));
        // }
        // // ----- CHECKING FIELD IS JAIL -----
        // if (player2Steps === 12 || player2Steps === 24 || player2Steps === 36 || player2Steps === 48) {
        //     dispatch(inJail("p2InJail"));
        //     dispatch(rentalAndSalesIndex(["arrest", "player2"]));
        //     if (p2IsOpenRouletModal !== true) {
        //         dispatch(openJailModal());
        //     }
        // }
        // // ----- CHECKING FIELD IS ROULETTE -----
        // if (player2Steps === 7 || player2Steps === 19 || player2Steps === 31 || player2Steps === 43) {
        //     dispatch(openRouletteModal("player2"));
        // }
    }, [player2Steps]);

    // ----- Checking game is over -----

    useEffect(() => {
        //  ----- check is money < 0 -----
        if (player1money < 0 && (player1stocks > 0 || player1fields.length !== 0)) {
            console.log('dispatch(moneyLessThenZero(["player1"]))');
            dispatch(moneyLessThenZero(["player1"]));
        }
        if (player2money < 0 && (player2stocks > 0 || player2fields.length !== 0)) {
            console.log('dispatch(moneyLessThenZero(["player2"]))');
            dispatch(moneyLessThenZero(["player2"]));
        }
        if (player1money < 0 && player1stocks === 0 && player1fields.length === 0) {
            dispatch(gameOver());
        }
        if (player2money < 0 && player2stocks === 0 && player2fields.length === 0) {
            dispatch(gameOver());
        }
    }, [player1money, player2money]);

    // ----- (FIGHT) checking is players on the same position -----
    useEffect(() => {
        if (player1Steps === player2Steps && player1Steps !== 1) {
            dispatch(openFightModal());
        }
    }, [player1Steps, player2Steps]);
    // ----- check did a player is pass the circle -----
    useEffect(() => {
        p1circlesPassed && dispatch(circlePassMoney("player1")) && dispatch(debtReturning(["player1"]));
        p2circlesPassed && dispatch(circlePassMoney("player2")) && dispatch(debtReturning(["player2"]));
    }, [p1circlesPassed, p2circlesPassed]);

    // cheking is roulette spining result === some field -----

    useEffect(() => {
        if (
            rouletteState === "start" ||
            rouletteState === "field4" ||
            rouletteState === "field12" ||
            rouletteState === "field23" ||
            rouletteState === "field28" ||
            rouletteState === "field36" ||
            rouletteState === "field47"
        ) {
            dispatch(rouletteMoving([rouletteState, playerIsOnRoulette]));
        }
    }, [rouletteState]);

    return (
        <>
            <li className={styles.f1}>
                1<p>Start</p>
                {player1Steps === 1 && <Player1 />}
                {player2Steps === 1 && <Player2 />}
            </li>
            <li className={styles.f2}>
                2{player1Steps === 2 && <Player1 />}
                {player2Steps === 2 && <Player2 />}
            </li>
            <li className={styles.f3}>
                3{player1Steps === 3 && <Player1 />}
                {player2Steps === 3 && <Player2 />}
            </li>
            <li className={styles.f4}>
                4{player1Steps === 4 && <Player1 />}
                {player2Steps === 4 && <Player2 />}
            </li>
            <li className={styles.f5}>
                5{player1Steps === 5 && <Player1 />}
                {player2Steps === 5 && <Player2 />}
            </li>
            <li className={styles.f6}>
                6{player1Steps === 6 && <Player1 />}
                {player2Steps === 6 && <Player2 />}
            </li>
            <li className={styles.f7}>
                7{player1Steps === 7 && <Player1 />}
                {player2Steps === 7 && <Player2 />}
            </li>
            <li className={styles.f8}>
                8{player1Steps === 8 && <Player1 />}
                {player2Steps === 8 && <Player2 />}
            </li>
            <li className={styles.f9}>
                9{player1Steps === 9 && <Player1 />}
                {player2Steps === 9 && <Player2 />}
            </li>
            <li className={styles.f10}>
                10{player1Steps === 10 && <Player1 />}
                {player2Steps === 10 && <Player2 />}
            </li>
            <li className={styles.f11}>
                11{player1Steps === 11 && <Player1 />}
                {player2Steps === 11 && <Player2 />}
            </li>
            <li className={styles.f12}>
                12{player1Steps === 12 && <Player1 />}
                {player2Steps === 12 && <Player2 />}
            </li>
            <li className={styles.f13}>
                13{player1Steps === 13 && <Player1 />}
                {player2Steps === 13 && <Player2 />}
            </li>
            <li className={styles.f48}>
                48{player1Steps === 48 && <Player1 />}
                {player2Steps === 48 && <Player2 />}
            </li>
            <li className={styles.f14}>
                14{player1Steps === 14 && <Player1 />}
                {player2Steps === 14 && <Player2 />}
            </li>
            <li className={styles.f47}>
                47{player1Steps === 47 && <Player1 />}
                {player2Steps === 47 && <Player2 />}
            </li>
            <li className={styles.f15}>
                15{player1Steps === 15 && <Player1 />}
                {player2Steps === 15 && <Player2 />}
            </li>
            <li className={styles.f46}>
                46{player1Steps === 46 && <Player1 />}
                {player2Steps === 46 && <Player2 />}
            </li>
            <li className={styles.f16}>
                16{player1Steps === 16 && <Player1 />}
                {player2Steps === 16 && <Player2 />}
            </li>
            <li className={styles.f45}>
                45{player1Steps === 45 && <Player1 />}
                {player2Steps === 45 && <Player2 />}
            </li>
            <li className={styles.f17}>
                17{player1Steps === 17 && <Player1 />}
                {player2Steps === 17 && <Player2 />}
            </li>
            <li className={styles.f44}>
                44{player1Steps === 44 && <Player1 />}
                {player2Steps === 44 && <Player2 />}
            </li>
            <li className={styles.f18}>
                18{player1Steps === 18 && <Player1 />}
                {player2Steps === 18 && <Player2 />}
            </li>
            <li className={styles.f43}>
                43{player1Steps === 43 && <Player1 />}
                {player2Steps === 43 && <Player2 />}
            </li>
            <li className={styles.f19}>
                19{player1Steps === 19 && <Player1 />}
                {player2Steps === 19 && <Player2 />}
            </li>
            <li className={styles.f42}>
                42{player1Steps === 42 && <Player1 />}
                {player2Steps === 42 && <Player2 />}
            </li>
            <li className={styles.f20}>
                20{player1Steps === 20 && <Player1 />}
                {player2Steps === 20 && <Player2 />}
            </li>
            <li className={styles.f41}>
                41{player1Steps === 41 && <Player1 />}
                {player2Steps === 41 && <Player2 />}
            </li>
            <li className={styles.f21}>
                21{player1Steps === 21 && <Player1 />}
                {player2Steps === 21 && <Player2 />}
            </li>
            <li className={styles.f40}>
                40{player1Steps === 40 && <Player1 />}
                {player2Steps === 40 && <Player2 />}
            </li>
            <li className={styles.f22}>
                22{player1Steps === 22 && <Player1 />}
                {player2Steps === 22 && <Player2 />}
            </li>
            <li className={styles.f39}>
                39{player1Steps === 39 && <Player1 />}
                {player2Steps === 39 && <Player2 />}
            </li>
            <li className={styles.f23}>
                23{player1Steps === 23 && <Player1 />}
                {player2Steps === 23 && <Player2 />}
            </li>
            <li className={styles.f38}>
                38{player1Steps === 38 && <Player1 />}
                {player2Steps === 38 && <Player2 />}
            </li>
            <li className={styles.f24}>
                24{player1Steps === 24 && <Player1 />}
                {player2Steps === 24 && <Player2 />}
            </li>
            <li className={styles.f37}>
                37{player1Steps === 37 && <Player1 />}
                {player2Steps === 37 && <Player2 />}
            </li>
            <li className={styles.f36}>
                36{player1Steps === 36 && <Player1 />}
                {player2Steps === 36 && <Player2 />}
            </li>
            <li className={styles.f35}>
                35{player1Steps === 35 && <Player1 />}
                {player2Steps === 35 && <Player2 />}
            </li>
            <li className={styles.f34}>
                34{player1Steps === 34 && <Player1 />}
                {player2Steps === 34 && <Player2 />}
            </li>
            <li className={styles.f33}>
                33{player1Steps === 33 && <Player1 />}
                {player2Steps === 33 && <Player2 />}
            </li>
            <li className={styles.f32}>
                32{player1Steps === 32 && <Player1 />}
                {player2Steps === 32 && <Player2 />}
            </li>
            <li className={styles.f31}>
                31{player1Steps === 31 && <Player1 />}
                {player2Steps === 31 && <Player2 />}
            </li>
            <li className={styles.f30}>
                30{player1Steps === 30 && <Player1 />}
                {player2Steps === 30 && <Player2 />}
            </li>
            <li className={styles.f29}>
                29{player1Steps === 29 && <Player1 />}
                {player2Steps === 29 && <Player2 />}
            </li>
            <li className={styles.f28}>
                28{player1Steps === 28 && <Player1 />}
                {player2Steps === 28 && <Player2 />}
            </li>
            <li className={styles.f27}>
                27{player1Steps === 27 && <Player1 />}
                {player2Steps === 27 && <Player2 />}
            </li>
            <li className={styles.f26}>
                26{player1Steps === 26 && <Player1 />}
                {player2Steps === 26 && <Player2 />}
            </li>
            <li className={styles.f25}>
                25{player1Steps === 25 && <Player1 />}
                {player2Steps === 25 && <Player2 />}
            </li>
        </>
    );
};

export default WalkingRoad;
