import styles from "./FightModal.module.css";
import { useEffect } from "react";
import { closeFightModal, fightWithdrawal } from "../../../store/fields";
import { dropFightDices, hideFightDices, winner } from "../../../store/diceAndPlayerPositions";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import SimpleButton from "./ModalButtons/SimpleButton";

const FightModal = () => {
    const dispatch = useDispatch();
    const firstDice = useSelector((state) => state.dice.firstFightDice);
    const secondDice = useSelector((state) => state.dice.secondFightDice);
    const fightDices = useSelector((state) => state.dice.showFightDices);
    const fightDiceIsDropted = useSelector((state) => state.dice.fightDiceIsDropted);
    const whoWinner = useSelector((state) => state.dice.winner);

    const fightDiceHandler = () => {
        dispatch(dropFightDices());
    };

    useEffect(() => {
        if (firstDice > secondDice) {
            dispatch(fightWithdrawal(["player1", "player2"]));
            dispatch(winner(1));
            setTimeout(() => {
                dispatch(hideFightDices());
                dispatch(closeFightModal());
            }, 2000);
        }
        if (firstDice < secondDice) {
            dispatch(fightWithdrawal(["player2", "player1"]));
            dispatch(winner(2));
            setTimeout(() => {
                dispatch(hideFightDices());
                dispatch(closeFightModal());
            }, 2000);
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
                <h1>Fight!</h1>
                <div className={styles.info}>
                    <div>
                        <div>
                            Player1: {fightDices && firstDice} {whoWinner === 1 && "win"}
                        </div>
                        <div>
                            Player2: {fightDices && secondDice} {whoWinner === 2 && "win"}
                        </div>
                        <SimpleButton message={"Run!"} handler={fightDiceHandler} />
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};
export default FightModal;
