import styles from "./Settings.module.css";
import SoundsSwitcher from "./SoundsSwitcher";
import {
    closeSettings,
    closeMainMenu,
    toogleMainMusic,
    resetMainMusic,
    toogleGameMusic,
    resetGameMusic,
} from "../../../store/mainMenu";
import { playersGameSettings } from "../../../store/fields";
import {
    restartPositions,
    setPlayerFirstTurn,
    startGameIndex,
    resetTurnButton,
} from "../../../store/diceAndPlayerPositions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ModalWindow from "../ModalWindows/ModalTemplate/ModalWindow";
import Backdrop from "../ModalWindows/ModalTemplate/Backdrop";
import CloseButton from "../ModalWindows/ModalButtons/CloseButton";
import ArgButton from "../ModalWindows/ModalButtons/ArgButton";
import SimpleButton from "../ModalWindows/ModalButtons/SimpleButton";
import Input from "./../ModalWindows/ModalTemplate/Input";
import clickAudio from "../../../media/click-sound.mp3";
import dice from "../../../media/rolling-dice.mp3";

const Settings = () => {
    const dispatch = useDispatch();
    const playersTurn = useSelector((state) => state.dice.activePlayer);
    const buttonIsClicked = useSelector((state) => state.dice.setUpTurnButtonIsClicked);

    const gameIsStarted = useSelector((state) => state.dice.gameIsStarted);

    const [player1Name, setPlayer1Name] = useState("player1");
    const [player2Name, setPlayer2Name] = useState("player2");
    const [playerMoney, setPlayerMoney] = useState(800);
    const [playerStocks, setPlayerStocks] = useState(50);
    const [jailCard, setJailCard] = useState(0);
    const [fightWithdrawal, setFightWithdrawal] = useState(50);
    const [fieldsRepairignAmount, setFieldsRepairignAmount] = useState(50);
    const [livingFieldPrice, setLivingFieldPrice] = useState(200);
    const [comFieldPrice, setComFieldPrice] = useState(400);
    const [livFieldRentalIndex, setLivFieldRentalIndex] = useState(0.25);
    const [comFieldRentalIndex, setComFieldRentalIndex] = useState(0.3);
    const [livingTaxes, setLivingTaxes] = useState(0.03);
    const [comTaxes, setComTaxes] = useState(0.05);
    const [managerIndex, setManagerIndex] = useState(1.5);
    const [engineerIndex, setEngineerIndex] = useState(1.5);
    const [engineerPrice, setEngineerPrice] = useState(600);
    const [managerPrice, setManagerPrice] = useState(1000);
    const switchMainStatus = useSelector((state) => state.menu.mainMusic);
    const switchGameStatus = useSelector((state) => state.menu.gameMusic);

    const clickSound = new Audio(clickAudio);
    const rollingDice = new Audio(dice);

    const resetToDefault = () => {
        clickSound.play();
        dispatch(resetTurnButton());
        dispatch(resetMainMusic());
        dispatch(resetGameMusic());
        setPlayer1Name("player1");
        setPlayer2Name("player2");
        setPlayerMoney(800);
        setPlayerStocks(50);
        setJailCard(0);
        setFightWithdrawal(50);
        setFieldsRepairignAmount(50);
        setLivingFieldPrice(200);
        setComFieldPrice(400);
        setLivFieldRentalIndex(0.25);
        setComFieldRentalIndex(0.3);
        setLivingTaxes(0.03);
        setComTaxes(0.05);
        setManagerIndex(1.5);
        setEngineerIndex(1.5);
        setEngineerPrice(600);
        setManagerPrice(1000);
    };

    const closeSettingsHandler = () => {
        dispatch(closeSettings());
    };

    const startGameHandler = ({
        player1Name,
        player2Name,
        playerMoney,
        playerStocks,
        jailCard,
        fightWithdrawal,
        fieldsRepairignAmount,
        livingFieldPrice,
        comFieldPrice,
        livFieldRentalIndex,
        comFieldRentalIndex,
        livingTaxes,
        comTaxes,
        managerIndex,
        engineerIndex,
        engineerPrice,
        managerPrice,
    }) => {
        clickSound.play();

        dispatch(
            playersGameSettings({
                player1Name,
                player2Name,
                playerMoney,
                playerStocks,
                jailCard,
                fightWithdrawal,
                fieldsRepairignAmount,
                livingFieldPrice,
                comFieldPrice,
                livFieldRentalIndex,
                comFieldRentalIndex,
                livingTaxes,
                comTaxes,
                managerIndex,
                engineerIndex,
                engineerPrice,
                managerPrice,
            })
        );
        dispatch(restartPositions());
        dispatch(setPlayerFirstTurn(playersTurn));
        dispatch(closeSettings());
        dispatch(closeMainMenu());
        dispatch(startGameIndex());
    };

    const whoseTurnSetupHandler = () => {
        rollingDice.play();
        setTimeout(() => {
            const dice = Math.trunc(Math.random() * 2) + 1;
            dispatch(setPlayerFirstTurn(dice));
        }, 2600);
    };

    const classesCircle = switchMainStatus ? styles["switcher-circle--on"] : styles["switcher-circle--of"];
    const classesSwitcher = switchMainStatus ? styles.switcherOn : styles.switcherOf;
    const classesCircle2 = switchGameStatus ? styles["switcher-circle--on"] : styles["switcher-circle--of"];
    const classesSwitcher2 = switchGameStatus ? styles.switcherOn : styles.switcherOf;

    // 'onChange handlers

    const player1NameHandler = (e) => {
        setPlayer1Name(e.target.value);
    };
    const player2NameHandler = (e) => {
        setPlayer2Name(e.target.value);
    };
    const playerMoneyHandler = (e) => {
        setPlayerMoney(e.target.value);
    };
    const playerStocksHandler = (e) => {
        setPlayerStocks(e.target.value);
    };
    const jailCardHandler = (e) => {
        setJailCard(e.target.value);
    };
    const fightWithdrawalHandler = (e) => {
        setFightWithdrawal(e.target.value);
    };
    const fieldsRepairignAmountHandler = (e) => {
        setFieldsRepairignAmount(e.target.value);
    };
    const livingFieldPriceHandler = (e) => {
        setLivingFieldPrice(e.target.value);
    };
    const CommercialFieldPriceHandler = (e) => {
        setComFieldPrice(e.target.value);
    };
    const livFieldrentalIndexHandler = (e) => {
        setLivFieldRentalIndex(e.target.value);
    };
    const comFieldrentalIndexHandler = (e) => {
        setComFieldRentalIndex(e.target.value);
    };
    const livTaxesIndexHandler = (e) => {
        setLivingTaxes(e.target.value);
    };
    const comTaxesIndexHandler = (e) => {
        setComTaxes(e.target.value);
    };
    const managerIndexHandler = (e) => {
        setManagerIndex(e.target.value);
    };
    const engineerIndexHandler = (e) => {
        setEngineerIndex(e.target.value);
    };
    const engineerPriceHandler = (e) => {
        setEngineerPrice(e.target.value);
    };
    const managerPriceHandler = (e) => {
        setManagerPrice(e.target.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    const mainMenuMusicHandler = (e) => {
        dispatch(toogleMainMusic());
    };
    const gameMusicHandler = () => {
        dispatch(toogleGameMusic());
    };
    const returnToGame = () => {
        dispatch(closeSettings());
        dispatch(closeMainMenu());
    };

    return (
        <>
            <Backdrop />
            <ModalWindow className={styles.modal}>
                <CloseButton className={styles["close-button"]} handler={closeSettingsHandler} />

                <form className={styles.form} onSubmit={onSubmitHandler}>
                    <SoundsSwitcher
                        message={<p className={styles.p}>Main menu music:</p>}
                        handler={mainMenuMusicHandler}
                        classesCircle={classesCircle}
                        classesSwitcher={classesSwitcher}
                    />
                    <SoundsSwitcher
                        message={<p className={styles.p}>Game music:</p>}
                        handler={gameMusicHandler}
                        classesCircle={classesCircle2}
                        classesSwitcher={classesSwitcher2}
                    />

                    <div className={styles.input}>
                        <p className={styles.p}>Player first step:</p>
                        <SimpleButton
                            message={
                                !buttonIsClicked ? (
                                    <p className={styles.p0}>Set up</p>
                                ) : playersTurn === 1 ? (
                                    <p className={styles.p0}>{player1Name}</p>
                                ) : (
                                    <p className={styles.p0}>{player2Name}</p>
                                )
                            }
                            className={styles["setup-button"]}
                            handler={whoseTurnSetupHandler}
                            disabled={buttonIsClicked || gameIsStarted}
                        />
                    </div>
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Player1 name</p>}
                        onChange={player1NameHandler}
                        value={player1Name}
                        id={"player1-name"}
                        type={"string"}
                        min={1}
                        max={10}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Player2 name</p>}
                        onChange={player2NameHandler}
                        value={player2Name}
                        id={"player2-name"}
                        type={"string"}
                        min={1}
                        max={10}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Players money</p>}
                        onChange={playerMoneyHandler}
                        value={playerMoney}
                        id={"player-money"}
                        type={"number"}
                        min={0}
                        max={100000}
                        // step={1}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Players stocks</p>}
                        onChange={playerStocksHandler}
                        value={playerStocks}
                        id={"player-stocks"}
                        type={"number"}
                        min={10}
                        max={500}
                        step={10}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Jail cards</p>}
                        onChange={jailCardHandler}
                        value={jailCard}
                        id={"jail-card"}
                        type={"number"}
                        min={0}
                        max={10}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Fight withdrawal</p>}
                        onChange={fightWithdrawalHandler}
                        value={fightWithdrawal}
                        id={"Fightwithdrawal"}
                        type={"number"}
                        min={10}
                        max={1000}
                        step={10}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Filds repairing amount</p>}
                        onChange={fieldsRepairignAmountHandler}
                        value={fieldsRepairignAmount}
                        id={"fildsreparignAmount"}
                        type={"number"}
                        min={10}
                        max={1000}
                        step={10}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Living field price</p>}
                        onChange={livingFieldPriceHandler}
                        value={livingFieldPrice}
                        id={"livingFields-price"}
                        type={"number"}
                        min={100}
                        max={1000}
                        step={50}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Commercial field price</p>}
                        onChange={CommercialFieldPriceHandler}
                        value={comFieldPrice}
                        id={"comFields-price"}
                        type={"number"}
                        min={200}
                        max={2000}
                        step={100}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Living field rental index</p>}
                        onChange={livFieldrentalIndexHandler}
                        value={livFieldRentalIndex}
                        id={"livFields-index"}
                        type={"number"}
                        min={0.05}
                        max={0.5}
                        step={0.01}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Com. field rental index</p>}
                        onChange={comFieldrentalIndexHandler}
                        value={comFieldRentalIndex}
                        id={"comFields-index"}
                        type={"number"}
                        min={0.1}
                        max={0.5}
                        step={0.01}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Living field taxes index</p>}
                        onChange={livTaxesIndexHandler}
                        value={livingTaxes}
                        id={"livFields-taxes"}
                        type={"number"}
                        min={0.01}
                        max={0.2}
                        step={0.01}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Commercial field taxes index</p>}
                        onChange={comTaxesIndexHandler}
                        value={comTaxes}
                        id={"comFields-taxes"}
                        type={"number"}
                        min={0.02}
                        max={0.25}
                        step={0.01}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Manager index</p>}
                        onChange={managerIndexHandler}
                        value={managerIndex}
                        id={"manager-index"}
                        type={"number"}
                        min={1.1}
                        max={5}
                        step={0.1}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Engineer index</p>}
                        onChange={engineerIndexHandler}
                        value={engineerIndex}
                        id={"engineer-index"}
                        type={"number"}
                        min={1.1}
                        max={5}
                        step={0.1}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Engineer price</p>}
                        onChange={engineerPriceHandler}
                        value={engineerPrice}
                        id={"engineer-price"}
                        type={"number"}
                        min={200}
                        max={1200}
                        step={100}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={<p className={styles.p}>Manager price</p>}
                        onChange={managerPriceHandler}
                        value={managerPrice}
                        id={"manager-price"}
                        type={"number"}
                        min={300}
                        max={2000}
                        step={100}
                    />
                    <div className={styles["button-group"]}>
                        <ArgButton
                            className={styles.button}
                            type={"submit"}
                            handler={startGameHandler}
                            arguments={{
                                player1Name,
                                player2Name,
                                playerMoney,
                                playerStocks,
                                jailCard,
                                fightWithdrawal,
                                fieldsRepairignAmount,
                                livingFieldPrice,
                                comFieldPrice,
                                livFieldRentalIndex,
                                comFieldRentalIndex,
                                livingTaxes,
                                comTaxes,
                                managerIndex,
                                engineerIndex,
                                engineerPrice,
                                managerPrice,
                            }}
                            message={"Start Game"}
                        />
                        {gameIsStarted && (
                            <SimpleButton
                                className={styles.button}
                                type={"submit"}
                                handler={returnToGame}
                                message={"Return to Game"}
                            />
                        )}
                        <SimpleButton
                            className={styles.button}
                            type={"submit"}
                            handler={resetToDefault}
                            message={"Reset Settings"}
                        />
                    </div>
                </form>
            </ModalWindow>
        </>
    );
};

export default Settings;
