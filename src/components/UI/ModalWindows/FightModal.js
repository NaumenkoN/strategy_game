import styles from "./FightModal.module.css";
import { useEffect } from "react";
import { closeFightModal, fightWithdrawal } from "../../../store/fields";
import { dropTwoDices, showFightDices, hideFightDices, winner } from "../../../store/diceAndPlayerPositions";
import { useSelector, useDispatch } from "react-redux";

const FightModal = () => {
    const dispatch = useDispatch();
    const firstDice = useSelector((state) => state.dice.firstDice);
    const secondDice = useSelector((state) => state.dice.secondDice);
    const fightDices = useSelector((state) => state.dice.showFightDices);
    const fightDicesIsDropted = useSelector((state) => state.dice.fightDicesIsDropted);
    const whoWinner = useSelector((state) => state.dice.winner);
    const closeFightModalHandler = () => {
        dispatch(closeFightModal());
    };
    const fightDiceHandler = () => {
        dispatch(dropTwoDices());
        dispatch(showFightDices());
    };

    // cheking who`s winn in the fight

    useEffect(() => {
        if (fightDicesIsDropted && firstDice > secondDice) {
            dispatch(fightWithdrawal(["player1", "player2"]));
            dispatch(winner(1));
            setTimeout(() => {
                dispatch(closeFightModal());
                dispatch(hideFightDices());
            }, 1000);
        }
        if (fightDicesIsDropted && firstDice < secondDice) {
            dispatch(fightWithdrawal(["player2", "player1"]));
            dispatch(winner(2));
            setTimeout(() => {
                dispatch(closeFightModal());
                dispatch(hideFightDices());
            }, 1000);
        }
        if (fightDicesIsDropted && firstDice === secondDice) {
            fightDiceHandler();
        }
    }, [firstDice, secondDice]);

    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <button onClick={closeFightModalHandler} className={styles["close-button"]}>
                    x
                </button>
                <h1>Fight!</h1>
                <div className={styles.info}>
                    <div>
                        <p>
                            Player1: {fightDices && firstDice} {whoWinner === 1 && "win"}
                        </p>
                        <p>
                            Player2: {fightDices && secondDice} {whoWinner === 2 && "win"}
                        </p>
                        <button onClick={fightDiceHandler}>Run!</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FightModal;
