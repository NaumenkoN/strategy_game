import styles from "./GameInfo.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dropTwoDices, addStep, nextTurn, setInJail } from "../store/diceAndPlayerPositions";
import {
    openSellStocksModal,
    openBuyBuildingModal,
    expectedTaxes,
    activateJailRealeaseCard,
    openCreditModal,
} from "../store/fields";
import { openMainMenu } from "../store/mainMenu";
import PlayerInfo from "./UI/MainScreenInfo/PlayerInfo";
import audio from "../media/rolling-dice.mp3";
import clickSound1 from "../media/click-sound.mp3";
import playerMoveSound from "../media/playerMove.mp3";
import gameSound from "../media/gameSound.mp3";
import MenuMoveButton from "../components/UI/ModalWindows/ModalButtons/MenuMoveButtons";
import Dices from "./UI/MainScreenInfo/Dices";

const GameInfo = () => {
    const dispatch = useDispatch();
    // General

    const activePlayer = useSelector((state) => state.dice.activePlayer);
    const gameMusics = useSelector((state) => state.menu.gameMusic);

    // Player2
    const player2Money = useSelector((state) => state.fields.player2.money);
    const player2OnwnedFields = useSelector((state) => state.fields.player2.fields);
    const expectedTaxesP2 = useSelector((state) => state.fields.player2.expectedTaxes);
    const player2Debt = useSelector((state) => state.fields.player2.debt);
    const player2CreditCount = useSelector((state) => state.fields.player2.creditCount);
    const player2Steps = useSelector((state) => state.dice.playersPosition.player2);
    const p2JailCard = useSelector((state) => state.fields.player2.jailFreeCard);
    const p2JailDaysLeft = useSelector((state) => state.dice.playersPosition.p2InJail);
    const p2stocks = useSelector((state) => state.fields.player2.stocks);
    const player1Name = useSelector((state) => state.fields.player1.name);
    // Player1
    const p1stocks = useSelector((state) => state.fields.player1.stocks);
    const player1OnwnedFields = useSelector((state) => state.fields.player1.fields);
    const player1Steps = useSelector((state) => state.dice.playersPosition.player1);
    const p1JailCard = useSelector((state) => state.fields.player1.jailFreeCard);
    const p1JailDaysLeft = useSelector((state) => state.dice.playersPosition.p1InJail);
    const player1Money = useSelector((state) => state.fields.player1.money);
    const player1Debt = useSelector((state) => state.fields.player1.debt);
    const expectedTaxesP1 = useSelector((state) => state.fields.player1.expectedTaxes);
    const player1CreditCount = useSelector((state) => state.fields.player1.creditCount);
    const player2Name = useSelector((state) => state.fields.player2.name);

    const playerIsActive = activePlayer === 1 ? "player1" : "player2";
    const pactivePlayerName = activePlayer === 1 ? player1Name : player2Name;
    const audioPlay = new Audio(audio);
    const clickSound = new Audio(clickSound1);
    const playerMove = new Audio(playerMoveSound);
    // const gameMusic2 = new Audio(gameSound2);
    const gameMusic = new Audio(gameSound);

    useEffect(() => {
        let interval;
        if (gameMusics) {
            interval = setInterval(() => {
                gameMusic.play();
            }, 500);
        }

        return () => {
            gameMusic.pause();
            clearInterval(interval);
        };
    }, []);

    // expected taxes
    useEffect(() => {
        dispatch(expectedTaxes(playerIsActive));
    }, [player1Steps, player2Steps, player1OnwnedFields, player2OnwnedFields]);

    // Handlers

    const takeCreditHandler = (player) => {
        dispatch(openCreditModal());
    };
    const diceDroppingHandler = () => {
        audioPlay.play();
        setTimeout(() => {
            dispatch(dropTwoDices());
        }, 1600);
        setTimeout(() => {
            dispatch(nextTurn());
            dispatch(addStep(playerIsActive));
            playerMove.play();
        }, 2600);
    };
    const sellStocksHandler = (player) => {
        dispatch(openSellStocksModal(player));
    };
    const buyBuildingHandler = (player) => {
        dispatch(openBuyBuildingModal([player]));

        dispatch(expectedTaxes(playerIsActive));
    };

    const jailreleaseHandler = (player) => {
        dispatch(activateJailRealeaseCard(player));
        dispatch(setInJail(player));
    };

    const mainMenuHandler = () => {
        clickSound.play();
        dispatch(openMainMenu());
    };

    return (
        <>
            <div className={styles["game-info"]}>
                <PlayerInfo
                    className={styles["player1"]}
                    index={1}
                    playerName={player1Name}
                    activePlayer={activePlayer}
                    activePlayerName={playerIsActive}
                    playerSteps={player1Steps}
                    playerOnwnedFields={player1OnwnedFields}
                    playerMoney={player1Money}
                    playerDebt={player1Debt}
                    expectedTaxes={expectedTaxesP1}
                    jailCard={p1JailCard}
                    jailDaysLeft={p1JailDaysLeft}
                    playerCreditCount={player1CreditCount}
                    playerStocks={p1stocks}
                    sellStocksHandler={sellStocksHandler}
                    buyBuildingHandler={buyBuildingHandler}
                    takeCreditHandler={takeCreditHandler}
                    jailreleaseHandler={jailreleaseHandler}
                />
                <div className={styles["control-group"]}>
                    <Dices />
                    <MenuMoveButton
                        message={`Next Move "${pactivePlayerName}"`}
                        type={"button"}
                        handler={diceDroppingHandler}
                        className={styles["moove-button"]}
                    />
                    <MenuMoveButton
                        message={"MENU"}
                        type={"button"}
                        handler={mainMenuHandler}
                        className={styles["main-menu"]}
                    />
                </div>

                <PlayerInfo
                    className={styles["player2"]}
                    index={2}
                    playerName={player2Name}
                    activePlayer={activePlayer}
                    activePlayerName={playerIsActive}
                    playerSteps={player2Steps}
                    playerOnwnedFields={player2OnwnedFields}
                    playerMoney={player2Money}
                    playerDebt={player2Debt}
                    expectedTaxes={expectedTaxesP2}
                    jailCard={p2JailCard}
                    jailDaysLeft={p2JailDaysLeft}
                    playerCreditCount={player2CreditCount}
                    playerStocks={p2stocks}
                    sellStocksHandler={sellStocksHandler}
                    buyBuildingHandler={buyBuildingHandler}
                    takeCreditHandler={takeCreditHandler}
                    jailreleaseHandler={jailreleaseHandler}
                />
            </div>
        </>
    );
};

export default GameInfo;
