import styles from "./RouletteModal.module.css";
import { rouletteSpin } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";

const RouletteModal = () => {
    const dispatch = useDispatch();
    const isOpenRouletteModalp1 = useSelector((state) => state.fields.player1.isOpenRouletteModal);
    const isOpenRouletteModalp2 = useSelector((state) => state.fields.player2.isOpenRouletteModal);
    const activePlayer = (isOpenRouletteModalp1 && "player1") || (isOpenRouletteModalp2 && "player2");

    const rouletteSpinHandler = (player) => {
        dispatch(rouletteSpin(player));
    };
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <h1>Roulette</h1>
                <h2>{`${activePlayer}, you are on the roulette field. Spin the wheel, let\`s see what you got!`}</h2>
                <button onClick={() => rouletteSpinHandler(activePlayer)}>Spin the wheel</button>
            </div>
        </>
    );
};
export default RouletteModal;
