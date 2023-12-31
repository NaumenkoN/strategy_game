import styles from "./FormSellStocks.module.css";
import { sellingStocks } from "../../../../store/fields";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import SimpleButton from "../ModalButtons/SimpleButton";
import Input from "../ModalTemplate/Input";
import clickSound from "../../../../media/click-sound.mp3";

const FormSellStocks = (props) => {
    const dispatch = useDispatch();
    const [stocksValue, setStocksValue] = useState(0);
    const activePlayerStocks = useSelector((state) => state.fields[`${props.activePlayer}`].stocks);
    const emergencySellActives = useSelector((state) => state.fields.emergencySellActives);
    const mouseClickAudio = new Audio(clickSound);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        mouseClickAudio.play();
        dispatch(sellingStocks([props.activePlayer, stocksValue]));
    };

    const onChangeHandler = (e) => {
        setStocksValue(e.target.value);
    };

    return (
        <form>
            <h2 className={styles.header}>{`You have ${activePlayerStocks} stocks.`}</h2>
            <Input
                className={styles.input}
                labelMessage={"Choise value multiple of 10:  "}
                onChange={onChangeHandler}
                value={stocksValue}
                id={"stocks"}
                type={"number"}
                min={10}
                max={activePlayerStocks}
                step={10}
            />
            <div className={styles["control-buttons"]}>
                <SimpleButton
                    className={styles.button}
                    message={"Sell"}
                    disabled={stocksValue === 0}
                    handler={onSubmitHandler}
                    type={"submit"}
                />
                <SimpleButton
                    disabled={!emergencySellActives}
                    className={styles.button}
                    message={"Cancel"}
                    handler={props.handler}
                />
            </div>
        </form>
    );
};

export default FormSellStocks;
