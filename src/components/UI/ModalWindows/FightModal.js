import styles from "./FightModal.module.css";
import { useEffect, useState } from "react";
import { closeFightModal, fightWithdrawal } from "../../../store/fields";
import {
    dropFightDices,
    hideFightDices,
    winner,
    setPrevPosAsCurrent,
} from "../../../store/diceAndPlayerPositions";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import SimpleButton from "./ModalButtons/SimpleButton";
import sound from "../../../media/fight-sound.mp3";

const FightModal = () => {
    const dispatch = useDispatch();
    const player1Name = useSelector((state) => state.fields.player1.name);
    const player2Name = useSelector((state) => state.fields.player2.name);
    const firstDice = useSelector((state) => state.dice.firstFightDice);
    const secondDice = useSelector((state) => state.dice.secondFightDice);

    const DiceIsDropted = useSelector((state) => state.dice.fightDiceIsDropted);
    const [fightDiceIsDropted, setFightDiceIsDropted] = useState(false);
    const whoWinner = useSelector((state) => state.dice.winner);

    const fightSound = new Audio(sound);

    const fightDiceHandler = () => {
        setFightDiceIsDropted(true);
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
                setFightDiceIsDropted(false);
            }, 3000);

            // setset previous position as current to prevent default behavior when reload a page
            dispatch(setPrevPosAsCurrent());
        }
        if (firstDice < secondDice) {
            dispatch(fightWithdrawal(["player2", "player1"]));
            dispatch(winner(2));
            setTimeout(() => {
                dispatch(hideFightDices());
                dispatch(closeFightModal());
                setFightDiceIsDropted(false);
            }, 3000);

            // setset previous position as current to prevent default behavior when reload a page
            dispatch(setPrevPosAsCurrent());
        }
        if (firstDice === secondDice && firstDice !== null) {
            dispatch(hideFightDices());
            dispatch(dropFightDices());
        }
    }, [DiceIsDropted, firstDice]);

    return (
        <>
            <Backdrop />
            <ModalWindow>
                <h1 className={styles.header}>
                    You face your rival!
                    <br />
                    And you got into fight!
                </h1>
                <h2 className={styles.header2}>Throw the dices and we'll see who wins 😏...</h2>
                <div className={styles.info}>
                    <div className={styles.players}>
                        {whoWinner === 1 && (
                            <div>
                                {player1Name} Win! {player2Name} -50$
                            </div>
                        )}
                        {whoWinner === 2 && (
                            <div>
                                {player2Name} Win! {player1Name} -50$
                            </div>
                        )}

                        {!fightDiceIsDropted && (
                            <SimpleButton
                                className={styles["run-button"]}
                                message={"Fight!"}
                                handler={fightDiceHandler}
                                disabled={DiceIsDropted}
                            />
                        )}
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};
export default FightModal;
