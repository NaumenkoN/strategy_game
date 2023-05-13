import styles from "./GameInfo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { dropTwoDices, addStep, nextTurn } from "../store/diceAndPlayerPositions";

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
    const player1isActive = useSelector((state) => state.dice.playersPosition.player1IsActive);
    const player2isActive = useSelector((state) => state.dice.playersPosition.player2IsActive);

    const diceDroppingHandler = () => {
        dispatch(dropTwoDices());

        dispatch(addStep());
        dispatch(nextTurn());
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
                {player1isActive && "+"}Player1 position: {player1Steps}
            </h1>
            <h1 className={styles.dice}>Player1 money: {player1money}</h1>
            <h1 className={styles.dice}>Player1 owned fields: {player1OnwnedFields.map((item) => `${item},`)}</h1>
            <p>-----------------------</p>
            <h1 className={styles.dice}>
                {player2isActive && "+"}Player2 position: {player2Steps}
            </h1>
            <h1 className={styles.dice}>Player2 money: {player2money}</h1>
            <h1 className={styles.dice}>Player2 owned fields: {player2OnwnedFields.map((item) => `${item},`)}</h1>
        </li>
    );
};

export default GameInfo;
