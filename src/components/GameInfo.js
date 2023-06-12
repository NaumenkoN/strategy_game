import styles from "./GameInfo.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dropTwoDices, addStep, nextTurn, setInJail } from "../store/diceAndPlayerPositions";
import {
    openSellStocksModal,
    openBuyBuildingModal,
    expectedTaxes,
    takeCredit,
    activateJailRealeaseCard,
} from "../store/fields";
import { openMainMenu, closeMainMenu } from "../store/mainMenu";
import PlayerInfo from "./UI/MainScreenInfo/PlayerInfo";
import SimpleButton from "./UI/ModalWindows/ModalButtons/SimpleButton";
import audio from "../media/rolling-dice.mp3";
import clickSound1 from "../media/click-sound.mp3";
import dice1 from "../media/dices/dice1.png";
import dice2 from "../media/dices/dice2.png";
import dice3 from "../media/dices/dice3.png";
import dice4 from "../media/dices/dice4.png";
import dice5 from "../media/dices/dice5.png";
import dice6 from "../media/dices/dice6.png";
import MenuMoveButton from "../components/UI/ModalWindows/ModalButtons/MenuMoveButtons";

const GameInfo = () => {
    const dispatch = useDispatch();
    // General
    const diceLeft = useSelector((state) => state.dice.firstDice);
    const diceRight = useSelector((state) => state.dice.secondDice);
    const activePlayer = useSelector((state) => state.dice.activePlayer);
    const fields = useSelector((state) => state.fields.fields);

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

    const playerIsActive = activePlayer === 1 ? "player1" : "player2";
    const audioPlay = new Audio(audio);
    const clickSound = new Audio(clickSound1);
    const dices = ["", dice1, dice2, dice3, dice4, dice5, dice6];
    // Getting empty fields on the screen

    // const emptyFields = Object.keys(fields).map((item) => {
    //     const index = Number(item);
    //     if (fields[`${index}`].status === "empty" || fields[`${index}`].status === "emptyC") {
    //         return `${item}, `;
    //     }
    // });

    // expected taxes
    useEffect(() => {
        dispatch(expectedTaxes(playerIsActive));
    }, [player1Steps, player2Steps, player1OnwnedFields, player2OnwnedFields]);

    // Handlers

    const takeCreditHandler = (player) => {
        const confirm = window.confirm("You shure you whan`a take a credit 1000? You should return 1500!");
        if (confirm === true) {
            dispatch(takeCredit(player));
        } else {
            return;
        }
    };
    const diceDroppingHandler = () => {
        audioPlay.play();
        setTimeout(() => {
            dispatch(dropTwoDices());
            dispatch(addStep(playerIsActive));
            dispatch(nextTurn());
        }, 1600);
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

    // setting 'spase' button to roll dices
    useEffect(() => {
        const onKeyPress = (e) => {
            if (e.key === " ") {
                diceDroppingHandler();
            }
        };
        document.addEventListener("keypress", onKeyPress);
        return () => {
            document.removeEventListener("keypress", onKeyPress);
        };
    }, []);

    return (
        <>
            <MenuMoveButton
                message={"Next move"}
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

            <div className={styles["game-info"]}>
                <div className={styles.dices}>
                    <div className={styles["dice-holder"]}>
                        <img className={styles.dice} src={dices[diceLeft]}></img>
                    </div>
                    <div className={styles["dice-holder"]}>
                        <img className={styles.dice} src={dices[diceRight]}></img>
                    </div>
                </div>
                <PlayerInfo
                    className={styles["player1"]}
                    index={1}
                    playerName={"player1"}
                    activePlayer={activePlayer}
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

                <PlayerInfo
                    className={styles["player2"]}
                    index={2}
                    playerName={"player2"}
                    activePlayer={activePlayer}
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
