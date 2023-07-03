import styles from "./MainMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SimpleButton from "../ModalWindows/ModalButtons/SimpleButton";
import { closeMainMenu, openRoulesModal, openSettings } from "../../../store/mainMenu";
import { openRestartGameModal } from "../../../store/fields";
import { startGameIndex } from "../../../store/diceAndPlayerPositions";

import hoverSound from "../../../media/hover-sound.mp3";
import clickSound from "../../../media/click-sound.mp3";
import mainSound from "../../../media/mainMenuSound.mp3";
import moveSound from "../../../media/playerMove.mp3";

const MainMenu = () => {
    const dispatch = useDispatch();
    const gameIsStarted = useSelector((state) => state.dice.gameIsStarted);
    const mainMusic = useSelector((state) => state.menu.mainMusic);

    const mouseOverAudio = new Audio(hoverSound);
    const mouseClickAudio = new Audio(clickSound);
    const mainMenuSound = new Audio(mainSound);
    const openSound = new Audio(moveSound);

    useEffect(() => {
        let interval;
        if (mainMusic) {
            interval = setInterval(() => {
                mainMenuSound.play();
            }, 500);
        }

        return () => {
            mainMenuSound.pause();
            clearInterval(interval);
        };
    }, [mainMusic]);

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
            dispatch(startGameIndex());
            dispatch(closeMainMenu());
        }
    };

    const openRoulesHandler = () => {
        mouseClickAudio.play();

        dispatch(openRoulesModal());
    };
    const settingsHandler = () => {
        mouseClickAudio.play();

        dispatch(openSettings());
    };
    const onMouseEnterHandler = () => {
        mouseOverAudio.play();
    };
    return (
        <div className={styles.main}>
            <div className={styles[`control-buttons`]}>
                {gameIsStarted && (
                    <SimpleButton
                        onMouseEnter={onMouseEnterHandler}
                        className={styles.button}
                        type={"button"}
                        message={"Return to Game"}
                        handler={returntoGameHandler}
                    />
                )}
                <SimpleButton
                    onMouseEnter={onMouseEnterHandler}
                    className={styles.button}
                    type={"button"}
                    message={"New Game"}
                    handler={newGameHandler}
                />
                <SimpleButton
                    onMouseEnter={onMouseEnterHandler}
                    className={styles.button}
                    type={"button"}
                    message={"Roules"}
                    handler={openRoulesHandler}
                />
                <SimpleButton
                    onMouseEnter={onMouseEnterHandler}
                    className={styles.button}
                    type={"button"}
                    message={"Settings"}
                    handler={settingsHandler}
                />
            </div>
        </div>
    );
};

export default MainMenu;
