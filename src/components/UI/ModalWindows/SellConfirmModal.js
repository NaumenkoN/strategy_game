import styles from "./SellConfirmModal.module.css";
import { closeSellConfirmModal } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";

const SellConfirmModal = () => {
    const dispatch = useDispatch();

    const closeSellConfirmModalHandler = (e) => {
        dispatch(closeSellConfirmModal());
    };
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <button onClick={closeSellConfirmModalHandler} className={styles["close-button"]}>
                    x
                </button>
                <h1>Are you shure you whan`a comlitely sell all?</h1>
            </div>
        </>
    );
};
export default SellConfirmModal;
