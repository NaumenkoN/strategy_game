import styles from "./GameInfo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { dropTwoDices, addStep, nextTurn } from "../store/diceAndPlayerPositions";

const GameInfo = () => {
    const dice1 = useSelector((state) => state.dice.firstDice);
    const dice2 = useSelector((state) => state.dice.secondDice);
    const player1Steps = useSelector((state) => state.dice.playersPosition.player1);
    const player2Steps = useSelector((state) => state.dice.playersPosition.player2);
    const dispatch = useDispatch();

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
            <h1 className={styles.dice}>Player1 position: {player1Steps}</h1>
            <h1 className={styles.dice}>Player2 position: {player2Steps}</h1>
        </li>
    );
};

export default GameInfo;
