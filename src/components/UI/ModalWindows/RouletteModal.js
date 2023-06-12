import styles from "./RouletteModal.module.css";
import { rouletteSpin } from "../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import ArgButton from "../ModalWindows/ModalButtons/ArgButton";
import sound from "../../../media/roulette-sound.MP3";

const RouletteModal = () => {
    const dispatch = useDispatch();
    const isOpenRouletteModalp1 = useSelector((state) => state.fields.player1.isOpenRouletteModal);
    const isOpenRouletteModalp2 = useSelector((state) => state.fields.player2.isOpenRouletteModal);
    const activePlayer = (isOpenRouletteModalp1 && "player1") || (isOpenRouletteModalp2 && "player2");

    const rouletteSound = new Audio(sound);

    const rouletteSpinHandler = (player) => {
        rouletteSound.play();
        setTimeout(() => {
            dispatch(rouletteSpin(player));
        }, 4270);
    };

    return (
        <>
            <Backdrop />
            <ModalWindow>
                <div className={styles.info}>
                    <h1 className={styles.header}>Roulette</h1>
                    <h2
                        className={styles.description}
                    >{`${activePlayer}, you are on the roulette field. Spin the wheel, let\`s see what you got!`}</h2>
                    <ArgButton
                        className={styles.button}
                        message={"Spin the wheel"}
                        handler={rouletteSpinHandler}
                        arguments={activePlayer}
                    />
                </div>
            </ModalWindow>
        </>
    );
};
export default RouletteModal;
