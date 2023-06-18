import styles from "./WalkingRoad.module.css";
import Player1 from "./UI/Players/Player1";
import Player2 from "./UI/Players/Player2";
import Field from "./UI/Fields/Field";
import rentalSound from "../media/rentalWithdrawal.mp3";
import rentalSound2 from "../media/rentalWithdrawal2.mp3";

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
    moneyLessThenZero,
    openRentalWithdrawalModal,
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
    const fieldsSlice = useSelector((state) => state.fields);
    const p1circlesPassed = useSelector((state) => state.dice.playersPosition.p1circle);
    const p2circlesPassed = useSelector((state) => state.dice.playersPosition.p2circle);
    const p1IsOpenRouletModal = useSelector((state) => state.fields.player1.isOpenRouletteModal);
    const p2IsOpenRouletModal = useSelector((state) => state.fields.player2.isOpenRouletteModal);
    const playerIsOnRoulette = (p1IsOpenRouletModal && "player1") || (p2IsOpenRouletModal && "player2");
    const rouletteState = useSelector((state) => state.fields.rouletteState);
    const moveToFieldAfterRouletteSpin = useSelector((state) => state.dice.moveToFieldAfterRouletteSpin);

    const RentalWithdrawal = new Audio(rentalSound);
    const RentalWithdrawal2 = new Audio(rentalSound2);

    // playground

    // console.log(fields);
    // console.log(fieldsSlice);

    // function to check the players positions

    const checkingPlayersPosition = (player1, player2, steps, jail, playerIsOpenRouletteModal) => {
        dispatch(rentalAndSalesIndex(["free", player1]));

        // ----- CHECKING LIVING FIELD TO BUY IS EMPTY, IF NOT PAYING RENTAL -----
        if (steps && fields[`${steps}`].status === "empty") {
            dispatch(openBuyModal([player1, steps, "living"]));
        }
        if (steps && fields[`${steps}`].status === player2) {
            dispatch(rentalCounting([player1, steps, player2]));
            RentalWithdrawal2.play();
            dispatch(openRentalWithdrawalModal([player1, steps, player2]));
        }
        // // ----- CHECKING COMMERCIAL FIELD IS EMPTY, IF NOT PAYING RENTAL -----
        if (steps && fields[`${steps}`].status === "emptyC") {
            dispatch(openBuyModal([player1, steps, "commercial"]));
        }
        // ----- CHECKING FIELD IS JAIL -----
        // if (steps === 12 || steps === 24 || steps === 36 || steps === 48) {
        //     dispatch(inJail(jail));
        //     dispatch(rentalAndSalesIndex(["arrest", player1]));
        //     if (playerIsOpenRouletteModal !== true) {
        //         dispatch(openJailModal());
        //     }
        // }
        // ----- CHECKING FIELD IS ROULETTE -----
        // if (steps === 7 || steps === 19 || steps === 31 || steps === 43) {
        //     dispatch(openRouletteModal(player1));
        // }
    };

    // ----- Player1 cheking position -----
    useEffect(() => {
        const player1 = "player1";
        const player2 = "player2";
        const steps = player1Steps;
        const inJail = "p1InJail";
        const playerIsOpenRouletteModal = p1IsOpenRouletModal;

        checkingPlayersPosition(player1, player2, steps, inJail, playerIsOpenRouletteModal);
    }, [player1Steps]);

    // ----- Player2 cheking position -----
    useEffect(() => {
        const player1 = "player2";
        const player2 = "player1";
        const steps = player2Steps;
        const inJail = "p2InJail";
        const playerIsOpenRouletteModal = p2IsOpenRouletModal;

        checkingPlayersPosition(player1, player2, steps, inJail, playerIsOpenRouletteModal);
    }, [player2Steps]);

    // ----- Checking game is over -----

    useEffect(() => {
        //  ----- check is money < 0 -----
        if (player1money < 0 && (player1stocks > 0 || player1fields.length !== 0)) {
            dispatch(moneyLessThenZero(["player1"]));
        }
        if (player2money < 0 && (player2stocks > 0 || player2fields.length !== 0)) {
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
            <Field className={styles.start} index={1}>
                <p>Start</p>
                {player1Steps === 1 && <Player1 />}
                {player2Steps === 1 && <Player2 />}
            </Field>
            <Field className={styles.f2} index={2}>
                2{player1Steps === 2 && <Player1 />}
                {player2Steps === 2 && <Player2 />}
            </Field>
            <Field className={styles.f3} index={3}>
                3{player1Steps === 3 && <Player1 />}
                {player2Steps === 3 && <Player2 />}
            </Field>
            <Field className={styles.f4} index={4}>
                4{player1Steps === 4 && <Player1 />}
                {player2Steps === 4 && <Player2 />}
            </Field>
            <Field className={styles.f5} index={5}>
                5{player1Steps === 5 && <Player1 />}
                {player2Steps === 5 && <Player2 />}
            </Field>
            <Field className={styles.f6} index={6}>
                6{player1Steps === 6 && <Player1 />}
                {player2Steps === 6 && <Player2 />}
            </Field>
            <Field className={styles.roulette} index={7}>
                7{player1Steps === 7 && <Player1 />}
                {player2Steps === 7 && <Player2 />}
            </Field>
            <Field className={styles.f8} index={8}>
                8{player1Steps === 8 && <Player1 />}
                {player2Steps === 8 && <Player2 />}
            </Field>
            <Field className={styles.f9} index={9}>
                9{player1Steps === 9 && <Player1 />}
                {player2Steps === 9 && <Player2 />}
            </Field>
            <Field className={styles.f10} index={10}>
                10{player1Steps === 10 && <Player1 />}
                {player2Steps === 10 && <Player2 />}
            </Field>
            <Field className={styles.f11} index={11}>
                11{player1Steps === 11 && <Player1 />}
                {player2Steps === 11 && <Player2 />}
            </Field>
            <Field className={styles.f12} index={12}>
                {player1Steps === 12 && <Player1 />}
                {player2Steps === 12 && <Player2 />}
            </Field>
            <Field className={styles.f13} index={13}>
                13{player1Steps === 13 && <Player1 />}
                {player2Steps === 13 && <Player2 />}
            </Field>
            <Field className={styles.f48} index={48}>
                {player1Steps === 48 && <Player1 />}
                {player2Steps === 48 && <Player2 />}
            </Field>
            <Field className={styles.f14} index={14}>
                14{player1Steps === 14 && <Player1 />}
                {player2Steps === 14 && <Player2 />}
            </Field>
            <Field className={styles.f47} index={47}>
                47{player1Steps === 47 && <Player1 />}
                {player2Steps === 47 && <Player2 />}
            </Field>
            <Field className={styles.f15} index={15}>
                15{player1Steps === 15 && <Player1 />}
                {player2Steps === 15 && <Player2 />}
            </Field>
            <Field className={styles.f46} index={46}>
                46{player1Steps === 46 && <Player1 />}
                {player2Steps === 46 && <Player2 />}
            </Field>
            <Field className={styles.f16} index={16}>
                16{player1Steps === 16 && <Player1 />}
                {player2Steps === 16 && <Player2 />}
            </Field>
            <Field className={styles.f45} index={45}>
                45{player1Steps === 45 && <Player1 />}
                {player2Steps === 45 && <Player2 />}
            </Field>
            <Field className={styles.f17} index={17}>
                17{player1Steps === 17 && <Player1 />}
                {player2Steps === 17 && <Player2 />}
            </Field>
            <Field className={styles.f44} index={44}>
                44{player1Steps === 44 && <Player1 />}
                {player2Steps === 44 && <Player2 />}
            </Field>
            <Field className={styles.f18} index={18}>
                18
                {player1Steps === 18 && <Player1 />}
                {player2Steps === 18 && <Player2 />}
            </Field>
            <Field className={styles.roulette} index={43}>
                43{player1Steps === 43 && <Player1 />}
                {player2Steps === 43 && <Player2 />}
            </Field>
            <Field className={styles.roulette} index={19}>
                19{player1Steps === 19 && <Player1 />}
                {player2Steps === 19 && <Player2 />}
            </Field>
            <Field className={styles.f42} index={42}>
                42{player1Steps === 42 && <Player1 />}
                {player2Steps === 42 && <Player2 />}
            </Field>
            <Field className={styles.f20} index={20}>
                20{player1Steps === 20 && <Player1 />}
                {player2Steps === 20 && <Player2 />}
            </Field>
            <Field className={styles.f41} index={41}>
                41
                {player1Steps === 41 && <Player1 />}
                {player2Steps === 41 && <Player2 />}
            </Field>
            <Field className={styles.f21} index={21}>
                21{player1Steps === 21 && <Player1 />}
                {player2Steps === 21 && <Player2 />}
            </Field>
            <Field className={styles.f40} index={40}>
                40{player1Steps === 40 && <Player1 />}
                {player2Steps === 40 && <Player2 />}
            </Field>
            <Field className={styles.f22} index={22}>
                22{player1Steps === 22 && <Player1 />}
                {player2Steps === 22 && <Player2 />}
            </Field>
            <Field className={styles.f39} index={39}>
                39{player1Steps === 39 && <Player1 />}
                {player2Steps === 39 && <Player2 />}
            </Field>
            <Field className={styles.f23} index={23}>
                23{player1Steps === 23 && <Player1 />}
                {player2Steps === 23 && <Player2 />}
            </Field>
            <Field className={styles.f38} index={38}>
                38{player1Steps === 38 && <Player1 />}
                {player2Steps === 38 && <Player2 />}
            </Field>
            <Field className={styles.f24} index={24}>
                {player1Steps === 24 && <Player1 />}
                {player2Steps === 24 && <Player2 />}
            </Field>
            <Field className={styles.f37} index={37}>
                37{player1Steps === 37 && <Player1 />}
                {player2Steps === 37 && <Player2 />}
            </Field>
            <Field className={styles.f36} index={36}>
                {player1Steps === 36 && <Player1 />}
                {player2Steps === 36 && <Player2 />}
            </Field>
            <Field className={styles.f35} index={35}>
                35{player1Steps === 35 && <Player1 />}
                {player2Steps === 35 && <Player2 />}
            </Field>
            <Field className={styles.f34} index={34}>
                34{player1Steps === 34 && <Player1 />}
                {player2Steps === 34 && <Player2 />}
            </Field>
            <Field className={styles.f33} index={33}>
                33{player1Steps === 33 && <Player1 />}
                {player2Steps === 33 && <Player2 />}
            </Field>
            <Field className={styles.f32} index={32}>
                32{player1Steps === 32 && <Player1 />}
                {player2Steps === 32 && <Player2 />}
            </Field>
            <Field className={styles.roulette} index={31}>
                31{player1Steps === 31 && <Player1 />}
                {player2Steps === 31 && <Player2 />}
            </Field>
            <Field className={styles.f30} index={30}>
                30{player1Steps === 30 && <Player1 />}
                {player2Steps === 30 && <Player2 />}
            </Field>
            <Field className={styles.f29} index={29}>
                29{player1Steps === 29 && <Player1 />}
                {player2Steps === 29 && <Player2 />}
            </Field>
            <Field className={styles.f28} index={28}>
                28{player1Steps === 28 && <Player1 />}
                {player2Steps === 28 && <Player2 />}
            </Field>
            <Field className={styles.f27} index={27}>
                27{player1Steps === 27 && <Player1 />}
                {player2Steps === 27 && <Player2 />}
            </Field>
            <Field className={styles.f26} index={26}>
                26{player1Steps === 26 && <Player1 />}
                {player2Steps === 26 && <Player2 />}
            </Field>
            <Field className={styles.f25} index={25}>
                25{player1Steps === 25 && <Player1 />}
                {player2Steps === 25 && <Player2 />}
            </Field>
        </>
    );
};

export default WalkingRoad;
