import styles from "./RouletteModal.module.css";
import { closeRouletteModal } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";

const BuyModal = () => {
    const dispatch = useDispatch();

    const closeRouletteModalHandler = () => {
        dispatch(closeRouletteModal());
    };
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <button onClick={closeRouletteModalHandler} className={styles["close-button"]}>
                    x
                </button>
                <h1>Roulette</h1>
            </div>
        </>
    );
};
export default BuyModal;
