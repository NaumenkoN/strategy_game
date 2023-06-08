import styles from "./SellConfirmModal.module.css";
import { closeSellConfirmModal } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import CloseButton from "../ModalWindows/ModalButtons/CloseButton";

const SellConfirmModal = () => {
    const dispatch = useDispatch();

    const closeSellConfirmModalHandler = (e) => {
        dispatch(closeSellConfirmModal());
    };
    return (
        <>
            <Backdrop />
            <ModalWindow>
                <CloseButton handler={closeSellConfirmModalHandler} />

                <h1>Are you shure you whan`a comlitely sell all?</h1>
            </ModalWindow>
        </>
    );
};
export default SellConfirmModal;
