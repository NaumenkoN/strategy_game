import styles from "./RouletteModal.module.css";
import { rouletteSpin } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import ArgButton from "../ModalWindows/ModalButtons/ArgButton";

const RouletteModal = () => {
    const dispatch = useDispatch();
    const isOpenRouletteModalp1 = useSelector((state) => state.fields.player1.isOpenRouletteModal);
    const isOpenRouletteModalp2 = useSelector((state) => state.fields.player2.isOpenRouletteModal);
    const activePlayer = (isOpenRouletteModalp1 && "player1") || (isOpenRouletteModalp2 && "player2");

    const rouletteSpinHandler = (player) => {
        dispatch(rouletteSpin(player));
    };
    return (
        <>
            <Backdrop />
            <ModalWindow>
                <h1>Roulette</h1>
                <h2>{`${activePlayer}, you are on the roulette field. Spin the wheel, let\`s see what you got!`}</h2>
                <ArgButton message={"Spin the wheel"} handler={rouletteSpinHandler} arguments={activePlayer} />
            </ModalWindow>
        </>
    );
};
export default RouletteModal;
