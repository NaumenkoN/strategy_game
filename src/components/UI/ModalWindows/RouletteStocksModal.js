import styles from "./RouletteModal.module.css";
import { closeRouletteStocksModal, rouletteBuyStocks } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";

const RouletteStocksModal = () => {
    const dispatch = useDispatch();
    const rouletteSkocksValue = useSelector((state) => state.fields.rouletteSkocksModal.value);
    const isOpenRouletteModalp1 = useSelector((state) => state.fields.player1.isOpenRouletteModal);
    const isOpenRouletteModalp2 = useSelector((state) => state.fields.player2.isOpenRouletteModal);
    const activePlayer = (isOpenRouletteModalp1 && "player1") || (isOpenRouletteModalp2 && "player2");

    const closeRouletteStocksModalHandler = () => {
        dispatch(closeRouletteStocksModal());
    };

    const rouletteBuyStocksHandler = (player) => {
        dispatch(rouletteBuyStocks(player));
    };
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <button onClick={closeRouletteStocksModalHandler} className={styles["close-button"]}>
                    x
                </button>
                <h1>Congratilations!</h1>
                <h2>{`${activePlayer}, you are able to buy a ${rouletteSkocksValue} extra stocks for ${
                    rouletteSkocksValue * 20
                }$! Will you buy it?`}</h2>
                <button onClick={() => rouletteBuyStocksHandler(activePlayer)}>Buy</button>
                <button onClick={closeRouletteStocksModalHandler}>Cancel</button>
            </div>
        </>
    );
};
export default RouletteStocksModal;
