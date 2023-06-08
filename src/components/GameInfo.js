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
import PlayerInfo from "./UI/MainScreenInfo/PlayerInfo";
import Button from "./UI/MainScreenInfo/Button";

const GameInfo = () => {
    const dispatch = useDispatch();
    // General
    const dice1 = useSelector((state) => state.dice.firstDice);
    const dice2 = useSelector((state) => state.dice.secondDice);
    const activePlayer = useSelector((state) => state.dice.activePlayer);
    const fields = useSelector((state) => state.fields.fields);
    // Player2
    const player2Money = useSelector((state) => state.fields.player2.money);
    const player2OnwnedFields = useSelector((state) => state.fields.player2.fields);
    const expectedTaxesP2 = useSelector((state) => state.fields.player2.expectedTaxes);
    const player2Debt = useSelector((state) => state.fields.player2.debt);
    const player2CreditCount = useSelector((state) => state.fields.player2.creditCount);
    const player2Steps = useSelector((state) => state.dice.playersPosition.player2);
    const p2JailCard = useSelector((state) => state.fields.player2.jailFreeCard);
    const p2JailDaysLeft = useSelector((state) => state.dice.playersPosition.p2InJail);
    const p2stocks = useSelector((state) => state.fields.player2.stocks);
    // Player1
    const p1stocks = useSelector((state) => state.fields.player1.stocks);
    const player1OnwnedFields = useSelector((state) => state.fields.player1.fields);
    const player1Steps = useSelector((state) => state.dice.playersPosition.player1);
    const p1JailCard = useSelector((state) => state.fields.player1.jailFreeCard);
    const p1JailDaysLeft = useSelector((state) => state.dice.playersPosition.p1InJail);
    const player1Money = useSelector((state) => state.fields.player1.money);
    const player1Debt = useSelector((state) => state.fields.player1.debt);
    const expectedTaxesP1 = useSelector((state) => state.fields.player1.expectedTaxes);
    const player1CreditCount = useSelector((state) => state.fields.player1.creditCount);

    // Getting empty fields on the screen

    const emptyFields = Object.keys(fields).map((item) => {
        const index = Number(item);
        if (fields[`${index}`].status === "empty" || fields[`${index}`].status === "emptyC") {
            return `${item}, `;
        }
    });
    const playerIsActive = activePlayer === 1 ? "player1" : "player2";

    // expected taxes
    useEffect(() => {
        dispatch(expectedTaxes(playerIsActive));
    }, [player1Steps, player2Steps, player1OnwnedFields, player2OnwnedFields]);

    // Handlers

    const takeCreditHandler = (player) => {
        const confirm = window.confirm("You shure you whan`a take a credit 1000? You should return 1500!");
        if (confirm === true) {
            dispatch(takeCredit(player));
        } else {
            return;
        }
    };
    const diceDroppingHandler = () => {
        dispatch(dropTwoDices());
        dispatch(addStep(playerIsActive));
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
        <div className={styles.field}>
            <button onClick={diceDroppingHandler} className={styles["moove-button"]}>
                Next move!
            </button>
            <h1 className={styles.dice}>
                {dice1}:{dice2} Empty fields:{emptyFields}
            </h1>

            <PlayerInfo
                index={1}
                playerName={"player1"}
                activePlayer={activePlayer}
                playerSteps={player1Steps}
                playerOnwnedFields={player1OnwnedFields}
                playerMoney={player1Money}
                playerDebt={player1Debt}
                expectedTaxes={expectedTaxesP1}
                jailCard={p1JailCard}
                jailDaysLeft={p1JailDaysLeft}
                playerCreditCount={player1CreditCount}
                playerStocks={p1stocks}
                sellStocksHandler={sellStocksHandler}
                buyBuildingHandler={buyBuildingHandler}
                takeCreditHandler={takeCreditHandler}
                jailreleaseHandler={jailreleaseHandler}
            />

            <PlayerInfo
                index={2}
                playerName={"player2"}
                activePlayer={activePlayer}
                playerSteps={player2Steps}
                playerOnwnedFields={player2OnwnedFields}
                playerMoney={player2Money}
                playerDebt={player2Debt}
                expectedTaxes={expectedTaxesP2}
                jailCard={p2JailCard}
                jailDaysLeft={p2JailDaysLeft}
                playerCreditCount={player2CreditCount}
                playerStocks={p2stocks}
                sellStocksHandler={sellStocksHandler}
                buyBuildingHandler={buyBuildingHandler}
                takeCreditHandler={takeCreditHandler}
                jailreleaseHandler={jailreleaseHandler}
            />
        </div>
    );
};

export default GameInfo;
