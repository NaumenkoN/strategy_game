import styles from "./GameInfo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { dropTwoDices, addStep, nextTurn } from "../store/diceAndPlayerPositions";
import { openSellStocksModal, openBuyBuildingModal } from "../store/fields";

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
    // const player1isActive = useSelector((state) => state.dice.playersPosition.player1IsActive);
    // const player2isActive = useSelector((state) => state.dice.playersPosition.player2IsActive);
    const activePlayer = useSelector((state) => state.dice.activePlayer);

    const diceDroppingHandler = () => {
        dispatch(dropTwoDices());
        dispatch(addStep());
        dispatch(nextTurn());
    };
    const sellStocksHandler = (player) => {
        dispatch(openSellStocksModal(player));
    };
    const buyBuildingHandler = (player) => {
        dispatch(openBuyBuildingModal(player));
    };

    return (
        <li className={styles.field}>
            <button onClick={diceDroppingHandler} className={styles["moove-button"]}>
                Next move!
            </button>
            <h1 className={styles.dice}>
                {dice1}:{dice2}
            </h1>
            <h1 className={styles.dice}>
                {activePlayer === 1 && "+"}Player1 position: {player1Steps}
            </h1>
            <h1 className={styles.dice}>Player1 money: {player1money}</h1>
            <h1 className={styles.dice}>
                Player1 owned fields:
                {player1OnwnedFields
                    .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
                    .map((item) => ` ${item},`)}
            </h1>
            <h1 className={styles.dice}>
                Player1 owned commercial fields:
                {player1OnwnedFields
                    .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
                    .map((item) => ` ${item},`)}
            </h1>
            <div className={styles["control-buttons--group"]}>
                <button onClick={() => sellStocksHandler("player1")} className={styles["sell-stocks"]}>
                    sell stocks player1
                </button>
                <button onClick={() => buyBuildingHandler("player1")} className={styles["sell-stocks"]}>
                    buy building player1
                </button>
            </div>
            <p>-----------------------</p>
            <h1 className={styles.dice}>
                {activePlayer === 2 && "+"}Player2 position: {player2Steps}
            </h1>
            <h1 className={styles.dice}>Player2 money: {player2money}</h1>
            <h1 className={styles.dice}>
                Player2 owned fields:
                {player2OnwnedFields
                    .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
                    .map((item) => ` ${item},`)}
            </h1>
            <h1 className={styles.dice}>
                Player2 owned commercial fields:
                {player2OnwnedFields
                    .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
                    .map((item) => ` ${item},`)}
            </h1>
            <div className={styles["control-buttons--group"]}>
                <button onClick={() => sellStocksHandler("player2")} className={styles["sell-stocks"]}>
                    sells stocks player2
                </button>
                <button onClick={() => buyBuildingHandler("player2")} className={styles["sell-stocks"]}>
                    buy building player2
                </button>
            </div>
        </li>
    );
};

export default GameInfo;
