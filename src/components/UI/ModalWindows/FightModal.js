import styles from "./FightModal.module.css";
import { useEffect } from "react";
import { closeFightModal, fightWithdrawal } from "../../../store/fields";
import { dropFightDices, hideFightDices, winner } from "../../../store/diceAndPlayerPositions";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import SimpleButton from "./ModalButtons/SimpleButton";
import sound from "../../../media/fight-sound.MP3";

const FightModal = () => {
    const dispatch = useDispatch();
    const firstDice = useSelector((state) => state.dice.firstFightDice);
    const secondDice = useSelector((state) => state.dice.secondFightDice);
    const fightDices = useSelector((state) => state.dice.showFightDices);
    const fightDiceIsDropted = useSelector((state) => state.dice.fightDiceIsDropted);
    const whoWinner = useSelector((state) => state.dice.winner);

    const fightSound = new Audio(sound);

    const fightDiceHandler = () => {
        fightSound.play();
        setTimeout(() => {
            dispatch(dropFightDices());
        }, [4000]);
    };

    useEffect(() => {
        if (firstDice > secondDice) {
            dispatch(fightWithdrawal(["player1", "player2"]));
            dispatch(winner(1));
            setTimeout(() => {
                dispatch(hideFightDices());
                dispatch(closeFightModal());
            }, 3000);
        }
        if (firstDice < secondDice) {
            dispatch(fightWithdrawal(["player2", "player1"]));
            dispatch(winner(2));
            setTimeout(() => {
                dispatch(hideFightDices());
                dispatch(closeFightModal());
            }, 3000);
        }
        if (firstDice === secondDice && firstDice !== null) {
            dispatch(hideFightDices());
            dispatch(dropFightDices());
        }
    }, [fightDiceIsDropted, firstDice]);

    return (
        <>
            <Backdrop />
            <ModalWindow>
                <h1 className={styles.header}>
                    You face your rival!
                    <br />
                    And you got into fight!
                </h1>
                <h2 className={styles.header}>Throw the dices and we'll see who wins😏...</h2>
                <div className={styles.info}>
                    <div className={styles.players}>
                        {whoWinner === 1 && <div>Player1 Win! Player2 -50$</div>}
                        {whoWinner === 2 && <div>Player2 Win! Player1 -50$</div>}
                        <SimpleButton
                            className={styles["run-button"]}
                            message={"Fight!"}
                            handler={fightDiceHandler}
                        />
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};
export default FightModal;
