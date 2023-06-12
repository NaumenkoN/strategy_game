import styles from "./MainMenu.module.css";
import { useSelector, useDispatch } from "react-redux";

import SimpleButton from "../ModalWindows/ModalButtons/SimpleButton";
import { closeMainMenu } from "../../../store/mainMenu";
import { restartGame } from "../../../store/fields";
import { restartPositions } from "../../../store/diceAndPlayerPositions";
import hoverSound from "../../../media/hover-sound.mp3";
import clickSound from "../../../media/click-sound.mp3";

const MainMenu = () => {
    const dispatch = useDispatch();
    const gameIsStarted = useSelector((state) => state.dice.gameIsStarted);

    const mouseOverAudio = new Audio(hoverSound);
    const mouseClickAudio = new Audio(clickSound);

    const returntoGameHandler = () => {
        mouseClickAudio.play();
        dispatch(closeMainMenu());
    };

    console.log(gameIsStarted);

    const newGameHandler = () => {
        mouseClickAudio.play();
        if (gameIsStarted) {
            const answer = window.confirm("Are you shure you whant to restart game?");
            if (answer) {
                dispatch(restartGame());
                dispatch(restartPositions());
                dispatch(closeMainMenu());
            }
        }
        if (!gameIsStarted) {
            dispatch(closeMainMenu());
        }
    };

    const openRoulesHandler = () => {
        mouseClickAudio.play();
    };
    const settingsHandler = () => {
        mouseClickAudio.play();
    };
    const onmouseEnterHandler = () => {
        mouseOverAudio.play();
    };
    return (
        <div className={styles.main}>
            <div className={styles[`control-buttons`]}>
                <SimpleButton
                    onMouseEnter={onmouseEnterHandler}
                    className={styles.button}
                    type={"button"}
                    message={"roules"}
                    handler={openRoulesHandler}
                />
                <SimpleButton
                    onMouseEnter={onmouseEnterHandler}
                    className={styles.button}
                    type={"button"}
                    message={"settings"}
                    handler={settingsHandler}
                />
                <SimpleButton
                    onMouseEnter={onmouseEnterHandler}
                    className={styles.button}
                    type={"button"}
                    message={"new game"}
                    handler={newGameHandler}
                />
                <SimpleButton
                    onMouseEnter={onmouseEnterHandler}
                    className={styles.button}
                    type={"button"}
                    message={"return to game"}
                    handler={returntoGameHandler}
                />
            </div>
        </div>
    );
};

export default MainMenu;
