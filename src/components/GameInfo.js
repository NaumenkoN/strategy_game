import styles from "./GameInfo.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dropTwoDices, addStep, nextTurn, setInJail } from "../store/diceAndPlayerPositions";
import {
    openSellStocksModal,
    openBuyBuildingModal,
    expectedTaxes,
    takeCredit,
    activateJailRealeaseCard,
} from "../store/fields";

const GameInfo = () => {
    const dispatch = useDispatch();
    const dice1 = useSelector((state) => state.dice.firstDice);
    const dice2 = useSelector((state) => state.dice.secondDice);
    const player1Steps = useSelector((state) => state.dice.playersPosition.player1);
    const player2Steps = useSelector((state) => state.dice.playersPosition.player2);
    const player1money = useSelector((state) => state.fields.player1.money);
    const player2money = useSelector((state) => state.fields.player2.money);
    const player1OnwnedFields = useSelector((state) => state.fields.player1.fields);
    const player2OnwnedFields = useSelector((state) => state.fields.player2.fields);
    const activePlayer = useSelector((state) => state.dice.activePlayer);
    const expectedTaxesP1 = useSelector((state) => state.fields.player1.expectedTaxes);
    const expectedTaxesP2 = useSelector((state) => state.fields.player2.expectedTaxes);
    const player1Debt = useSelector((state) => state.fields.player1.debt);
    const player2Debt = useSelector((state) => state.fields.player2.debt);
    const player1CreditCount = useSelector((state) => state.fields.player1.creditCount);
    const player2CreditCount = useSelector((state) => state.fields.player2.creditCount);
    const p1JailCard = useSelector((state) => state.fields.player1.jailFreeCard);
    const p2JailCard = useSelector((state) => state.fields.player2.jailFreeCard);
    const p1JailDaysLeft = useSelector((state) => state.dice.playersPosition.p1InJail);
    const p2JailDaysLeft = useSelector((state) => state.dice.playersPosition.p2InJail);
    const fields = useSelector((state) => state.fields.fields);

    // Getting empty fields on the screen

    const emptyFields = Object.keys(fields).map((item) => {
        const index = Number(item);
        if (fields[`${index}`].status === "empty" || fields[`${index}`].status === "emptyC") {
            return `${item}, `;
        }
    });
    const playerIsActive = activePlayer === 1 ? "player1" : "player2";
    const playerJailStatus =
        (playerIsActive === "player1" && "p2InJail") || (playerIsActive === "player2" && "p1InJail");

    // expected taxes
    useEffect(() => {
        dispatch(expectedTaxes(playerIsActive));
    }, [player1Steps, player2Steps, player1OnwnedFields, player2OnwnedFields]);

    // Handlers

    const takeCreditHandler = (player) => {
        const confirm = window.confirm("You shure you whan`a take a credit?");
        if (confirm === true) {
            dispatch(takeCredit(player));
        } else {
            return;
        }
    };
    const diceDroppingHandler = () => {
        dispatch(dropTwoDices());
        dispatch(addStep());
        dispatch(nextTurn());
    };
    const sellStocksHandler = (player) => {
        dispatch(openSellStocksModal(player));
    };
    const buyBuildingHandler = (player) => {
        dispatch(openBuyBuildingModal([player]));

        dispatch(expectedTaxes(playerIsActive));
    };

    const jailreleaseHandler = (player) => {
        dispatch(activateJailRealeaseCard(player));
        dispatch(setInJail(player));
    };

    return (
        <li className={styles.field}>
            <button onClick={diceDroppingHandler} className={styles["moove-button"]}>
                Next move!
            </button>
            <h1 className={styles.dice}>
                {dice1}:{dice2} Empty fields:{emptyFields}
            </h1>
            <h1 className={styles.dice}>
                {activePlayer === 1 && "+"}Player1 position: {player1Steps}
            </h1>
            <h1 className={styles.dice}>Player1 money: {player1money}</h1>
            <h1 className={styles.dice}>Player1 debt: {player1Debt}</h1>
            <h1 className={styles.dice}>Player1 expected taxes: {expectedTaxesP1}</h1>
            <h1 className={styles.dice}>
                Player1 owned fields:
                {player1OnwnedFields
                    .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
                    .sort((a, b) => a - b)
                    .map((item) => item + ",")}
            </h1>
            <h1 className={styles.dice}>
                Player1 owned commercial fields:
                {player1OnwnedFields
                    .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
                    .sort((a, b) => a - b)
                    .map((item) => item + ",")}
            </h1>
            <div className={styles["control-buttons--group"]}>
                <button onClick={() => sellStocksHandler("player1")} className={styles["sell-stocks"]}>
                    sell stocks player1
                </button>
                <button onClick={() => buyBuildingHandler("player1")} className={styles["sell-stocks"]}>
                    buy building player1
                </button>
                <button
                    disabled={player1CreditCount === 0}
                    onClick={() => takeCreditHandler("player1")}
                    className={styles["sell-stocks"]}
                >
                    Take a credit
                </button>
                <button
                    disabled={p1JailCard === 0 || p1JailDaysLeft === 0}
                    onClick={() => jailreleaseHandler("player1")}
                    className={styles["sell-stocks"]}
                >
                    Jail release card:{`${p1JailCard}`}
                </button>
            </div>
            <p>-----------------------</p>
            <h1 className={styles.dice}>
                {activePlayer === 2 && "+"}Player2 position: {player2Steps}
            </h1>
            <h1 className={styles.dice}>Player2 money: {player2money}</h1>
            <h1 className={styles.dice}>Player2 debt: {player2Debt}</h1>
            <h1 className={styles.dice}>Player2 expected taxes: {expectedTaxesP2}</h1>
            <h1 className={styles.dice}>
                Player2 owned fields:
                {player2OnwnedFields
                    .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
                    .sort((a, b) => a - b)
                    .map((item) => item + ",")}
            </h1>
            <h1 className={styles.dice}>
                Player2 owned commercial fields:
                {player2OnwnedFields
                    .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
                    .sort((a, b) => a - b)
                    .map((item) => item + ",")}
            </h1>
            <div className={styles["control-buttons--group"]}>
                <button onClick={() => sellStocksHandler("player2")} className={styles["sell-stocks"]}>
                    sells stocks player2
                </button>
                <button onClick={() => buyBuildingHandler("player2")} className={styles["sell-stocks"]}>
                    buy building player2
                </button>
                <button
                    disabled={player2CreditCount === 0}
                    onClick={() => takeCreditHandler("player2")}
                    className={styles["sell-stocks"]}
                >
                    Take a credit
                </button>
                <button
                    disabled={p2JailCard === 0 || p2JailDaysLeft === 0}
                    onClick={() => jailreleaseHandler("player2")}
                    className={styles["sell-stocks"]}
                >
                    Jail release card:{`${p2JailCard}`}
                </button>
            </div>
        </li>
    );
};

export default GameInfo;
