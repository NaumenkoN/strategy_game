import styles from "./JailModal.module.css";
import { closeJailModal } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";

const BuyModal = () => {
    const dispatch = useDispatch();

    const closeJailModalHandler = (e) => {
        dispatch(closeJailModal());
    };

    console.log("jailmodal");
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <button onClick={closeJailModalHandler} className={styles["close-button"]}>
                    x
                </button>
                <h1>Jail</h1>
            </div>
        </>
    );
};
export default BuyModal;
