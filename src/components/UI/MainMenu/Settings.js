import styles from "./Settings.module.css";
import { closeSettings, closeMainMenu } from "../../../store/mainMenu";
import { playersGameSettings } from "../../../store/fields";
import { restartPositions, setPlayerFirsTurn, startGameIndex } from "../../../store/diceAndPlayerPositions";
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

    const clickSound = new Audio(clickAudio);
    const rollingDice = new Audio(dice);

    const resetToDefault = () => {
        clickSound.play();
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
        resetToDefault();
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
        dispatch(setPlayerFirsTurn(playersTurn));
        dispatch(closeSettings());
        dispatch(closeMainMenu());
        dispatch(startGameIndex());
    };

    const whoseTurnSetupHandler = () => {
        rollingDice.play();
        setTimeout(() => {
            const dice = Math.trunc(Math.random() * 2) + 1;
            dispatch(setPlayerFirsTurn(dice));
        }, 2600);
    };

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

    return (
        <>
            <Backdrop />
            <ModalWindow className={styles.modal}>
                <CloseButton className={styles["close-button"]} handler={closeSettingsHandler} />

                <form className={styles.form} onSubmit={onSubmitHandler}>
                    <div className={styles.input}>
                        <p className={styles.p}>Whose first step:</p>
                        <SimpleButton
                            message={!buttonIsClicked ? "Set up" : playersTurn === 1 ? "player1" : "player2"}
                            className={styles["setup-button"]}
                            handler={whoseTurnSetupHandler}
                            disabled={!buttonIsClicked}
                        />
                    </div>
                    <Input
                        className={styles.input}
                        labelMessage={"Player1 name"}
                        onChange={player1NameHandler}
                        value={player1Name}
                        id={"player1-name"}
                        type={"string"}
                        min={1}
                        max={10}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={"Player2 name"}
                        onChange={player2NameHandler}
                        value={player2Name}
                        id={"player2-name"}
                        type={"string"}
                        min={1}
                        max={10}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={"Players money"}
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
                        labelMessage={"Players stocks"}
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
                        labelMessage={"Jail cards"}
                        onChange={jailCardHandler}
                        value={jailCard}
                        id={"jail-card"}
                        type={"number"}
                        min={0}
                        max={10}
                    />
                    <Input
                        className={styles.input}
                        labelMessage={"Fight withdrawal"}
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
                        labelMessage={"Filds repairing amount"}
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
                        labelMessage={"Living field price"}
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
                        labelMessage={"Commercial field price"}
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
                        labelMessage={"Living field rental index"}
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
                        labelMessage={"Commercial field rental index"}
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
                        labelMessage={"Living field taxes index"}
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
                        labelMessage={"Commercial field taxes index"}
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
                        labelMessage={"Manager index"}
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
                        labelMessage={"Engineer index"}
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
                        labelMessage={"Engineer price"}
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
                        labelMessage={"Manager price"}
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
                            message={"New Game"}
                        />
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
