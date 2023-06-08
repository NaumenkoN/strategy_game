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
                <h1>{`${activePlayer}, you need to sell some of your goods to continue!`}</h1>
                <h1>{`Your debt is ${(finalDebt < 0 && finalDebt) || money}!`}</h1>
                <SimpleButton message={"OK"} handler={closeWarningModalHandler}></SimpleButton>
            </ModalWindow>
        </>
    );
};
export default WarningModal;
