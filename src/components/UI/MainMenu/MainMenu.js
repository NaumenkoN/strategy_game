import styles from "./MainMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import SimpleButton from "../ModalWindows/ModalButtons/SimpleButton";
import { closeMainMenu, openRoulesModal, openSettings } from "../../../store/mainMenu";
import { openRestartGameModal } from "../../../store/fields";

import hoverSound from "../../../media/hover-sound.mp3";
import clickSound from "../../../media/click-sound.mp3";
import mainSound from "../../../media/mainMenuSound.mp3";

const MainMenu = () => {
    const dispatch = useDispatch();
    const gameIsStarted = useSelector((state) => state.dice.gameIsStarted);

    const mouseOverAudio = new Audio(hoverSound);
    const mouseClickAudio = new Audio(clickSound);
    const mainMenuSound = new Audio(mainSound);

    useEffect(() => {
        const interval = setInterval(() => {
            // mainMenuSound.play();
        }, 500);
        return () => {
            mainMenuSound.pause();
            clearInterval(interval);
        };
    }, []);

    const returntoGameHandler = () => {
        mouseClickAudio.play();
        dispatch(closeMainMenu());
    };

    const newGameHandler = () => {
        mouseClickAudio.play();
        if (gameIsStarted) {
            dispatch(openRestartGameModal());
        }
        if (!gameIsStarted) {
            dispatch(closeMainMenu());
        }
    };

    const openRoulesHandler = () => {
        mouseClickAudio.play();
        dispatch(openRoulesModal());
    };
    const settingsHandler = () => {
        dispatch(openSettings());
        mouseClickAudio.play();
    };
    const onmouseEnterHandler = () => {
        mouseOverAudio.play();
    };
    return (
        <div className={styles.main}>
            <div className={styles[`control-buttons`]}>
                {gameIsStarted && (
                    <SimpleButton
                        onMouseEnter={onmouseEnterHandler}
                        className={styles.button}
                        type={"button"}
                        message={"return to game"}
                        handler={returntoGameHandler}
                    />
                )}
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
            </div>
        </div>
    );
};

export default MainMenu;
