import styles from "./WarningModal.module.css";
import { closeWarningModal } from "../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import SimpleButton from "../ModalWindows/ModalButtons/SimpleButton";

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

    return (
        <>
            <Backdrop />
            <ModalWindow className={styles.modale}>
                <div className={styles.info}>
                    <h1
                        className={styles.header}
                    >{`${activePlayer}, you need to sell some of your goods to continue!`}</h1>
                    <h2 className={styles.description}>{`Your debt is ${
                        (finalDebt < 0 && finalDebt) || money
                    }!`}</h2>
                    <SimpleButton
                        className={styles.button}
                        message={"OK"}
                        handler={closeWarningModalHandler}
                    ></SimpleButton>
                </div>
            </ModalWindow>
        </>
    );
};
export default WarningModal;
