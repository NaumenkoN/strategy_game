import styles from "./GameOvermodal.module.css";
import { restartGame } from "../../../store/fields";
import { restartPositions } from "../../../store/diceAndPlayerPositions";
import { openMainMenu } from "../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import SimpleButton from "./ModalButtons/SimpleButton";
import gameOverSound from "../../../media/gameOver.mp3";

const GameOverModal = () => {
    const dispatch = useDispatch();
    const player1Name = useSelector((state) => state.fields.player1.name);
    const player2Name = useSelector((state) => state.fields.player2.name);
    const player1money = useSelector((state) => state.fields.player1.money);

    const looser = player1money < 0 ? player1Name : player2Name;

    const restartGameHandler = () => {
        dispatch(restartGame());
        dispatch(restartPositions());
    };

    const MainMenuHandler = () => {
        dispatch(openMainMenu());
    };

    const gameOver = new Audio(gameOverSound);
    useEffect(() => {
        gameOver.play();
    }, []);

    return (
        <>
            <Backdrop />
            <ModalWindow>
                <div className={styles.info}>
                    <h1 className={styles.header}>Game Over!</h1>
                    <h2 className={styles.header2}>{looser} loose 🤷‍♂️</h2>
                    <h2 className={styles.header2}>You whant to restart?</h2>
                    <SimpleButton className={styles.button} handler={restartGameHandler} message={"Yes"} />
                    <SimpleButton className={styles.button} handler={MainMenuHandler} message={"Menu"} />
                </div>
            </ModalWindow>
        </>
    );
};
export default GameOverModal;
