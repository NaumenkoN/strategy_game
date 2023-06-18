import styles from "./RouletteModal.module.css";
import { rouletteSpin } from "../../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "../ModalTemplate/Backdrop";
import ModalWindow from "../ModalTemplate/ModalWindow";
import ArgButton from "../ModalButtons/ArgButton";
import sound from "../../../../media/roulette-sound.mp3";

const RouletteModal = () => {
    const dispatch = useDispatch();
    const player1Name = useSelector((state) => state.fields.player1.name);
    const player2Name = useSelector((state) => state.fields.player2.name);
    const isOpenRouletteModalp1 = useSelector((state) => state.fields.player1.isOpenRouletteModal);
    const isOpenRouletteModalp2 = useSelector((state) => state.fields.player2.isOpenRouletteModal);
    const activePlayer = (isOpenRouletteModalp1 && "player1") || (isOpenRouletteModalp2 && "player2");
    const activePlayerName = (isOpenRouletteModalp1 && player1Name) || (isOpenRouletteModalp2 && player2Name);

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
                    >{`${activePlayerName}, you are on the roulette field. Spin the wheel, let\`s see what you got!`}</h2>
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
