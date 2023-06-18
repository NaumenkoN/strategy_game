import styles from "./BuildingModal.module.css";
import { closeBuildingModal } from "../../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import CloseArgButton from "../ModalButtons/CloseArgButton";
import ModalWindow from "../ModalTemplate/ModalWindow";
import Backdrop from "../ModalTemplate/Backdrop";
import SectionBuildings from "./SectionBuildings";
import SectionEmployees from "./SectionEmployees";
import { act } from "react-dom/test-utils";

const BuildingModal = () => {
    const dispatch = useDispatch();
    const isOpenBuildingModalp1 = useSelector((state) => state.fields.player1.isOpenBuildingModal);
    const isOpenBuildingModalp2 = useSelector((state) => state.fields.player2.isOpenBuildingModal);
    const activePlayer = (isOpenBuildingModalp1 && "player1") || (isOpenBuildingModalp2 && "player2");

    const activePlayerFields = useSelector((state) => state.fields[`${activePlayer}`].fields);
    const fields = useSelector((state) => state.fields.fields);
    const emergencySellActives = useSelector((state) => state.fields.emergencySellActives);

    // Buttons handlers

    const closeBuildingModalHandler = (player) => {
        dispatch(closeBuildingModal(player));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Backdrop />
            <ModalWindow className={styles.modal}>
                <CloseArgButton
                    disabled={!emergencySellActives}
                    handler={closeBuildingModalHandler}
                    arguments={activePlayer}
                />
                <SectionBuildings
                    fields={fields}
                    activePlayer={activePlayer}
                    activePlayerFields={activePlayerFields}
                    onSubmitHandler={onSubmitHandler}
                />
                <SectionEmployees
                    fields={fields}
                    activePlayer={activePlayer}
                    activePlayerFields={activePlayerFields}
                    onSubmitHandler={onSubmitHandler}
                />
            </ModalWindow>
        </>
    );
};
export default BuildingModal;
