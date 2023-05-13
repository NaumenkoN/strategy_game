import styles from "./EnoughtlessMoney.module.css";
import { closeEnoughtlessMoneyModal } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";

const EnoughtlessMoneyModal = () => {
    const dispatch = useDispatch();

    const closeEnoughtlessMoneyModalHandler = (e) => {
        dispatch(closeEnoughtlessMoneyModal());
    };
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <button
                    onClick={closeEnoughtlessMoneyModalHandler}
                    className={styles["close-button"]}
                >
                    x
                </button>
                <h1>Enoughtless Money</h1>
            </div>
        </>
    );
};
export default EnoughtlessMoneyModal;
