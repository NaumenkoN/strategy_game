import styles from "./WarningModal.module.css";
import { closeWarningModal } from "../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import SimpleButton from "../ModalWindows/ModalButtons/SimpleButton";
import audio from "../../../media/warning.mp3";

const WarningModal = () => {
    const dispatch = useDispatch();
    const isOpenBuildingModalp1 = useSelector((state) => state.fields.player1.isOpenBuildingModal);
    const isOpenBuildingModalp2 = useSelector((state) => state.fields.player2.isOpenBuildingModal);
    const player1Name = useSelector((state) => state.fields.player1.name);
    const player2Name = useSelector((state) => state.fields.player2.name);
    const activePlayer = (isOpenBuildingModalp1 && "player1") || (isOpenBuildingModalp2 && "player2");
    const activePlayerName = activePlayer === "player1" ? player1Name : player2Name;

    const debt = useSelector((state) => state.fields[`${activePlayer}`].debt);
    const money = useSelector((state) => state.fields[`${activePlayer}`].money);

    const finalDebt = money - debt;

    const closeWarningModalHandler = (e) => {
        dispatch(closeWarningModal());
    };
    const sound = new Audio(audio);

    useEffect(() => {
        sound.play();
    }, []);

    return (
        <>
            <Backdrop />
            <ModalWindow className={styles.modale}>
                <div className={styles.info}>
                    <h1
                        className={styles.header}
                    >{`${activePlayerName}, you need to sell some of your goods to continue!`}</h1>
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
