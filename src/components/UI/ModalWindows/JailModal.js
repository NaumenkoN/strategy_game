import styles from "./JailModal.module.css";
import { closeJailModal } from "../../../store/fields";
import jail from "../../../media/jail2.png";

import { useSelector, useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import CloseButton from "./ModalButtons/CloseButton";

const JailModal = () => {
    const dispatch = useDispatch();

    const closeJailModalHandler = (e) => {
        dispatch(closeJailModal());
    };

    console.log("jailmodal");
    return (
        <>
            <Backdrop />
            <ModalWindow>
                <CloseButton handler={closeJailModalHandler} />
                <h1 className={styles.header}>You got in jail!</h1>
                <h3 className={styles.info}>
                    You will miss 3 steps, if you cant throw double.
                    <br /> Or use "Jail Card" to release yourself at any time.
                </h3>
                <img className={styles.jail} src={jail} alt={"jail-photo"}></img>
            </ModalWindow>
        </>
    );
};
export default JailModal;
