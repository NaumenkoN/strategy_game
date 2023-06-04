import styles from "./JailModal.module.css";
import { restartGame } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";

const GameOverModal = () => {
    const dispatch = useDispatch();
    const player1money = useSelector((state) => state.fields.player1.money);

    const looser = player1money < 0 ? "player1" : "player2";

    const restartGameHandler = () => {
        window.location.reload(false);
    };

    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <h1>Game Over!</h1>
                <h2>{looser} loose 🤷‍♂️</h2>
                <h2>You whant a restart?</h2>
                <button onClick={restartGameHandler}>Yeas</button>
            </div>
        </>
    );
};
export default GameOverModal;
