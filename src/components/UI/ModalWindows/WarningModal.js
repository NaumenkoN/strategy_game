import styles from "./WarningModal.module.css";
import { closeWarningModal } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";

const WarningModal = () => {
    const dispatch = useDispatch();
    const isOpenBuildingModalp1 = useSelector((state) => state.fields.player1.isOpenBuildingModal);
    const isOpenBuildingModalp2 = useSelector((state) => state.fields.player2.isOpenBuildingModal);
    const activePlayer = (isOpenBuildingModalp1 && "player1") || (isOpenBuildingModalp2 && "player2");
    const debt = useSelector((state) => state.fields[`${activePlayer}`].debt);
    const money = useSelector((state) => state.fields[`${activePlayer}`].money);

    const finalDebt = money - debt;

    const closeWarningModalHandler = (e) => {
        dispatch(closeWarningModal());
    };

    console.log("warningmodal");
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <h1>{`${activePlayer}, you need to sell some of your goods to continue!`}</h1>
                <h1>{`Your debt is ${finalDebt}!`}</h1>
                <button onClick={closeWarningModalHandler} className={styles["close-button"]}>
                    OK
                </button>
            </div>
        </>
    );
};
export default WarningModal;
