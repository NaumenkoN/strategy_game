import styles from "./JailModal.module.css";
import { closeJailModal } from "../../../store/fields";

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
                <h1>Jail</h1>
            </ModalWindow>
        </>
    );
};
export default JailModal;
